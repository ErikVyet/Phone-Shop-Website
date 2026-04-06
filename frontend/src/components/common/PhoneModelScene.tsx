import { OrbitControls, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Color, DirectionalLight, DirectionalLightHelper, Mesh, Vector3 } from "three";
import PhoneModel, { type PhoneModelProps } from "./PhoneModel";

type PhoneSceneProps = {
    model?: PhoneModelProps | undefined,
    light?: number,
    gridOn?: boolean,
    cameraOn?: boolean,
    axesOn?: boolean
    orbitControls?: boolean,
    isRotateX?: boolean,
    isRotateY?: boolean,
    isRotateZ?: boolean
};

function PhoneModelScene({ model = { modelId: 2, modelName: 'iPhone 12 Pro', modelUrl: '/src/assets/models/iphone_12_pro.glb', modelScale: 0.03 }, light = 1, gridOn = true, cameraOn = true, axesOn = true, orbitControls = false, isRotateX = false, isRotateY = true, isRotateZ = false }: PhoneSceneProps) {
    const objectMesh = useRef<Mesh>(null);
    const [rotateValue, setRotateValue] = useState(0.005);
    const handleModelRotation = (_event: PointerEvent) => setRotateValue(0.005);
    const handleCancelModelRotation = (_event: PointerEvent) => setRotateValue(0);

    const dirLight = useRef<DirectionalLight>(null!);
    useHelper(dirLight, DirectionalLightHelper, 1, Color.NAMES.white);

    const { camera } = useThree();
    camera.position.set(0, 1.4, 3);
    useFrame(() => {
        const v3 = new Vector3();
        camera.getWorldPosition(v3);
        dirLight.current.position.x = v3.x;
        dirLight.current.position.y = v3.y;
        dirLight.current.position.z = v3.z;

        if (isRotateX) objectMesh.current?.rotateX(rotateValue);
        if (isRotateY) objectMesh.current?.rotateY(rotateValue);
        if (isRotateZ) objectMesh.current?.rotateZ(rotateValue);
    });

    return (
        <>
            <ambientLight intensity={light} />
            <directionalLight ref={dirLight} position={[0, 2, 2]} />
            {axesOn && (<axesHelper args={[10]} />)}
            {gridOn && (<gridHelper args={[10, 10]} />)}
            {cameraOn && (<cameraHelper args={[camera]} />)}
            {orbitControls && (<OrbitControls />)}
            <mesh ref={objectMesh} onPointerDown={handleCancelModelRotation} onPointerUp={handleModelRotation}>
                <PhoneModel modelScale={model.modelScale} modelUrl={model.modelUrl} />
            </mesh>
        </>
    )
}

export default PhoneModelScene;