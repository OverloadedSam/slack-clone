# Slack Clone

Slack clone is a chat application that mimics the UI of the official Slack app. This project is built primarily using `React`, `Firebase`, `styled-components` and `@mui/icons-material`. Users can log in to the app using a google account. Users can create channels and send messages to chat with other logged-in users in real time.

## Requirements

- `node >= 18.12.1`
- `npm >= 8.19.2`

## Usage
  1. Clone the repository.

    $ git clone https://github.com/OverloadedSam/slack-clone.git

  2. Move to the directory.

    $ cd slack-clone

  3. Install project dependencies.

    $ npm install

## Setting Up Environment Variables
You have to set the environment variables of your configuration before starting the server.

Place a `.env` file in the project's root folder, i.e. `slack-clone/.env`, and set the following environment variable according to your firebase app configuration.

    REACT_APP_API_KEY={firebase_project_api_key}
    REACT_APP_AUTH_DOMAIN={firebase_project_auth_domain}
    REACT_APP_PROJECT_ID=s{firebase_app_project_id}
    REACT_APP_STORAGE_BUCKET={firebase_app_bucket_id}
    REACT_APP_MESSAGING_SENDER_ID={firebase_app_messaging_sender}
    REACT_APP_APP_ID={firebase_app_id}

## Running The Project

    $ cd slack-clone/
    $ npm start
