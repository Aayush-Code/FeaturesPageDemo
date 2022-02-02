import React, { useState } from 'react';
import '../styles/styles.scss';
import FeatureSection from './FeatureSection';
import Logo from '../images/Logo.svg';
import Banner from './Banner';
import Modal from './Modal';

const DeepSyncFeaturesPage = (props: any) => {
    const { featuresPageData, featuresBannerData } = props;
    const { footerBanner, headerBanner } = featuresBannerData;

    const [open, setOpen] = useState(false);

    const handleClose = () => {
		setOpen(false);
	};

    return (
        <React.Fragment>
            <div className="DeepSyncFeaturesPage">
            <div className="nav-bar">
                <div className="nav-bar-logo-container">
                    <a>
                        <img src={Logo} alt="DeepSync Logo"/>
                    </a>
                </div>
            </div>
            <Banner 
                title={headerBanner.title}
                description={headerBanner.description} 
                buttonText={headerBanner.buttonText}
                bannerType={"headerBanner"}
                buttonClick={setOpen}
            />
            <div className="main">
                {featuresPageData.map((feature: any, index: any)=>(
                    <section className="feature-container" key={index}>
                        <FeatureSection feature={feature}/>
                    </section>
                ))}
            </div>
            <Banner 
                title={footerBanner.title}
                description={footerBanner.description} 
                buttonText={footerBanner.buttonText}
                bannerType={"footerBanner"}
                buttonClick={setOpen}
            />
            <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-logo-container">
                            <img src={Logo} alt="DeepSync Logo"/>
                        </div>
                    </div>
            </footer>
            </div>
            <Modal open={open} handleClose={handleClose}/>
        </React.Fragment>
    );
}


export default DeepSyncFeaturesPage;
