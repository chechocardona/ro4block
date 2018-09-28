// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceUrl: 'http://localhost:3000',
  redirectUrl: 'localhost:4200/login',
  // Orcid information
  orcidUrl: 'https://sandbox.orcid.org/oauth/token',
  orcidClientId: 'APP-WT2P3CALSH158B05',
  orcidClientSecret: '1823fac6-14e9-4a70-a4aa-f48ba620f332',
  orcidUserUrl: 'https://api.sandbox.orcid.org/v2.1/',
  // Github information
  githubClientId: 'f21420b46eee14d104fd',
  githubClientSecret: 'cb369a5e3988e105f238ac90d3d18e39422f573b',
  githubApi: "https://github.com/login/oauth/access_token",
  githubUserApi: "https://api.github.com/user",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
