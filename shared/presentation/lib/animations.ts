import { easeInOut, MotionProps } from 'motion/react';

export const fadeUp = (delay = 0): MotionProps => ({
    initial: { 
        y: 40, 
        opacity: 0 
    },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: {
            duration: 0.5,
            delay,
            ease: easeInOut
        }
    },
    viewport: { once: true }
});

export const fadeDown = (delay = 0): MotionProps => ({
    initial: { 
        y: -40, 
        opacity: 0 
    },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: {
            duration: 0.5,
            delay,
            ease: easeInOut
        }
    },
    viewport: { once: true }
});

export const fadeLeft = (delay = 0): MotionProps => ({
    initial: { 
        x: -40, 
        opacity: 0 
    },
    animate: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 0.5,
            delay,
            ease: easeInOut
        }
    },
    viewport: { once: true }
});

export const fadeRight = (delay = 0): MotionProps => ({
    initial: { 
        x: 40, 
        opacity: 0 
    },
    animate: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 0.5,
            delay,
            ease: easeInOut
        }
    },
    viewport: { once: true }
});