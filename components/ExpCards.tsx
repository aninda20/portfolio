"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Mar 2024 — May 2024",
    currentPosition: "Software Engineer Intern",
    place: "Flow",
    previousPositions: [""],
    description:
      "Led the Artificial Intelligence department, managing a high-performing team of five AI specialists utilizing Django and executed intake meetings with 12 clients resulting in 40% increase in department efficiency. Developed AI-enabled functions such as web scraper and Hubspot cross referencing for the MVP, enabling B2B sales professionals to perform up to 300 calls per day, thus increasing productivity by 50%",
    skills: [
      "Django",
      "AWS",
      "CSS",
      "Web Scraping",
      "Github",
      "Python",
      "Statistical Data Analysis",
      "UI/UX Design",
      "Figma",
      "Customer Relationship Management (CRM)",
      "Hubspot",
      "Jira",
      "Kubernetes",
      "Docker",
      "altassian",
      "Selenium Testing",
      "Agile Methodologies",
      "API Development",
      "Project Management",
      "Planning",
      "Leadership",
      "Testing & QA",
    ],
  },
  {
    timeline: "Jan 2020 — June 2022",
    currentPosition: "Software Engineer",
    place: "Imple Creations",
    previousPositions: [""],
    description:
      "Designed, developed, and maintained 7 websites and applications, leveraging technologies including React, Flask, Django etc; this led to a 60% enhancement in user experience and product functionality.",
    skills: [
      "React.js",
      "AngularJS",
      "Flask",
      "WordPress",
      "Django",
      "Amazon Web Services (AWS)",
      "Azure",
    ],
  },
  
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/am-resume-2024.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
