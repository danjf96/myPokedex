This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
## Installation
    NODE >= 20.16.0
    JDK >= 17.0.12
    React Native  0.74.5

   ### For IOS
    go to the ios folder and run the command
    ```bash
        pod install or npx pod-install
    ```
    OBS: if you use node without nvm change the ios/.xcode.env file from "export NODE_BINARY=$HOME/.nvm/versions/node/v20.16.0/bin/node" to "export NODE_BINARY=$(command -v node)"

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Debbuging with Reactotron

Reactotron is a debug developer tool, where you can scan requests, states and reducers from your device.

**Installing Reactotron.app**
Let’s [download the desktop app](https://github.com/infinitered/reactotron/tree/master) to start.  You can download for Linux, Windows, and Mac.

**Note**: If using an Android device or emulator run the following command to make sure it can connect to Reactotron:

adb reverse tcp:9090 tcp:9090

## Usage
## Folder structure

This template follows a very simple project structure(mvvm based):

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, globals styles, etc.
    - imgs
    - icons
    Theme.ts
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
    - `layouts`: application layout components like Button
    - `name your component`
        - index.ts
        - style.ts
        - type.ts
  - `views`: Folder to store application screens
    - index.ts
    - style.ts (optional)
    - type.ts(optional)
    - test.ts(optional)
    - *.json (most used when there is a form)
  - `viewModels`: Folder to models application screens
    - index.ts
    - test.ts(optional)
    - *.json (most used when there is a form)
  - `routes`: Folder to store the navigators.
  - `hooks`: Folder to custom hooks.
  - `constants`: Folder to constants.
  - `store`: This folder should have all your reducers, and expose the combined result using its `index.ts`. application model  
  - `utils`: Folder to store utilities functions.
  - `services`: Folder to store network functions.(api,firebase, ...)
  - `App.ts`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.
  
## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assembleRelease`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store
