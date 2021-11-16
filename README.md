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

## Structure

### `apps/app-shell`

Houses the appliction wide routes and lazy loads the `shop` app at the `/shop` route.

### `apps/shop`

Microfrontend application that is reponsible for `shop` nested routes.
