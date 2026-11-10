export default function Home() {
  return (
    <main className="flex flex-1 items-end px-6 py-12 sm:px-12 sm:py-16">
      <div className="max-w-4xl">
        <h1 className="font-display text-balance text-6xl leading-[0.92] font-bold tracking-tighter sm:text-8xl lg:text-9xl">
          Shipped from a push.
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
          This page is a smoke test. If you can read it, the path from code to
          live site works.
        </p>
        <button
          type="button"
          className="mt-10 cursor-pointer rounded-full bg-accent px-7 py-3.5 text-base font-medium text-white transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Check the pipeline
        </button>
      </div>
    </main>
  );
}
