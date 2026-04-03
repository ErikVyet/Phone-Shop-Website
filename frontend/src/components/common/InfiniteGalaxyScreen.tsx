import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function InfiniteGalaxyScene() {
    const meshRef = useRef<THREE.InstancedMesh>(null!);
    const count = 1000;

    const positions = useMemo(() => {
        return Array.from({ length: count }, () => ({
            x: (Math.random() - 0.5) * 20,
            y: (Math.random() - 0.5) * 20,
            z: Math.random() * -50 // phía xa
        }));
    }, []);

    useFrame(() => {
        const dummy = new THREE.Object3D();

        positions.forEach((p, i) => {
            p.z += 0.01; // bay về phía camera
            
            // reset khi đi qua camera
            if (p.z > 5) {
                p.z = -50;
                p.x = (Math.random() - 0.5) * 20;
                p.y = (Math.random() - 0.5) * 20;
            }

            dummy.position.set(p.x, p.y, p.z);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.05, 6, 6]} />
            <meshBasicMaterial color="white" />
        </instancedMesh>
    );
}

export default InfiniteGalaxyScene;