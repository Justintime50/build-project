module.exports = {

    // Laravel Dockerfile contents
    laravelDockerfile:

        `FROM justintime50/nginx-php:7.4

COPY --chown=www-data:www-data ./src /var/www/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN php composer.phar install -q --no-ansi --no-interaction --no-scripts --no-suggest --no-progress --prefer-dist \
    && chmod -R 775 storage \\
    && php artisan storage:link \\
    && chmod -R 775 bootstrap/cache
`,


    // Laravel docker-compose.yml contents
    laravelDockerCompose:

        `version: "3.7"
services:

    myservice:
        build: .
        restart: always
        container_name: myservice
        volumes: 
            - ./src/storage/logs:/var/www/html/storage/logs
            - ./src/storage/app/public:/var/www/html/storage/app/public
            - ./src/.env:/var/www/html/.env
        ports:
            - "8000:80"
        networks:
            - myservice

    db:
        image: mysql:8.0.18
        restart: always
        container_name: db
        env_file:
            - init-db.env
        volumes:
            - ./db:/var/lib/mysql
        networks:
            - myservice

networks:
    myservice:
        name: myservice
`

}
