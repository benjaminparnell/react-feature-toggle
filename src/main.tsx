import * as React from 'react';

const featureMap = new Map<string, boolean>();

const FeatureContext = React.createContext(featureMap);

type FeatureProps = {
  feature: string;
  children: React.ReactNode;
};

const FeatureEnabled = ({ feature, children }: FeatureProps) => (
  <FeatureContext.Consumer>
    {featureMap => featureMap.get(feature) === true && children}
  </FeatureContext.Consumer>
);

const FeatureDisabled = ({ feature, children }: FeatureProps) => (
  <FeatureContext.Consumer>
    {featureMap => !featureMap.get(feature) && children}
  </FeatureContext.Consumer>
);

function loadFeatures(features: { name: string; enabled: boolean }[]) {
  features.forEach(({ name, enabled }) => featureMap.set(name, enabled));
}

export {
  FeatureEnabled,
  FeatureDisabled,
  FeatureContext,
  loadFeatures,
  featureMap
};
