import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export default function ContactPage() {
  return (
    <>
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
              Feel free to reach out to me for any inquiries or collaborations.
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
    </>
  );
}
