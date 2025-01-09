import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface StarsMotionProps {
    count: number;
    speed: number;
    radius: number
}

export default function StarsMotion({ count, speed, radius }: StarsMotionProps) {
    return (
        <div className="absolute inset-0 z-0">
        <Canvas>
            <Stars radius={radius} count={count} factor={4} fade speed={speed} />
        </Canvas>
    </div>
    )
}