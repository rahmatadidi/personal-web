import { CodeIcon, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";
import SkillPage from "./SkillPage";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const message = "Welcome to My Personal Website";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        setText((prev) => message.substring(0, prev.length + 1));
        if (text === message) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText((prev) => message.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(0);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, isDeleting]);
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-muted-foreground">
      <header className="sticky top-0 z-50 bg-muted">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <div className="text-2xl font-bold">
              <div className="inline-block">
                <span>{text}</span>
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
                Hi, I'm Rahmat Adi Santoso, a passionate web developer with a
                strong background in fullstack technologies. I love creating
                beautiful and functional websites that provide the best user
                experience. In my free time, I enjoy exploring new technologies
                and working on personal projects.
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
        <SkillPage />
        <ProjectPage />
        <ContactPage />
      </main>
      <footer className="bg-secondary py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          &copy; 2024 Rahmat Adi Santoso. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
