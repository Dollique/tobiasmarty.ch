# tobiasmarty.ch

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## run Storyblok preview on https (locally)

```bash
// Install mkcert for creating a valid certificate:

      // Mac OS
      $ brew install mkcert

      // Windows
      $ choco install mkcert

      $ mkcert -install
      $ mkcert localhost

// Then install and run the proxy

      $ npm install -g local-ssl-proxy
      $ local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem

// https is now running on port 3010 and forwarding requests to http 3000

```

## development

```bash

// to develop always have two tabs open running these

$ yarn dev
$ local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem

```

## generate Stroyblok Types

Find the [documentation here](https://www.storyblok.com/faq/how-can-i-utilize-typescript-in-my-storyblok-project).

Everytime you change the component schema in Storyblok you need to run the following command to update the types:

```bash
$ storyblok pull-components --space SPACE_ID
$ yarn generate-sb-types
```

remember to remove the json file after you are done.

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Pinia store files.

More information about the usage of this directory in [the documentation](https://nuxt.com/modules/pinia).
