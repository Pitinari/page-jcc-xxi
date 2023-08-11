import { useEffect, useState } from 'react';
import { LandingProps } from './types';
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
        <div className={'landing__tape'} style={{ height: boxHeight }}>
            {Array(10).fill("").map((_, idx) => (
                <div className='landing__box' style={{ height: boxInnerHeight, width: boxInnerWidth, transform: `translate(${(boxWidth * idx) - boxWidth/2}px,-50%)`  }} key={idx}/>
            ))}
        </div>
        <div className='landing__pointer' style={{ transform: `translate(${(boxWidth-20)}px,-${boxHeight/2 + 24}px)` }}></div>
    </div>)
}