import {
  CodeIcon,
  CodepenIcon,
  HashIcon,
  MenuIcon,
  NetworkIcon,
  WindIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link } from "react-router-dom";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-muted-foreground">
      <header className="sticky top-0 z-50 bg-muted">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <div className="text-2xl font-bold">
              <div className="inline-block">
                <span>Welcome to My Personal Website</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              to="#"
              className="text-sm font-medium hover:underline"
            >
              About Me
            </Link>
            <Link
              to="#"
              className="text-sm font-medium hover:underline"
            >
              Skills
            </Link>
            <Link
              to="#"
              className="text-sm font-medium hover:underline"
            >
              My Projects
            </Link>
            <Link
              to="#"
              className="text-sm font-medium hover:underline"
            >
              Contact Me
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="about"
          className="py-12 md:py-24 bg-[url('/placeholder-background.jpg')] bg-cover bg-center"
        >
          <div className="container grid gap-6 px-4 md:px-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Hi, I'm John Doe, a passionate web developer with a strong
                background in front-end technologies. I love creating beautiful
                and functional websites that provide the best user experience.
                In my free time, I enjoy exploring new technologies and working
                on personal projects.
              </p>
            </div>
            <div className="flex justify-center">
              <Avatar className="w-50 h-50">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="py-12 md:py-24 bg-secondary"
        >
          <div className="container grid gap-6 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Here are some of the technologies I'm proficient in:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <HashIcon className="h-12 w-12" />
                <span>HTML</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <CodepenIcon className="h-12 w-12" />
                <span>CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <CodepenIcon className="h-12 w-12" />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <CodepenIcon className="h-12 w-12" />
                <span>React</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <WindIcon className="h-12 w-12" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <NetworkIcon className="h-12 w-12" />
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </section>
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
                    A task management app built with React, Firebase, and
                    Tailwind CSS.
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
        <section
          id="contact"
          className="py-12 md:py-24 bg-secondary"
        >
          <div className="container grid gap-6 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Me
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Feel free to reach out to me for any inquiries or
                collaborations.
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <form className="grid gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="justify-self-end"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-secondary py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          &copy; 2024 John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
