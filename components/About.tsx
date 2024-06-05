"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
        As a dedicated Software Engineer, my journey has been marked by a deep dive into both the front-end and back-end realms of development. 
        Starting with a curiosity about software's power to solve real-world problems, 
        I've honed my skills in creating user-friendly interfaces using React and developing scalable back-end systems with Python and Node.js.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">

          I take pride in writing clean, maintainable code and adhering to agile practices, 
          which have led to significant achievements such as improving operational efficiency, 
          thus boosting user satisfaction. 
          My belief in continuous integration/continuous deployment (CI/CD) and test-driven development (TDD) underlines my approach to software development, 
          ensuring speedy releases and high-quality output. 
          I'm continually on the lookout for new technologies and methodologies to keep pace with the evolving software engineering landscape.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of work, I enjoy traveling and working out, 
          bringing fresh perspectives and creativity into my professional life.
        </p>
      </div>
    </section>
  );
}
