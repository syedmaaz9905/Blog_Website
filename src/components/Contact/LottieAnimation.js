"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
    return (
        <DotLottiePlayer
            src="/animation_lnxa6unp.lottie"
            autoplay
            loop
        >
        </DotLottiePlayer>
    );
};

export default LottieAnimation;