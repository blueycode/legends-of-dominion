import Image from "next/image";
import JoinForm from "./components/JoinForm";

export default function Home() {
  return (
    <main className="flex flex-col text-slate-900 bg-slate-200">
      <section className="flex h-fit bg-castle-bg bg-no-repeat bg-cover px-24 py-8">
        <JoinForm />
      </section>
    </main>
  )
}
