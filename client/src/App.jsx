import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo'
import { LampDemo } from './components/LampDemo'
import WorkSection from './components/WorkSection'
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo'
import SocialSection from './components/SocialSection'
import { BackgroundBeamsDemo } from './components/BackgroundBeamsDemo';
import EmailSubscription from './components/EmailSubscription';


export default function App() {
  return (
    <div className="">
      <BackgroundBeamsDemo />
      <LampDemo />
      <StickyScrollRevealDemo />
      <WorkSection />
      <InfiniteMovingCardsDemo />
      <EmailSubscription />
      <SocialSection />
    </div>
  )
}