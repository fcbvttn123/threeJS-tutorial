import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { NavBar } from "./sections/NavBar"
import { Projects } from "./sections/Projects"

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App
