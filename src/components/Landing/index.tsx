import { useEffect, useRef, useState } from 'react';
import { BoxProps, LandingProps } from './types';
import classNames from 'classnames';
import "./styles.scss"

function replaceCharacter(idx: number, newChar: string) {
    document.getElementById(`char__${idx}`)!.replaceChildren(newChar);
}

export const Landing: React.FC<LandingProps> = ({ className }) => {

    const intervals = useRef(Array(9).fill(0));
    const [started, setStarted] = useState(false);

    const [pointerPos, setPointerPos] = useState(-1); // matches idx of the box the pointer is pointing at

    useEffect(() => {
        // We do this so that the linter doesn't complain
        // about using "current" in the destructor, which may change
        const currentIntervals = intervals.current;

        if (!started) {
            currentIntervals.forEach((_, idx) => {
                currentIntervals[idx] = setInterval(() => {
                    replaceCharacter(idx, String.fromCharCode(Math.random() * 93 + 33));
                }, 100 + Math.random() * 50);
            });
            setStarted(true);
        }
        return () => currentIntervals.forEach(clearInterval);
    }, []);

    useEffect(() => {
        if (pointerPos === -1) {
            const pointerTimeout = setTimeout(() => {
                setPointerPos(0);
            }, 500);

            return () => {
                clearTimeout(pointerTimeout);
            }
        }
    }, []);

    return (
        <div className={classNames(className, "landing", "relative h-full w-full")}>
            <div className={"landing__tape"}>
                {Array(9).fill("").map((char, idx) => (
                    <Box idx={idx} char={char} key={idx} />
                ))}
            </div>
                {pointerPos < 10 &&
                <>
                    <Pointer onTransitionEnd={() => {
                        if(pointerPos < 9){
                            for(let i = 0; i <= pointerPos; i++){
                                if(intervals.current[i] !== 0) {
                                    clearInterval(intervals.current[i])
                                    intervals.current[i] = 0;
                                    replaceCharacter(i, "_JCC_XXI_"[i]);
                                }
                            }
                            setPointerPos(prev => Math.min(9, prev + 1))
                        } else setPointerPos(10)
                    }} points={pointerPos} />
                    <Square points={pointerPos}/>
                </>
                }
        </div>
    );
}

function Box({ idx, char }: BoxProps) {
    return (
        <div className="landing__box" style={{ "--idx": idx } as React.CSSProperties} key={idx}>
            <h1 className="landing__box__character" id={`char__${idx}`}>
                {char}
            </h1>
        </div>
    );
}

function Pointer({ points, onTransitionEnd }: { points: number, onTransitionEnd?: () => void; }) {
    return (
        <div onTransitionEnd={onTransitionEnd} className="landing__pointer" style={{ "--position": points } as React.CSSProperties}></div>
    );
}

function Square({ points }: { points: number }) {
    return (
        <div className="landing__square" style={{ "--position": points } as React.CSSProperties}></div>
    );
}