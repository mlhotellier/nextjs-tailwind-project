import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex m-auto">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            alt="mathis lhotellier avatar"
            width={180}
            height={180}
            priority
          />
        </div>
        <code className="text-xl">@mlhotellier | <span className="font-bold">Fullstack developer</span></code>
        <div className="flex flex-col sm:flex-row text-white">
          <span className="m-1 font-bold px-3 py-1 rounded-lg bg-cyan-400">ReactJS</span>
          <span className="m-1 font-bold px-3 py-1 rounded-lg bg-purple-400">Tailwind CSS</span>
          <span className="m-1 font-bold px-3 py-1 rounded-lg bg-red-300">NodeJS</span>
          <span className="m-1 font-bold px-3 py-1 rounded-lg bg-green-300">MongoDB</span>
        </div>
        <div className="flex m-auto">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.linkedin.com/in/mathis-l-hôtellier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="Globe icon"
              width={16}
              height={16}
              className="mr-2"
            />
            Contact me on Linkedin
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mlhotellier?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="github icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.mathislhotellier.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to my website →
        </a>
      </footer>
    </div>
  );
}
