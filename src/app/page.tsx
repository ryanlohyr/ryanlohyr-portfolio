export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center px-6 pt-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl md:text-5xl ">
            Hi, I&apos;m Ryan Loh
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80">
            Final year computer engineering student at the National University of Singapore.
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Currently working on <a href="https://learnkata.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/90">LearnKata.ai</a>
          </p>
        </div>
      </div>
      
      <div className="fixed bottom-8 left-0 right-0 flex justify-center px-6">
        <div className="max-w-2xl w-full flex gap-6 text-foreground/70">
          <a 
            href="https://x.com/ryanlohyr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground/90 transition-colors"
          >
            X
          </a>
          <a 
            href="https://www.linkedin.com/in/ryanlohyr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground/90 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/ryanlohyr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground/90 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
