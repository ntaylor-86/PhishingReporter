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