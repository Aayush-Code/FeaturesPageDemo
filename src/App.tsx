import React from 'react';
import './styles/styles.scss';
import DeepSyncFeaturesPage from './components/DeepSyncFeaturesPage';
import { featuresPageData, featuresBannerData } from './featuresPageData';

function App() {
  return (
    <div className="App">
      <DeepSyncFeaturesPage featuresPageData={featuresPageData} featuresBannerData={featuresBannerData}/>
    </div>
  );
}

export default App;
