import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import {
  FeatureEnabled,
  FeatureDisabled,
  FeatureContext,
  featureMap,
  loadFeatures
} from './main';

describe('<FeatureEnabled />', () => {
  afterEach(cleanup);

  it('should render its children if the feature is turned on', () => {
    featureMap.set('feature_flag_1', true);
    const { getByText } = render(
      <FeatureContext.Provider value={featureMap}>
        <FeatureEnabled feature="feature_flag_1">
          <h1>Feature On</h1>
        </FeatureEnabled>
      </FeatureContext.Provider>
    );
    getByText('Feature On');
  });

  it('should not render its children if the feature is turned off', () => {
    featureMap.set('feature_flag_1', false);
    const { getByText } = render(
      <FeatureContext.Provider value={featureMap}>
        <FeatureEnabled feature="feature_flag_1">
          <h1>Feature On</h1>
        </FeatureEnabled>
      </FeatureContext.Provider>
    );
    expect(() => getByText('Feature On')).toThrowError(
      'Unable to find an element with the text: Feature On.'
    );
  });
});

describe('<FeatureDisabled />', () => {
  afterEach(cleanup);

  it('should render its children if the feature is turned off', () => {
    featureMap.set('feature_flag_1', false);
    const { getByText } = render(
      <FeatureContext.Provider value={featureMap}>
        <FeatureDisabled feature="feature_flag_1">
          <h1>Feature Off</h1>
        </FeatureDisabled>
      </FeatureContext.Provider>
    );
    getByText('Feature Off');
  });

  it('should not render its children if the feature is turned on', () => {
    featureMap.set('feature_flag_1', true);
    const { getByText } = render(
      <FeatureContext.Provider value={featureMap}>
        <FeatureDisabled feature="feature_flag_1">
          <h1>Feature Off</h1>
        </FeatureDisabled>
      </FeatureContext.Provider>
    );
    expect(() => getByText('Feature Off')).toThrowError(
      'Unable to find an element with the text: Feature Off.'
    );
  });
});

describe('loadFeatures', () => {
  afterEach(() => {
    featureMap.forEach((_, key) => featureMap.delete(key));
  });

  it('should add all the passed feature flags into the featureMap', () => {
    const features = [
      { name: 'feature_flag_1', enabled: true },
      { name: 'feature_flag_2', enabled: false },
      { name: 'feature_flag_3', enabled: true }
    ];
    loadFeatures(features);
    features.forEach(({ name, enabled }) => {
      expect(featureMap.get(name)).toBe(enabled);
    });
  });
});
