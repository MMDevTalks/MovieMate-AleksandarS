// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  THEMOVIE_DB_BASE_URL: 'https://www.themoviedb.org',
  THEMOVIE_DB_API_URL: 'https://api.themoviedb.org/3',
  THEMOVIE_DB_API_KEY: '4fe381b445356e95c3577b9f2a8b53a1',
  APP_URL: 'http://localhost:4200'
};
