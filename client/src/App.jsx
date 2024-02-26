
import WavyBackgroundDemo from './components/HeroBackground'
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo'
import ProjectSection from './components/ProjectSection'
import WorkSection from './components/WorkSection'
// import InfiniteMovingCardsDemo from './components/InfiniteMovingCardsDemo';


export default function App() {
  return (
    <div className="">
      <WavyBackgroundDemo />
      <ProjectSection />
      <InfiniteMovingCardsDemo />
      <WorkSection />
    </div>
  )
}