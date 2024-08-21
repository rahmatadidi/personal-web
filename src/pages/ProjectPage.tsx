import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  return (
    <>
      <section
        id="projects"
        className="py-12 md:py-24"
      >
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Here are some of the projects I've worked on:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full bg-muted">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 1"
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4 text-muted-foreground">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="mt-2 text-muted-foreground">Lorem ipsum</p>
                <div className="mt-4 flex justify-end">
                  <Link
                    to="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Project
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4 text-muted-foreground">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="mt-2 text-muted-foreground">
                  A personal blog built with Next.js and Markdown.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link
                    to="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Project
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 3"
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4 text-muted-foreground">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="mt-2 ">
                  A task management app built with React, Firebase, and Tailwind
                  CSS.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link
                    to="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Project
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
