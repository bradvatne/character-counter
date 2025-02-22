import LetterDensity from "./components/LetterDensity";
import Navbar from "./components/Navbar";
import StatContainer from "./components/StatContainer";
import Stats from "./components/Stats";
import TextInput from "./components/TextInput";

export default function Home() {
  return (
    <div className="p-4 lg:max-w-[990px] mx-auto">
      <Navbar />
      <h1 className="text-center text-preset-1-mobile py-[40px]">
        Analyze your text in real-time.
      </h1>
      <TextInput />
      <Stats />
      <LetterDensity />
      <div className="h-screen"></div>
    </div>
  );
}
