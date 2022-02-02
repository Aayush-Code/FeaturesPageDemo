import CreateIcon from './images/CreateIcon.svg';
import CreateSubFeature1 from './images/CreateSubFeature1.svg';
import CreateSubFeature2 from './images/CreateSubFeature2.svg';
import CreateSubFeature3 from './images/CreateSubFeature3.svg';
import CreateSubFeature4 from './images/CreateSubFeature4.svg';
import GrowIcon from './images/GrowIcon.svg';
import GrowSubFeature1 from './images/GrowSubFeature1.svg';
import GrowSubFeature2 from './images/GrowSubFeature2.svg';

export const featuresPageData = [
{
    featureIcon: CreateIcon,
    featureTitle: "Create with Deepsync",
    featureDesc:"Deepsync creates your AI voice and lets you\ncreate short form audio with just a script\nsaving 90% time and production costs",
    subFeatures: [
        {
            featureTitle: "Automatic Production",
            featureDesc: "Your AI voice records short-form content for you.\nBy entering a script and editing in real-time,\nit works 10x faster than manual recording.",
            featureImg: CreateSubFeature1,
            imgPosition: "bottom"
        },
        {
            featureTitle: "Powerful Editing",
            featureDesc: "The editor uses AI to automagically reduce friction.\nMix and match audios, sounds and music\nto build the best audio experience.",
            featureImg: CreateSubFeature2,
            imgPosition: "bottom"
        },
        {
            featureTitle: "Intuitive Learning",
            featureDesc: "Deepsync supports Heteronyms, Abbreviations,\nCurrencies, websites and tons of other modes.\nIn meantime, it keeps getting better.",
            featureImg: CreateSubFeature3,
            imgPosition: "bottom"
        },
        {
            featureTitle: "High Quality Downloads",
            featureDesc: "Download your finished audio in HD .wav\nfile with professional ID3 Tags ready for\nsharing on all major platforms and channels.",
            featureImg: CreateSubFeature4,
            imgPosition: "bottom"
        }
    ]
},
{
    featureIcon: GrowIcon,
    featureTitle: "Grow with Deepsync",
    featureDesc:"Deepsync lets you share your voice across]\nchannels in high quality and helps you\ngrow your audio strategy",
    subFeatures: [
        {
            featureTitle: "Export your audio & share with\nover 10+ channel integrations",
            featureDesc: "Download your audio as beautiful Audioclips and share it\nwith tons of channels with millions of listeners\nin one-click so you're always on top of the (audio) world.",
            featureImg: GrowSubFeature1,
            imgPosition: "right"
        },
        {
            featureTitle: "Analyze and grow your listener base with\nAnalytics & Expert Guides",
            featureDesc: "With our In-depth Analytics, you always see the front-view of\nhow your audio is performing.\nWe craft a ton of guides and lessons for the audio community\nto help you craft great content and grow your listeners.",
            featureImg: GrowSubFeature2,
            imgPosition: "right"
        }
    ]
}
];

export const featuresBannerData = {
    headerBanner: {
        title: "Create short-audio & Grow",
        description: "Unlike long podcasts that are created bi-monthly, Short-form audio\ncan be shared regularly such as an audio blog post or a daily\ncooking recipe which we help create without manual effort.",
        buttonText: "Get Started"
    },
    footerBanner: {
        title: "Create quality audio in\nany voice in minutes",
        description: "Create, Engage and Grow your listener\nbase with the power of AI.",
        buttonText: "Get Demo"
    }
}