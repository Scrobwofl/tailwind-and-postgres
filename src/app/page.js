import Image from "next/image";
import Counter from "./components/utils/count";

export default function Home() {
  let bubbles = "Badadanbadadadanbadadandem";
  return (
    <>
      <Counter />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>{bubbles}</p>
        <p>{bubbles.split("").reverse()}</p>
      </main>
    </>
  );
}
