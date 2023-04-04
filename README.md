# PhishingReporter

Microsoft Outlook Add-in to report phishing or scam emails.

Developed using the [Yeoman generator for Office Add-ins](https://github.com/OfficeDev/generator-office).

## Screenshot

![Screenshot](/screenshots/2023-03-14_22-53-20.jpg)

## Requirements

* [Node.js](https://nodejs.org/)
* Outlook 2016 or later on Windows

## Getting started

Clone this project
```sh
git clone https://github.com/ntaylor-86/PhishingReporter.git
```

Install the dependencies
```sh
npm install
```

Create your .env file
```sh
cp .env.example .env
```

Enter your environment variables into the .env file
```
# This variable will appear in the new message subject
COMPANY_NAME=""

# This variable will appear in the To address for the new message
SUPPORT_EMAIL_ADDRESS=""
```

## Try it out

Run the following command in the root of the project.

```sh
npm start
```

In Outlook, view a message and see the newly sideloaded add-in appear in your ribbon.

## Building for production

Open your `webpack.config.js` file and add update your version.

```js
const version = "1.2.0.0"; // CHANGE THIS TO YOUR PRODUCTION DEPLOYMENT VERSION
```

Also change your production URL to suit.

```js
const urlProd = "https://contoso.com.au/v" + version + "/"; // CHANGE THIS TO YOUR PRODUCTION DEPLOYMENT LOCATION
const urlProdShort = "https://contoso.com.au/v" + version; // CHANGE THIS TO YOUR PRODUCTION DEPLOYMENT LOCATION
```

After your `webpack.config.js` has been updated run the following command:

```sh
npm run build
```

A new `dist` folder will be created in the root of the project. Upload these files to your production web server.