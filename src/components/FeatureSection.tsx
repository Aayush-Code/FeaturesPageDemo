import FeatureGrid from './FeatureGrid';

const FeatureSection = (props: any) => {
    const { feature } = props;

    return (
        <div className="feature-section">
            <img src={feature.featureIcon} alt={feature.featureTitle}/>
            <h2>{feature.featureTitle}</h2>
            <p>{feature.featureDesc}</p>
            <FeatureGrid subFeatureData={feature.subFeatures}/>
        </div>
    );
}

export default FeatureSection;
