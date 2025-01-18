import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { HackerRoom } from "../components/HackerRoom"
import { Suspense } from "react"
import { CanvasLoader } from "../components/CanvasLoader"
import { Leva, useControls } from "leva"

export function Hero() {
  //   const x = useControls("HackerRoom", {
  //     rotationX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //   })
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3 sm:mt-36">
        <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am David <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full-stack Developer</p>
      </div>
      {/* npm i three @react-three/fiber @react-three/drei react-responsive leva */}
      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={0.06}
              position={[0, 0, 0]}
              rotation={[0, 280, 0]}
            />
            {/* <Leva /> */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
