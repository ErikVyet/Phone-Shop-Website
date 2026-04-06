import { useGLTF } from "@react-three/drei";

type PhoneModelProps = {
    modelId?: number,
    modelName?: string,
    modelUrl: string,
    modelScale?: number
}

function Model({ modelScale = 0.03, modelUrl }: PhoneModelProps) {
    const model = useGLTF(modelUrl);
    return (
        <primitive object={model.scene} scale={modelScale}/>
    )
}

export default Model;
export type { PhoneModelProps };