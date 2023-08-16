import { useEffect, useRef, useState } from 'react';
import { BoxProps, LandingProps } from './types';
import classNames from 'classnames';
import "./styles.scss"
import { useWindowDimensions } from './useWindowDimensions';

function replaceCharacter(idx: number, newChar: string) {
    document.getElementById(`char__${idx}`)!.replaceChildren(newChar);
}

export const Landing: React.FC<LandingProps> = ({ className }) => {

    const [windowWidth] = useWindowDimensions();

    const intervals = useRef(Array(9).fill(0));

    const [pointerPos, setPointerPos] = useState(-1); // matches idx of the box the pointer is pointing at

    useEffect(() => {
        // We do this so that the linter doesn't complain
        // about using "current" in the destructor, which may change
        const currentIntervals = intervals.current;

        currentIntervals.forEach((_, idx) => {
            currentIntervals[idx] = setInterval(() => {

                replaceCharacter(idx, String.fromCharCode(Math.random() * 93 + 33));

            }, 100 + Math.random() * 50);
        });

        return () => currentIntervals.forEach(clearInterval);
    }, []);

    useEffect(() => {
        // move pointer from -1 to 9 synchronously with the boxes

        const pointerTimeout = setTimeout(() => {
            setPointerPos(prev => Math.min(9, prev + 1));
        }, 500);

        return () => {
            clearTimeout(pointerTimeout);
        }
    }, []);

    const boxWidth = windowWidth / 8;
    const boxHeight = boxWidth;
    const boxInnerWidth = boxWidth * 18 / 20;
    const boxInnerHeight = boxHeight * 18 / 20;

    return (
        <div className={classNames(className, "landing", "relative h-full w-full")}>
            <div className={"landing__tape"} style={{ height: boxHeight }}>
            {Array(9).fill("").map((char, idx) => (
                <Box idx={idx} char={char} width={boxWidth} innerWidth={boxInnerWidth} innerHeight={boxInnerHeight} key={idx} />
            ))}
            </div>
            <Pointer onTransitionEnd={() => {
                clearInterval(intervals.current[pointerPos]);
                replaceCharacter(pointerPos, "_JCC_XXI_"[pointerPos]);
                setTimeout(() => {             
                    setPointerPos(prev => Math.min(9, prev + 1))
                }, 100 * Math.random());
            }} points={pointerPos} width={boxWidth} height={boxHeight} />
            <Square points={pointerPos} width={boxWidth} height={boxHeight} innerWidth={boxInnerWidth} innerHeight={boxInnerHeight} />
        </div>
    );
}

function Box({ idx, char, width, innerWidth, innerHeight }: BoxProps) {
    return (
        <div className="landing__box" style={{ height: innerHeight, width: innerWidth, transform: `translate(${width * idx - width / 2}px, -50%)` }} key={idx}>
            <h1 className="landing__box__character" style={{ fontSize: innerHeight - 20 }} id={`char__${idx}`}>
                {char}
            </h1>
        </div>
    );
}

function Pointer({ points, width, height, onTransitionEnd }: { points: number, width: number; height: number, onTransitionEnd?: () => void; }) {
    const borderWidth = "2vw";

    const borderTop = `${borderWidth} solid white`;
    const borderLeft = `${borderWidth} solid transparent`;
    const borderRight = `${borderWidth} solid transparent`;

    const top = "50%";

    const translateX = points * width - width / 4 + 5;
    const translateY = 3 * height / 4;

    return (
        <div onTransitionEnd={onTransitionEnd} className="landing__pointer" style={{ transform: `translate(${translateX}px, -${translateY}px)`, borderTop, borderLeft, borderRight, top }}></div>
    );
}

function Square({ points, width, height, innerWidth, innerHeight }: { points: number, width: number; height: number, innerWidth: number, innerHeight: number }) {
    const borderWidth = Math.min(innerWidth, innerHeight) * 0.05;

    const top = `calc(50% + ${borderWidth}px)`;

    const w = innerWidth * 0.9;
    const h = innerHeight * 0.9;

    const translateX = points * width - width / 2 + borderWidth;
    const translateY = height / 2 - borderWidth;

    return (
        <div className="landing__square" style={{ transform: `translate(${translateX}px,-${translateY}px)`, width: w, height: h, borderWidth, top }}></div>
    );
}