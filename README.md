# CemWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

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

#### 1) ngx-gallery Development Notes
#### 2) flex-layout Development Notes
#### 3) platform-browser Development Notes
#### 4) youtube-player Development Notes
#### 5) angular-table Development Notes
#### 6) ngx-leaflet Development Notes
1) `npm install leaflet @asymmetrik/ngx-leaflet`
2) `npm install --save-dev @types/leaflet`

## Known Issues
`npm audit fix` -> 1 moderate severity vulnerability

`npm audit fix --force` -> if above command not works

## Firebase Deployment
If environment is setting first time, start with #1 otherwise start with #3
1) `npm install -g firebase-tools`
2) `firebase login`
3) `firebase init` then select related options
4) `npm run build`
6) `firebase deploy`

## Fixes For Deployment
1) `nvm use 14.20` -> if any node.js version issue occurs
2) `npm install -g firebase-tools` -> if command not found: firebase

## Features Inprogress
- [x] Mobile responsive styles (release-v3)
- [x] Earthquakes page for web browsers (release-v4)
- [x] Earthquakes page for mobile browsers (release-v5)
- [ ] Language Support (TR/EN)
- [ ] Epic Games Free Games Component (Will include free games list with dates.)
