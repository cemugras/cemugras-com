# CemWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

The project is on live with the following URL: https://cemugras.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Used Libraries

[ngx-gallery](https://github.com/murhafsousli/ngx-gallery) |
[flex-layout](https://github.com/angular/flex-layout) |
[platform-browser](https://www.npmjs.com/package/@angular/platform-browser) |
[youtube-player](https://github.com/angular/components/tree/main/src/youtube-player) |
[angular-table](https://material.angular.io/components/table)

## Known Issues
`npm audit fix` -> 1 moderate severity vulnerability

`npm audit fix --force` -> if above command not works

## Firebase Deployment
If environment is setting first time, start with #1 otherwise start with #3
1) `npm install -g firebase-tools`
2) `firebase login`
3) `firebase init` then select related options
4) `npm run build`
5) `nvm use 14.20` -> if any node.js version issue occurs
6) `firebase deploy`

## Features Inprogress
1) Mobile responsive styles
2) Language Support (TR/EN)
3) Epic Games Free Games Component (Will include free games list with dates.)
