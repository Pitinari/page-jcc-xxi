import { useEffect, useRef } from 'react';
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
    const timeouts = useRef(Array(9).fill(0));

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
        const currentIntervals = intervals.current;
        const currentTimeouts = timeouts.current;

        currentTimeouts.forEach((_, idx) => {
            currentTimeouts[idx] = setTimeout(() => {

                clearInterval(currentIntervals[idx]);

                replaceCharacter(idx, " JCC XII "[idx]);

            }, 500 + 200 * (idx + 1));
        });

        return () => currentTimeouts.forEach(clearTimeout);
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
            <Pointer width={boxWidth} height={boxHeight} />
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

function Pointer({ width, height }: { width: number; height: number }) {
  return (
    <div className="landing__pointer" style={{ transform: `translate(${width - 25}px,-${height / 2 + 50}px)` }}></div>
  );
}