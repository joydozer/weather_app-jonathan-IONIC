// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_key: 'f7039b99de808f6c99378a94461b423c',
  base_url: 'https://api.openweathermap.org/data/2.5/weather?lat=',
  base_url2: 'https://api.openweathermap.org/data/2.5/weather?lat=1.487&lon=124.8455&units=metric&exclude=minutely,hourly,daily',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
