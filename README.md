# app-feedback-plugin-issue

This repository contains NativeScript application. The application is a pure JS one and it demonstrates an issue with rebuilding projects after a new plugin is added.

## Steps to reproduce the issue

1. Clone this repository: `git clone https://github.com/rosen-vladimirov/app-feedback-plugin-issue.git`
2. Get to the project dir: `cd app-feedback-plugin-issue`
3. Build the project: `tns build android`
4. Now add `nativescript-feedback` plugin: `npm i --save nativescript-feedback`
5. Open `app/main-view-model.js` and uncomment the commented sections. This way once you tap on the button, you will see a notification.
6. Run `tns run android`
7. Tap the button - **no notification is shown**.
8. Stop `tns run android` command with Ctrl + C
9. Delete `platforms` directory: `rm -rf platforms`
10. Run `tns run android` again.
11. Once application is running, tap the button on device - you should see the notification now.
