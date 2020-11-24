1. **Set up the React Native Development Environment** using [this](https://reactnative.dev/docs/environment-setup) link. Please note that the application does not use Expo CLI, so use the React Native CLI Quickstart templates. Using this guide you will have installed:

- Node, Python and JDK
- Android Studio
- Xcode
- Android SDK 9 (Pie) (**NOTE**: at the time of this writing React Native specifically requires this SDK as the base)
- React Native Command Line Interface

2.  **Set up Visual Studio Code**. Although you can use any preferred editor to develop the application (including the above installed Android Studio) we highly recommend using [Visual Studio Code](https://code.visualstudio.com/download). Once you've installed the editor, add the following extensions to it in order to highlight and format your code properly:

- Prettier
- Material Icon Theme

### Running the application

# Running

1. Install yarn tool on your machine.
2. Run `yarn install`. This will install all the dependent packages and will take a few minutes to complete. Please note that you only need to do this once, the first time you run the application.
3. Run `yarn android` . This will start Metro Bundler, install the apk and will run `adb reverse tcp:8081 tcp:8081` for you

# Running IOS

1. Install cocoapods on your machine.
2. Run `yarn install` and `cd ios & pod install`.This will install all the dependent packages and will take a few minutes to complete. Please note that you only need to do this once, the first time you run the application.
3. Run `yarn ios` .
