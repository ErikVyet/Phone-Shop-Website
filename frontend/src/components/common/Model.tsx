import { useGLTF } from "@react-three/drei";

type ModelProps = {
    modelId?: number,
    modelName?: string,
    modelUrl: string,
    modelScale?: number
}

function Model({ modelScale = 0.03, modelUrl }: ModelProps) {
    const model = useGLTF(modelUrl);
    return (
        <primitive object={model.scene} scale={modelScale}/>
    )
}

export default Model;
export type { ModelProps };