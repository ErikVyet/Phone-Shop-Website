import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { Points } from 'three';

function PushingParticlesScene({ count = 5000 }) {
    const mesh = useRef<Points>(null!);
    const { mouse, viewport } = useThree();
    
    // Store previous mouse position to detect movement
    const prevMouse = useRef({ x: 0, y: 0 });

    const [particles, originalPositions] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const originals = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10
            const y = (Math.random() - 0.5) * 10
            const z = (Math.random() - 0.5) * 5

            positions.set([x, y, z], i * 3)
            originals.set([x, y, z], i * 3)
        }
        return [positions, originals]
    }, [count])

    useFrame(() => {
        const { array } = mesh.current.geometry.attributes.position

        // 1. Calculate world mouse position
        const xMouse = (mouse.x * viewport.width) / 2
        const yMouse = (mouse.y * viewport.height) / 2

        // 2. Check if the mouse has moved since the last frame
        const hasMoved = Math.abs(mouse.x - prevMouse.current.x) > 0.0001 || 
                         Math.abs(mouse.y - prevMouse.current.y) > 0.0001;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            let x = array[i3]
            let y = array[i3 + 1]

            const dx = x - xMouse
            const dy = y - yMouse
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Only apply repulsion if mouse is moving AND close enough
            if (hasMoved && distance < 1.5) {
                const force = 1 / (distance * distance + 0.5)
                const angle = Math.atan2(dy, dx)
                
                array[i3] += Math.cos(angle) * force * 0.2
                array[i3 + 1] += Math.sin(angle) * force * 0.2
            } else {
                // Return to original positions
                array[i3] += (originalPositions[i3] - array[i3]) * 0.05
                array[i3 + 1] += (originalPositions[i3 + 1] - array[i3 + 1]) * 0.05
                array[i3 + 2] += (originalPositions[i3 + 2] - array[i3 + 2]) * 0.05
            }
        }

        // Update previous mouse position for the next frame
        prevMouse.current = { x: mouse.x, y: mouse.y };
        
        mesh.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <>
            <ambientLight intensity={2} />
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={particles.length / 3}  args={[particles, 3]}/>
                </bufferGeometry>
                <pointsMaterial size={0.05} color="#00d2ff" transparent opacity={0.8} />
            </points>
        </>
    )
}

export default PushingParticlesScene;