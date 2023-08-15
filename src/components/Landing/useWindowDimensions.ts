import { useEffect, useState } from 'react';

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<readonly [number, number]>([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowDimensions([
            window.innerWidth,
            window.innerHeight,
        ]);

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowDimensions;
}
