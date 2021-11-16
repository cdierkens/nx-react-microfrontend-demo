# Nx React Microfrontend Demo

This repository demonstrates a React Microfrontend using Webpack Module Federation.

## Setup

```
yarn install
```

## Run

```
yarn start
```

Visit http://localhost:3000

Note: You can also visit the shop application at http://localhost:3001, with the caveat that shared styles and theming have not been implemented.

## Structure

### `apps/app-shell`

Houses the appliction wide routes and lazy loads the `shop` app at the `/shop` route.

### `apps/shop`

Microfrontend application that is reponsible for `shop` nested routes.
