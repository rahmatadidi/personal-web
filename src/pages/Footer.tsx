import { GitlabIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const whatsappNumber = "6281383594653";
  return (
    <>
      <div className="container max-w-7xl grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 ">
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
              className="hover:text-primary"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahmat-adi-santoso/"
              className="hover:text-primary"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/rahmatadidi"
              className="hover:text-primary"
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
              className="hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to=""
              className=" hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              to=""
              className="hover:text-primary"
            >
              Cookie Policy
            </Link>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 flex justify-center items-center"
          >
            <img
              src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724432617/WhatsApp_icon_ha5e7j.webp"
              alt="WhatsApp"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </>
  );
}
