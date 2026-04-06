import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AdditiveBlending, Color, type Points } from "three";

function SpiralGalaxyScene() {
    const { scrollYProgress } = useScroll();
    const [scrollYOffset, setScrollYOffset] = useState(scrollYProgress.get());

    const pointsRef = useRef<Points>(null!);

    const count = 5000;
    const branches = 4; // số nhánh xoắn
    const radius = 8;

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorInside = new Color("#ffffff"); // lõi
        const colorOutside = new Color("#3366ff"); // ngoài

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // radius ngẫu nhiên
            const r = Math.random() * radius;

            // góc xoắn
            const branchAngle = (i % branches) / branches * Math.PI * 2;
            const spin = r * 1.8; // độ xoắn

            const angle = branchAngle + spin;

            // random spread
            const randomX = (Math.random() - 0.5) * 0.5;
            const randomY = (Math.random() - 0.5) * 0.5;
            const randomZ = (Math.random() - 0.5) * 0.5;

            positions[i3 + 0] = Math.cos(angle) * r + randomX;
            positions[i3 + 1] = randomY * 0.5;
            positions[i3 + 2] = Math.sin(angle) * r + randomZ;

            // color gradient
            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, r / radius);

            colors[i3 + 0] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }

        return { positions, colors };
    }, []);

    useFrame(() => {
        pointsRef.current.rotation.y += 0.0005;
        setScrollYOffset(scrollYProgress.get());
    });

    useEffect(() => {
        pointsRef.current.scale.set(1 + scrollYOffset * 0.5, 1 + scrollYOffset * 0.5, 1 + scrollYOffset * 0.5);
    }, [scrollYOffset]);

    return (
        <>
            <Stars />
            <color attach="background" args={[Color.NAMES.black]} />
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
                    <bufferAttribute attach="attributes-color" count={count} args={[colors, 3]} />
                </bufferGeometry>
                <pointsMaterial size={0.05} vertexColors sizeAttenuation depthWrite={false} blending={AdditiveBlending} />
            </points>
            
        </>
    );
}

export default SpiralGalaxyScene;