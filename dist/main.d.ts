import * as React from 'react';
declare const featureMap: Map<string, boolean>;
declare const FeatureContext: React.Context<Map<string, boolean>>;
declare type FeatureProps = {
    feature: string;
    children: React.ReactNode;
};
declare const FeatureEnabled: ({ feature, children }: FeatureProps) => JSX.Element;
declare const FeatureDisabled: ({ feature, children }: FeatureProps) => JSX.Element;
declare function loadFeatures(features: {
    name: string;
    enabled: boolean;
}[]): void;
export { FeatureEnabled, FeatureDisabled, FeatureContext, loadFeatures, featureMap };
