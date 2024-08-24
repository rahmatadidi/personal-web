import { CodeIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import AboutMePage from "./AboutMePage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import ProjectPage from "./ProjectPage";
import SkillPage from "./SkillPage";

export default function ProfilePage() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const message = "My Journey!!";
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsSidebarOpen(false);
  };

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
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium hover:underline"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection(skillRef)}
              className="text-sm font-medium hover:underline"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(projectRef)}
              className="text-sm font-medium hover:underline"
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium hover:underline"
            >
              Contact Me
            </button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-muted hover:bg-muted/90"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <aside className="fixed right-0 top-0 h-full bg-muted z-40 no-hover transition-transform duration-300 ease-in-out w-1/3 p-4">
                <XIcon className="h-6 w-6 bg-muted text-muted-foreground" />
                <nav className="flex text-muted-foreground flex-col items-center gap-4">
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-sm font-medium hover:underline"
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => scrollToSection(skillRef)}
                    className="text-sm font-medium hover:underline"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection(projectRef)}
                    className="text-sm font-medium hover:underline"
                  >
                    My Projects
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="text-sm font-medium hover:underline"
                  >
                    Contact Me
                  </button>
                </nav>
              </aside>
            ) : (
              <MenuIcon className="h-6 w-6 bg-muted text-muted-foreground" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section
          ref={aboutRef}
          id="about"
        >
          <AboutMePage />
        </section>
        <section
          ref={skillRef}
          id="skill"
        >
          <SkillPage />
        </section>
        <section
          ref={projectRef}
          id="project"
        >
          <ProjectPage />
        </section>
        <section
          ref={contactRef}
          id="contact"
        >
          <ContactPage />
        </section>
      </main>
      <footer className="bg-muted py-8 md:py-12">
        <Footer />
      </footer>
    </div>
  );
}
