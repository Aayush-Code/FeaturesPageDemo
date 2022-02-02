import '../styles/styles.scss';

const Feature = (props: any) => {
    const { feature } = props;

    return (
    <div className={"feature-body"}>
        <div className={feature.imgPosition === "bottom" ? "feature-bottom" : "feature-align-right"}>
            <div>
                <h5>{feature.featureTitle}</h5>
                <p>{feature.featureDesc}</p>
            </div>
            <div>
                <img src={feature.featureImg} alt={feature.featureTitle} />
            </div>
        </div>
    </div>
  );
}

export default Feature;
