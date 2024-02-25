
import HeroContent from "./HeroContent";
import { WavyBackground } from "./ui/wavy-background";

export default function WavyBackgroundDemo() {

    return (
        <WavyBackground className="w-full mx-auto">
            <HeroContent />
        </WavyBackground>
    );
}
