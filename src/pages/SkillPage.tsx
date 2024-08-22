export default function SkillPage() {
  return (
    <>
      <section
        id="skills"
        className="py-12 md:py-24 bg-secondary"
      >
        <div className="container grid gap-6 px-4 md:px-6 md:grid-cols-6 lg:grid-cols-2">
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
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329456/logo-html_ko9rkj.webp"
                alt="logo-html"
                className="h-24 w-28"
              />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329427/logo-css_nw9xnt.webp"
                alt="logo-css"
                className="h-24 w-28"
              />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329462/logo-js_vk3fcv.webp"
                alt="js-logo"
                className="h-24 w-28"
              />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329506/logo-react_aaubwd.webp"
                alt="logo-react"
                className="h-24 w-28"
              />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329469/logo-nest_nzibhk.png"
                alt="logo-nest"
                className="h-24 w-28"
              />
              <span>Nest.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329477/logo-node_txrg7q.png"
                alt="logo-node"
                className="h-24 w-28"
              />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329437/logo-express_nhvei3.png"
                alt="logo-express"
                className="h-24 w-28"
              />
              <span>Express.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329516/logo-ts_llgm6c.webp"
                alt="logo-ts"
                className="h-24 w-28"
              />
              <span>TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329526/logo-vue_axegbo.png"
                alt="logo-vue"
                className="h-24 w-28"
              />
              <span>Vue.js</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
