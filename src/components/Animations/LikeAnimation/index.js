import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import likeAnimation from "../../assets/json/like.json";

export default function LikeAnimation({ className, fill, onClick }) {
    const lottieRef = useRef();
    const [clicked, setClicked] = useState(false);

    const toggleInteraction = () => setClicked(!clicked);
    const handleClick = async () => {
        if (onClick) await onClick();
        toggleInteraction();
    }

    useEffect(() => {
        const { playSegments, setDirection, setSpeed } = lottieRef.current;
        if (clicked) {
            if (fill) {
                setSpeed(2);
                playSegments([0, 130]);
            }
            else {
                setSpeed(2);
                setDirection(-1);
                playSegments([120, 0]);
            }
            setClicked(!clicked);
        }
        else if (fill) {
            setDirection(1);
            playSegments([129, 130]);
        }
    }, [fill, clicked]);

    return (
        <Lottie
            className={className}
            lottieRef={lottieRef}
            animationData={likeAnimation}
            autoplay={false}
            loop={false}
            onClick={handleClick}
            initialSegment={fill && !clicked ? [129, 130] : [0, 130]}
            style={{
                cursor: 'pointer',
                pointerEvents: clicked ? 'none' : 'auto',
            }}
        />
    );
}