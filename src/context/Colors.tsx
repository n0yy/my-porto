"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { animate, useMotionValue, MotionValue } from "framer-motion";

const COLORS = ["#01EFAC", "#01CBAE", "#2082A6", "#524096", "#5F2A84", "#FF1684"]

const ColorsContext = createContext<MotionValue<string> | null>(null);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const color = useMotionValue(COLORS[0]);

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color])

    return (
        <ColorsContext.Provider value={color}>{children}</ColorsContext.Provider>
    )
}

export const useColor = () => {
    const context = useContext(ColorsContext);
    if (context === null) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
}