import { useEffect, useRef, useState } from 'react';
import { LandingProps } from './types';
import classNames from 'classnames';
import "./styles.scss"

export const Landing: React.FC<LandingProps> = ({ className }) => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    const intervals = useRef(Array(9).fill(0));
    // const [tape, setTape] = useState(
    //     Array(9).fill("").map(_ => String.fromCharCode(Math.random() * 93 + 33)) 
    // );
    // console.log(tape);
    

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        intervals.current.forEach((_, idx) => {
            intervals.current[idx] = setInterval(() => {
                const character = document.getElementById(`char__${idx}`);
                if(character){
                    character.replaceChildren(String.fromCharCode(Math.random() * 93 + 33));
                }          
                
            }, 300 + Math.random() * 50)
        })

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            intervals.current.forEach(int => clearInterval(int))
        };
    }, []);

    const boxWidth = windowSize[0] / 8;
    const boxHeight = boxWidth;
    const boxInnerWidth = boxWidth * 18 / 20;
    const boxInnerHeight = boxHeight * 18 / 20;

    return (<div className={classNames(className, 'landing', 'relative h-full w-full')}>
        <div className={'landing__tape'} style={{ height: boxHeight }}>
            {Array(9).fill("").map((char, idx) => (
                <div className='landing__box' style={{ height: boxInnerHeight, width: boxInnerWidth, transform: `translate(${(boxWidth * idx) - boxWidth/2}px,-50%)`  }} key={idx}>
                    <h1 className='landing__box__character' style={{ fontSize: boxInnerHeight -20 }} id={`char__${idx}`}>{char}</h1>
                </div>
            ))}
        </div>
        <div className='landing__pointer' style={{ transform: `translate(${boxWidth -25}px,-${boxHeight/2 + 24}px)` }}></div>
    </div>)
}