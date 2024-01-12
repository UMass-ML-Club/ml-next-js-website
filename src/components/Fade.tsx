// use client component for rendering fade-up components
// using AOS library
'use client';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface FadeProps {
    children: React.ReactNode;
    direction: string; // direction of fade
    className?: string; // optional styling
}

function Fade({children, direction, className}: FadeProps) {
    useEffect(() => {
        AOS.init({
            once: true,
            mirror: false,
        })
    }, []);
    return (
        <div 
            data-aos={`fade-${direction}`}
            data-aos-duration="500"
            className={className ? className : ''} /** optional arg checking */
        >
            {children}
        </div>
    )
}

export default Fade;