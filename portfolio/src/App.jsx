import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { NavBar } from "./sections/NavBar"

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default App
