<div align="center">

# Build Project

Boilerplate setup for all your favorite languages and frameworks.

[![Build Status](https://travis-ci.org/justintime50/build-project.svg?branch=master)](https://travis-ci.org/justintime50/build-project)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

<img src="assets/showcase.png">

</div>

## What Can it Do?

Build Project can setup a variety of projects for you saving precious time when starting a new project. Build Project has the following features:

1. Create a new directory
1. Initiate a Git repo
1. Generate a .gitignore file
1. Generate a .travis.yml file
1. Generate a LICENSE file
1. Generate a Dockerfile & docker-compose.yml file
1. Setup your choice of project
    - **Laravel:** Initiate a Laravel project and install packages
    - **Node:** Initiate an NPM package.json file, index.js file, ESLint, and install packages
    - **Wordpress:** Download and unzip Wordpress
    - **Shell:** Create a script file

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

## Roadmap of Feature Set

This project is intended to replace [git-create](https://github.com/Justintime50/git-create) longterm.

General
- Build Readme

Git
- Push to git
- Git login

Node
- Configure eslint

Python
- Setup python file
- Setup Python linting

Laravel
- Publish storage locally
- Setup Auth
