import Lottie from "lottie-react";

import animationData from "../../assets/json/empty.json";

export default function NoResultsAnimation() {
    return (
        <>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: '20rem', marginTop: '2rem' }}
            />
        </>
    );
}