# react-feature-toggle

[![Build Status](https://travis-ci.org/benjaminparnell/react-feature-toggle.svg?branch=master)](https://travis-ci.org/benjaminparnell/react-feature-toggle) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

## Install

```sh
npm install @benparnell/react-feature-toggle
```

## Usage

```jsx
import {
  FeatureEnabled,
  FeatureDisabled,
  FeatureContext,
  featureMap
} from '@benparnell/react-feature-toggle';

featureMap.set('feature_flag_one', true);

const App = () => (
  <FeatureContext.Provider value={featureMap}>
    <FeatureEnabled feature="feature_flag_one">
      <h1>Feature On</h1>
    </FeatureEnabled>
    <FeatureDisabled feature="feature_flag_one">
      <h1>Feature Off</h1>
    </FeatureDisabled>
  </FeatureContext.Provider>
);
```
