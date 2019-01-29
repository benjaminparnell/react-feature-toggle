"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var featureMap = new Map();
exports.featureMap = featureMap;
var FeatureContext = React.createContext(featureMap);
exports.FeatureContext = FeatureContext;
var FeatureEnabled = function (_a) {
    var feature = _a.feature, children = _a.children;
    return (React.createElement(FeatureContext.Consumer, null, function (featureMap) { return featureMap.get(feature) === true && children; }));
};
exports.FeatureEnabled = FeatureEnabled;
var FeatureDisabled = function (_a) {
    var feature = _a.feature, children = _a.children;
    return (React.createElement(FeatureContext.Consumer, null, function (featureMap) { return !featureMap.get(feature) && children; }));
};
exports.FeatureDisabled = FeatureDisabled;
function loadFeatures(features) {
    features.forEach(function (_a) {
        var name = _a.name, enabled = _a.enabled;
        return featureMap.set(name, enabled);
    });
}
exports.loadFeatures = loadFeatures;
