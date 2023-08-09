import { useEffect, useRef, useState } from 'react';
import { LandingProps } from './types';
import { useDraw } from './useDraw';
import classNames from 'classnames';
import "./styles.scss"

export const Landing: React.FC<LandingProps> = ({ className }) => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const boxWidth = windowSize[0] / 8;
    const boxHeight = boxWidth;
    const boxInnerWidth = boxWidth * 18 / 20;
    const boxInnerHeight = boxHeight * 18 / 20;

    return (<div className={classNames(className, 'landing', 'relative h-full w-full')}>
        <div className={classNames(`h-[${Math.floor(windowSize[1] / 2 - boxHeight / 2)}px]`,'landing__tape')} />
    </div>)
}