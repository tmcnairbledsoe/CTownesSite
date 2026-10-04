# Charlotte Townes Art

## Azure hosting and automatic deployment

The GitHub Actions workflow in `.github/workflows/azure-static-web-apps.yml`
tests and builds pull requests targeting `main`. Pushes to `main`, including
merged pull requests, also deploy the production build to Azure Static Web Apps.
A failed test or build prevents deployment. Local commits and `git pull` do not
trigger deployment; the commit must be pushed to GitHub.

The workflow uses Node 24 (see `.nvmrc`), `npm ci`, the committed lockfile, and
Create React App's `build` directory. Azure receives the already-built files.
Pull requests validate the app without using the production deployment token.
Manual runs deploy only when run from `main`.

The build step sets `CI=false` because the existing portfolio template has
accessibility lint warnings (such as image alt text and placeholder links).
Warnings remain visible in the build log; compilation errors and test failures
still stop deployment. The tests retain GitHub Actions' normal CI behavior.

### One-time connection

1. Create an Azure Static Web App using the **Free** hosting plan and **Other**
   deployment source (the workflow is already provided in this repository).
2. In that resource, copy the deployment token and save it under GitHub
   **Settings > Secrets and variables > Actions** as
   `AZURE_STATIC_WEB_APPS_API_TOKEN`. Never commit the token.
3. Push this configuration to `main`.
4. In GitHub **Actions**, verify that the Azure Static Web Apps run succeeds,
   then open the URL shown in the Azure resource's Overview page.

This configuration alone does not provision an Azure resource or set the secret.
After setup, use pull requests for changes and merge them into the production
branch. To roll back, revert the unwanted commit and push the revert; it will
deploy through the same workflow. `npm run deploy` is the older GitHub Pages
command and is not used by Azure.

### Local validation

With Node 24 installed:

```sh
npm ci
npm test -- --watchAll=false --runInBand
npm run build
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
