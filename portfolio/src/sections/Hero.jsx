export function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3 sm:mt-36">
        <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am David <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full-stack Developer</p>
      </div>
      {/* npm i three @react-three/fiber @react-three/drei react-responsive leva */}
      <div className="w-full h-full absolute inset-0"></div>
    </section>
  )
}
