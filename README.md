# Github Feed

This is the front-end code for the [Github Feed Project](https://ghfeed.jordanholt.dev)

This website allows users to monitor issue comments of 4 popular repositories.

## Functionality

* Monitor issue comments of popular Github repositories.
    * Issues updated daily.
* Issues comments are rendered in markdown.
* Lazy loading and infinite scrolling.
* Static hosted in an AWS S3 Bucket


## Screenshots

![screenshot of website 1](https://github.com/jordanholtdev/github-social-feed/blob/main/screenshots/ghfeed_screenshot_1.png)
![screenshot of website 2](https://github.com/jordanholtdev/github-social-feed/blob/main/screenshots/ghfeed_screenshot_2.png)

## Technology

- React
- AWS CLI
- AWS s3
- Semantic UI
- marked
- axios

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

With the necessary permissions configured, this will deploy the bundled app to the target s3 bucket.


