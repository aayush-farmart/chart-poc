# React Chart Libraries POC

This repository contains the code for a small POC conducted to determine which charts library should be used in the revamped Vizdum.
The following libraries were considered:

1. D3.js
2. react-charts
3. react-chartjs2
4. recharts

This repository contains the code for a few sample graphs that were made to gauge the functionalities and effectiveness of each library.

## D3.js

D3.js is a powerful JavaScript library renowned for creating interactive and dynamic data visualizations.

#### Pros

1. Highly flexible and customizable: No library matches the low-level control over graphs provided by D3. In fact, most other chart libraries are based on D3.
2. Extensive documentation.
3. Great community support as D3 has been around for a long time and is widely used.

#### Cons

1. Steep learning curve: Learning D3 alone is challenging enough, but integrating it with React introduces a whole new genre of headaches. For someone new to D3, the learning curve will be extremely steep.
2. Complexity: Combining D3.js and React can lead to complex code, especially for intricate data visualizations. Managing the state and lifecycle of D3.js components within the React ecosystem can become convoluted as the complexity of the visualization increases.
3. Performance: While integrating D3 with React, performance may take a hit if not implemented carefully. D3 relies on direct DOM manipulation, which conflicts with React's virtual DOM reconciliation strategy. Careful optimization measures are required to provide a smooth user experience for complicated visuals.
4. Resources: Finding resources for D3's integration with React may be challenging.

## react-charts

### NOTE: This library's code in this repo does not work due to an open issue with Vite that has not been resolved yet.

React Charts is a D3 powered library that focuses only on X/Y charts.

#### Pros

1. Great performance as it is based on D3 but built for react.
2. Flatter learning curve.

#### Cons

1. Documentation could be better.
2. Not much community support, npm downloads are also few.
3. Breaking issue with Vite.
4. No support for circular graphs (Pie charts etc)

## react-chartjs2

This is a React wrapper for the chartjs library.

#### Pros

1. Good documentation + community support.
2. Decent learning curve.
3. Popular library, 600K+ weekly downloads on npm.

#### Cons

1. Bundle size(5MB+)

## Recharts

#### Pros

1. Good documentation + community support.
2. Easy learning curve.
3. 1M+ weekly downloads on npm, lots of questions on SO.

#### Cons

1. Bundle size(~5MB)
