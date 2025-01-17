import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

function RotatingCube() {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01
    }
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#468585" emissive="#468585" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 
        enableZoom is mandatory if you want to use OrbitControls
        enablePan allows user for right-clicks 
      */}
      <OrbitControls enableZoom enablePan={false} enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach={"background"} args={["#F0F0F0"]} />
      <RotatingCube />
    </Canvas>
  )
}

export default App
