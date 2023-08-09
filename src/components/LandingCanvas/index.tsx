import { useEffect, useRef } from 'react';
import { LandingProps } from './types';
import { useDraw } from './useDraw';

export const Landing = ({ className }: LandingProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { drawTape } = useDraw();

    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            canvasRef.current.width = window.innerWidth
            canvasRef.current.height = window.innerHeight

            window.addEventListener('resize', () => {
                if (canvasRef.current) {
                    canvasRef.current.width = window.innerWidth
                    canvasRef.current.height = window.innerHeight
                    const context = canvasRef.current.getContext('2d');
                    if (context) {
                        drawTape(context, canvasRef.current.width, canvasRef.current.height)
                    }
                }
            })

            if (context) {
                drawTape(context, canvasRef.current.width, canvasRef.current.height)
            }
        }
    }, [])

    return (<div className={className + ' relative top-0 left-0'}>
        <canvas className={className + ' absolute top-0 left-0'} ref={canvasRef} />
    </div>)
}