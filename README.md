# Ceramicssy site

This site is the Ceramicssy site, built on [Gatsby](https://www.gatsbyjs.com/).

The site **must meet WCAG 2.1 AA accessibility standards**.

# Requirements

- Node v14.0 or higher.
- Gatsby ^4.24.7.
- Project is built with Gatsby and Firebase.
- Deployment is done by surge.sh.

# Installation

To install the project, run the npm script:

```bash
$ npm install
```

# Setup / Configuration

## Dependencies

When installing the Gatsby boilerplate, ensure your `package.json` has the required packages in the `dependencies` section.

## Locally

```bash
$ npm run deploy
```

## Staging

Merge to `main`.

## Production

Merge to `main`.

## Scripts

Add the following commands to the scripts section of your package.json file

```json
    "develop": "gatsby clean && gatsby develop",
    "start": "npm run develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "deploy": "npm run build && node deploy.js"
```

# Build

To build the project, run the npm script:

```bash
$ npm run build
```

This will build the files for testing and deployment. You'll find the built version of the project in the `/build` folder.

# Deployment

## Locally

To run the project locally, run the npm script:

```bash
$ npm start
```

or

```bash
$ npm run develop
```

Navigate to `http://localhost:8000/` to view the site

## Supported Devices/Browsers

| OS           | Device          | Browser          |
| :----------- | :-------------- | :--------------- |
| Windows 10   | Desktop         | Chrome (latest)  |
| Windows 10   | Desktop         | Firefox (latest) |
| Windows 10   | Desktop         | Edge (latest)    |
| OSX Big Sur  | Desktop         | Safari (latest)  |
| iOS (latest) | iPhone 7        | Safari           |
| iOS (latest) | iPhone X        | Safari           |
| iOS (latest) | iPhone 11       | Safari           |
| iOS (latest) | iPad Air 2 9.7" | Safari           |
| iOS (latest) | iPad Pro 10.5"  | Safari           |
| iOS (latest) | iPad Pro 12.9"  | Safari           |
| Android 8    | Galaxy S7       | Chrome (latest)  |
| Android 8    | Galaxy S9       | Chrome (latest)  |
