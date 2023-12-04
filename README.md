# CemWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

`npm install -g @angular/cli@15.0.3`

The project is on live with the following URL: https://cemugras.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

You can also use:

`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Used Libraries

1) [ngx-gallery](https://github.com/murhafsousli/ngx-gallery) |
2) [flex-layout](https://github.com/angular/flex-layout) |
3) [platform-browser](https://www.npmjs.com/package/@angular/platform-browser) |
4) [youtube-player](https://github.com/angular/components/tree/main/src/youtube-player) |
5) [angular-table](https://material.angular.io/components/table) |
6) [ngx-leaflet](https://leafletjs.com/index.html)
7) [ngx-translate](https://www.npmjs.com/package/@ngx-translate/core)
8) [ng-apexcharts](https://github.com/apexcharts/ng-apexcharts)

#### 1) ngx-gallery Development Notes
#### 2) flex-layout Development Notes
#### 3) platform-browser Development Notes
#### 4) youtube-player Development Notes
#### 5) angular-table Development Notes
#### 6) ngx-leaflet Development Notes
1) `npm install leaflet @asymmetrik/ngx-leaflet`
2) `npm install --save-dev @types/leaflet`
#### 6) ngx-translate Development Notes
#### 7) ng-apexcharts Development Notes
1) `npm i ng-apexcharts`

## Known Issues
`npm audit fix` -> 1 moderate severity vulnerability

`npm audit fix --force` -> if above command not works

`npm install --legacy-peer-deps` -> upstream dependency conflict

### Issue ng commands
> AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system.
>
> CategoryInfo          : SecurityError: (:) [], PSSecurityException
>
> FullyQualifiedErrorId : UnauthorizedAccess

### Solution ng commands
- set-ExecutionPolicy RemoteSigned -Scope CurrentUser
- Get-ExecutionPolicy
- Get-ExecutionPolicy -list

## Firebase Deployment
If environment is setting first time, start with #1 otherwise start with #3
1) `npm install -g firebase-tools`
2) `firebase login`
3) `firebase init`
    - `What do you want to use as your public directory?` -> dist/cem-web-project
    - `Configure as a single-page app (rewrite all urls to /index.html)?` -> Yes
    - `Set up automatic builds and deploys with GitHub?` -> No
4) `npm run build`
6) `firebase deploy`

## Fixes For Deployment
1) `nvm use 14.20` -> if any node.js version issue occurs
2) `npm install -g firebase-tools` -> if command not found: firebase

## Features Inprogress
- [x] Mobile responsive styles
- [x] Earthquakes page
- [x] Language Support (TR/EN)
- [x] Side Bar refactored for listing features
- [x] What is My IP page with map
- [x] Game server ping page
- [x] Online Games Server Ping Page
- [x] Projects Page
- [ ] Currency Page
- [ ] Domain Check Page
- [ ] QR Code Generator Page
- [ ] Yes/No Game Page
- [ ] Universities Page by Countries
- [ ] Flight page
- [ ] Weather Page
- [ ] Epic Games Free Games Component (Will include free games list with dates.)