module.exports = {
  preset: 'react-native',
  setupFiles: [
    "./jest.setup.js"
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux|reactotron-react-native|reactotron-core-client|reactotron-redux|styled-components)',  ]
};
