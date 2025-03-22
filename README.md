# inventures-work-application-frontend

NextTS-based frontend application.

## Runtime

Production deployment URL: [`https://inventures-work-application-frontend.vercel.app/home`](https://inventures-work-application-frontend.vercel.app/home).

## Dependencies

- NodeJS 20.x.
- `pnpm` package manager.

## Build and run

1. Install the dependencies with `pnpm install`.
2. In order to setup the connection to the backend, set the required ENV(s) stated at the [`.env`](./.env) file. Override this default development ENVs with your own `.env.local` file.
3. Start the local development server with `pnpm run:dev`. This will serve the Next application at the default port (`http://localhost:3000`).
