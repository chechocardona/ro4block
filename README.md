# B4OS-frontend (bforos3:frontend)

The project website is [here](http://blockchain4openscience.com/#home).

-----
The project is curretly in development using frameworks and tools from Hyperledger, in particular [Fabric](https://hyperledger-fabric.readthedocs.io/en/release-1.1/) and [Composer](https://hyperledger.github.io/composer/latest/introduction/introduction)  

Before starting this tutorial, follow the steps described in [Blockchain4openscience/hyperledger](https://github.com/Blockchain4openscience/hyperledger) to deploy the hyperledger business network and start the composer rest server

## Install CORS plugin

Initially, the authentication process in orcid is performed in the frontend directly until the rest server is modified to perform authentication . For this reason, is necessary to install a CORS plugin for web navigator, some options can be:

* [CORS everywhere](https://addons.mozilla.org/es/firefox/addon/cors-everywhere/) for firefox
* [Moesif Origin](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) for chrome

## Interacting with an Angular application

In order to build the user interfaces for this business network please clone the repository and follow the instructions

`````
git clone https://github.com/Blockchain4openscience/B4OS-frontend
`````

Now navigate to the folder. Check that npm is installed by running

`````
npm -v
`````

otherwise run. Although npm might already be installed, re-intalling npm is important to update any dependencies.

`````
npm install
`````

Once the installation is complete run,

`````
npm start
`````

and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

-----

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Destroy a previous set up
`````
docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)
`````
