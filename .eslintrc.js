module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', '@react-native-community'],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    "react-native/react-native": true
  }
};
