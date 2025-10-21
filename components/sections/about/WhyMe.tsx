const WhyMe = () => {
  return (
    <section className="flex justify-center items-center px-6 py-20">
      <div className="mx-auto container w-full text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-12">
          Why work with me?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center items-start">
          <div className="max-w-2xl mx-auto">
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Tech-focused expertise
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              I’ve worked closely with B2B tech startups, helping them simplify
              complex ideas and turn visitors into customers.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Easy to work with
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              I manage projects independently and keep communication clear —
              you stay updated, without micromanaging.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Fast & reliable delivery
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              No middlemen or delays — you work directly with me for faster,
              high-quality results.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Long-term partnership mindset
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              I focus on building lasting collaborations by understanding your goals
              deeply and evolving the solutions as your business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
