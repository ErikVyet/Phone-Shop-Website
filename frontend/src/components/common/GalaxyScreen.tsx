import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Points } from "three";

function GalaxyScreen() {

    const pointsRef = useRef<Points>(null!);
    const count = 200;
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3 + 0] = (Math.random() - 0.5) * 10; // x
            arr[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return arr;
    }, []);

    useFrame((state) => {
        pointsRef.current.rotation.y += 0.0002;
        const time = state.clock.elapsedTime;
        const positions = pointsRef.current.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            positions.array[i * 3 + 1] += Math.sin(time + i) * 0.001;
        }
        positions.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial color="white" size={0.05} />
        </points>
    );
}

export default GalaxyScreen;