import { Avatar, AvatarImage } from "../components/ui/avatar";

export default function AboutMePage() {
  return (
    <>
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
              graduate of vocational high school currently pursuing a bachelor's
              degree. I am passionate about the IT field, which I believe is
              advancing rapidly. Because of this, I decided to join a bootcamp
              for approximately 3 to 4 months. During the bootcamp I am
              proficient in several programming languages, such as JavaScript
              and TypeScript, and have experience with various JavaScript
              frameworks and libraries.
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
    </>
  );
}
