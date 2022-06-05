import { gsap } from 'gsap';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';



export const useCounter = ({ maxCount = 1 }) => {
    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = (e: any) => {
        e.preventDefault();
        setCounter(prev => Math.min(prev + 1, maxCount));
    }
    useLayoutEffect(() => {
        //console.log("%cllego al valor maximo", "color:red;background:black;");
        //console.log(counterElement.current)
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause()
    }
        , [])

    useEffect(() => {
        tl.current.play(0);
    }, [counter])
    return { elementToAnimate, counter, handleClick }
}