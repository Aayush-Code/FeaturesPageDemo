import Feature from './Feature';

const FeatureGrid = (props: any) => {
  const { subFeatureData } = props;

  return (
    <div className="feature-grid">
      {subFeatureData.map((subFeature: any)=>(
        <Feature feature={subFeature}/>
      ))}
    </div>
  );
}

export default FeatureGrid;
