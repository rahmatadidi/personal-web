import {
  CodeIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";
import SkillPage from "./SkillPage";

export default function ProfilePage() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const message = "Welcome to My Personal Website";

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
              to="/"
              className="text-sm font-medium hover:underline"
            >
              About Me
            </Link>
            <Link
              to="skill"
              className="text-sm font-medium hover:underline"
            >
              Skills
            </Link>
            <Link
              to="project"
              className="text-sm font-medium hover:underline"
            >
              My Projects
            </Link>
            <Link
              to="contact"
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
                Hi, I'm Rahmat Adi Santoso, but you can call me Adi. I am a
                graduate of vocational high school currently pursuing a
                bachelor's degree. I am passionate about the IT field, which I
                believe is advancing rapidly. Because of this, I decided to join
                a bootcamp for approximately 3 to 4 months. During the bootcamp
                I am proficient in several programming languages, such as
                JavaScript and TypeScript, and have experience with various
                JavaScript frameworks and libraries.
              </p>
            </div>
            <div className="flex justify-center">
              <Avatar className="w-50 h-50">
                <AvatarImage
                  src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329534/poto-profile_rvubto.jpg"
                  alt="@shadcn"
                />
              </Avatar>
            </div>
          </div>
        </section>
        <SkillPage />
        <ProjectPage />
        <ContactPage />
      </main>
      <footer className="bg-muted py-8 md:py-12">
        <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <p>
                Rahmat Adi Santoso
                <br />
                East Cakung
                <br />
                East Jakarta, Indonesia 13910
              </p>
              <p>
                <a href="#">rahmat.adi1052@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rahmatadi.di/"
                className="text-muted-foreground hover:text-primary"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahmat-adi-santoso/"
                className="text-muted-foreground hover:text-primary"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/rahmatadidi"
                className="text-muted-foreground hover:text-primary"
              >
                <GitlabIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                About Me
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                Skills
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                My Project
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                to=""
                className="text-muted-foreground hover:text-primary"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
