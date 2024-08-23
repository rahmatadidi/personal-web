import { GitlabIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
