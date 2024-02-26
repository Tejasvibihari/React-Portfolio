
import WavyBackgroundDemo from './components/HeroBackground'
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo'
import { LampDemo } from './components/LampDemo'
// import ProjectSection from './components/ProjectSection'
import WorkSection from './components/WorkSection'
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo'
import SocialSection from './components/SocialSection'
// import InfiniteMovingCardsDemo from './components/InfiniteMovingCardsDemo';


export default function App() {
  return (
    <div className="">
      <WavyBackgroundDemo />
      <LampDemo />
      {/* <ProjectSection /> */}
      <StickyScrollRevealDemo />

      <WorkSection />
      <InfiniteMovingCardsDemo />
      <SocialSection />

    </div>
  )
}