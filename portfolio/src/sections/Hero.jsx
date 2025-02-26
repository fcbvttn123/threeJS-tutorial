import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { HackerRoom } from "../components/HackerRoom"
import { Suspense } from "react"
import { CanvasLoader } from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { HeroCamera } from "../components/HeroCamera"
import { Target } from "../components/Target"
import { calculateSizes } from "../constants/index"
import { ReactLogo } from "../components/ReactLogo"
import { Cube } from "../components/Cube"
import { Rings } from "../components/Rings"
import { Button } from "../components/Button"

export function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 758, maxWidth: 1024 })
  const sizes = calculateSizes(isSmall, isMobile, isTablet)
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
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.2, -3.2, 0.0]}
              />
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  )
}
