import LetterDensity from "./components/LetterDensity";
import Navbar from "./components/Navbar";
import StatContainer from "./components/StatContainer";
import TextInput from "./components/TextInput";

export default function Home() {
  return (
    <div className="p-4">
      <Navbar />
      <h1 className="text-center text-preset-1-mobile py-[40px]">
        Analyze your text in real-time.
      </h1>
      <TextInput />
      <div className="mt-[40px] flex flex-col gap-[16px]">
        <StatContainer
          count={278}
          label="Total Characters"
          color="bg-purple-400"
          image="/assets/images/pattern-character-count.svg"
        />
        <StatContainer
          count={39}
          label="Word Count"
          color="bg-yellow-500"
          image="/assets/images/pattern-word-count.svg"
        />
        <StatContainer
          count={4}
          label="Sentence Count"
          color="bg-orange-500"
          image="/assets/images/pattern-sentence-count.svg"
        />
      </div>
      <LetterDensity />
      <div className="h-screen"></div>
    </div>
  );
}
