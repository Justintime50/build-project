<div align="center">

# Build Project

Boilerplate setup for all your favorite languages and frameworks.

[![Build Status](https://travis-ci.org/justintime50/build-project.svg?branch=master)](https://travis-ci.org/justintime50/build-project)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

<img src="assets/showcase.png">

</div>

## What Can it Do?

Build Project can setup a variety of projects for you saving precious time when starting a new project. Build Project has the following features:

1. Create a `new directory`
1. Initiate a `git repo`
1. Generate a `.gitignore file`
1. Generate a `.travis.yml file`
1. Generate a `LICENSE file`
1. Generate a `Dockerfile` & `docker-compose.yml file`
1. Setup your choice of project
    - **Laravel:** Initiate a Laravel project, install packages, publish the storage directory, and scaffold the authentication system.
    - **Node:** Initiate an NPM `package.json` file, `index.js` file, and install ESLint
    - **Python:** Create a `.py` file and a `requirements.txt` file with `pylint` included
    - **Wordpress:** Download and unzip Wordpress
    - **Shell:** Create a script file
    - **Custom:** Build Project will not create an opinionated boilerplate

## Prerequisites

Build Project requires the following for certain pieces of the tool. Without them, your builds may fail.

- Git
- Node/NPM
- PHP/Composer
- Curl

## Install

```bash
npm i -g build-project-tool
```

## Usage

Navigate to the folder where you want to create your project, then run the command:

```bash
cd ~/git

build-project
```

Follow the prompts to build a variety of projects.

## Development

Run linting:

```bash
npx eslint index.js
```
