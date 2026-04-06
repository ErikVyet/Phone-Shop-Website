import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MathUtils, type Group, type Vector3 } from "three";

function Model() {
    const { nodes } = useGLTF("/src/assets/models/iphone_12_pro.glb");

    const group = useRef<Group>(null!);
    const initialPositions = useRef<Vector3[]>([]);
    const scroll = useScroll();

    useEffect(() => {
        group.current.children.forEach((child, i) => {
            initialPositions.current[i] = child.position.clone();
        });
    }, []);

    const getGroupIndex = (name: string) => {
        if (name.includes("Camera")) return 0;
        if (name.includes("Screen")) return 1;
        if (name.includes("Logo")) return 2;
        if (name.includes("Button") || name.includes("Volume") || name.includes("Power")) return 3;
        return 4;
    };

    useFrame(() => {
        const t = scroll.offset;
        const spacing = 3;

        group.current.children.forEach((child, i) => {
            const base = initialPositions.current[i];
            if (!base) return;
            const index = getGroupIndex(child.name);
            const targetX = (index - 2) * spacing;

            const newX = MathUtils.lerp(base.x, targetX, t);
            const newY = MathUtils.lerp(base.y, 0, t);
            const newZ = MathUtils.lerp(base.z, 0, t);

            child.position.set(newX, newY, newZ);
        });
    });

    const { camera } = useThree();
    camera.position.set(0, 0, 5);

    return (
        <group ref={group}>
            <ambientLight intensity={2}/>
            <OrbitControls enableZoom={false}/>
            {Object.entries(nodes).map(([key, node]: any, i) =>
                node.isMesh ? (
                    <mesh key={i} name={key} geometry={node.geometry} material={node.material} position={node.position} scale={3}>
                        
                    </mesh>
                ) : null
            )}
        </group>
    );
}

export default function Scene() {
    return (
        <ScrollControls pages={2} style={{ scrollbarWidth: "none" }}>
            <Model />
        </ScrollControls>
    );
}