import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return <>
    <main>

      <section className=" pt-32 ">
        <div className="max-w-md mb-8">

          <h1 className="text-6xl font-bold">Your one link  <br />for everything</h1>
          <h2 className="text-slate-400 text-xl mt-8">Share your links,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, sint!</h2>
        </div>
        {/* //take up only as much width as needed to fit its content and will not start on a new line. */}
        <form action="" className="inline-flex items-center shadow-lg shadow-gray-700/20">
          <span className="bg-white py-4 pl-4">linklist.to/</span>

          <input type="text" className="py-4" placeholder="username" />
          <button className="bg-blue-500 text-white py-4 px-6" type="submit">Join for free</button>
        </form>
      </section>
    </main>
  </>
}
