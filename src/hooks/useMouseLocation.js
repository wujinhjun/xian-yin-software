import { useState, useEffect } from "react";

const useMouseLocation = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });


    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseMove = event => {
        setCoords({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });
    };
    return coords;
}
export default useMouseLocation;