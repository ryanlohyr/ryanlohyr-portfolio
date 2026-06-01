export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-6 py-10 md:py-12">
      <div className="max-w-2xl w-full space-y-4 text-base md:text-[15px] leading-snug">
        <h1 className="text-3xl md:text-[2.125rem] font-bold tracking-tight pb-1">
          Hi! I&apos;m Ryan.
        </h1>

        <p>
          I&apos;m building{" "}
          <a
            href="https://learnkata.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LearnKata
          </a>
          . Every kid deserves a tutor, and AI is finally good enough to be
          one.
        </p>

        <p>
          I always wanted to be an{" "}
          <span className="font-bold">investment banker</span> — I thought it
          was the fastest way to earn money and then start a business. Then
          COVID hit, I got bored, learned to code, and fell in love with
          building things. Dropped the{" "}
          <span className="font-bold">business offer</span> at{" "}
          <span className="font-bold">NUS</span> for{" "}
          <span className="font-bold">computer engineering</span>. Felt scary
          at the time, but turned out to be one of the best decisions I&apos;ve
          made.
        </p>

        <p>
          Since then, I&apos;ve shipped a lot of things that went nowhere: an{" "}
          <span className="font-bold">AI wedding planner</span>, a{" "}
          <span className="font-bold">dating app</span>, even a{" "}
          <span className="font-bold">game</span>. They earned me{" "}
          <span className="font-bold">$0</span>, but they taught me everything
          I needed to build LearnKata.
        </p>

        <p>The ones that worked:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            A{" "}
            <a
              href="https://bullbearvector.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              stock ranking app
            </a>
            , built from scratch in 2022, used by{" "}
            <span className="font-bold">10,000+ traders</span>.
          </li>
          <li>
            <a
              href="https://hockeystack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              HockeyStack
            </a>{" "}
            (YC S23), where I shipped the self-serve flow that drove{" "}
            <span className="font-bold">$2M ARR</span> and core logic for their
            AI agent <span className="font-bold">Odin</span>.
          </li>
          <li>
            <a
              href="https://learnkata.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LearnKata
            </a>
            , grew from <span className="font-bold">300 → 40K users</span> in{" "}
            <span className="font-bold">40 days</span>, with{" "}
            <span className="font-bold">10M+ views</span> from a single iPhone
            at <span className="font-bold">$0 marketing spend</span>.
          </li>
        </ul>

        <p>
          What I keep coming back to is building things that make life better
          for other humans. In college, I built a{" "}
          <span className="font-bold">volunteer management system</span> for{" "}
          <span className="font-bold">MINDS MYG</span>, a charity for the
          intellectually disabled. Still the most meaningful thing I&apos;ve
          built, and LearnKata is the same. I truly feel like I found my{" "}
          <a
            href="https://en.wikipedia.org/wiki/Ikigai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            ikigai
          </a>
          .
        </p>

        <p>
          I grew up in <span className="font-bold">Singapore</span>, did an
          exchange at <span className="font-bold">Stanford</span>, and spent a
          year in <span className="font-bold">SF</span> for{" "}
          <span className="font-bold">NUS Overseas Colleges</span>. That year
          really broadened my horizons and showed me that successful
          businesses aren&apos;t just built by intelligent people, but by ones
          with tons of grit and resilience. Outside of building, I like
          diving, backpacking, and cooking.
        </p>

        <p>
          You can also find me as <span className="font-bold">ryanlohyr</span>{" "}
          on{" "}
          <a
            href="https://x.com/ryanlohyr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            X
          </a>
          ,{" "}
          <a
            href="https://github.com/ryanlohyr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Github
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/ryanlohyr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>

        <p className="text-accent hover:underline">
            ryan[at]learnkata.ai
        </p>
      </div>
    </div>
  );
}
