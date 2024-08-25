import { CalendarDaysIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import useThemeStore from "../store/themeStore";

export default function ProjectPage() {
  const { theme } = useThemeStore();

  return (
    <>
      <div className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-6">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
              <p className="text-muted-foreground">
                Explore the projects you've been working on.
              </p>
            </div>
            <div className="flex w-full overflow-x-auto gap-8 snap-x p-8  snap-mandatory">
              <div className="flex-none w-[300px] snap-start group">
                <Link
                  to="#"
                  className="block"
                >
                  <Card className="h-full w-full bg-muted text-white group-hover:scale-105 transition-transform group-hover:bg-secondary group-hover:text-txt-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle className="">Circle App</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src={
                            theme === "light"
                              ? "https://res.cloudinary.com/ddfdf66n7/image/upload/v1724542993/Circle_App_white_ytxdbn.png"
                              : "https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329332/circleApp-logo_ppqnow.png"
                          }
                          alt="circelApp logo"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDaysIcon className="h-8 w-8" />
                          <span>Crated At 27 May 2024 - 28 June 2024</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              <div className="flex-none w-[300px] snap-start group">
                <Link
                  to="#"
                  className="block"
                >
                  <Card className="h-full w-full bg-muted text-white group-hover:scale-105 transition-transform group-hover:bg-secondary group-hover:text-txt-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle>Lakoe E-commerce</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src={
                            theme === "light"
                              ? "https://res.cloudinary.com/ddfdf66n7/image/upload/v1724544686/lakoe-light_teww3h.png"
                              : "https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329296/akoelakoe-logo_kutrvs.png"
                          }
                          alt="akoelakoe logo"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDaysIcon className="h-8 w-8" />
                          <span>Created At 8 July 2024 - 26 July 2024</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              <div className="flex-none w-[300px] snap-start group">
                <Link
                  to="#"
                  className="block"
                >
                  <Card className="h-full w-full bg-muted text-white group-hover:scale-105 transition-transform group-hover:bg-secondary group-hover:text-txt-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle>Clash Of Song</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329408/COS-logo_bhirlq.png"
                          alt="Clash Of Song App"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDaysIcon className="h-8 w-8" />
                          <span>Created At 29 July - 9 Aug 2024</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              <div className="flex-none w-[300px] snap-start group">
                <Link
                  to="#"
                  className="block"
                >
                  <Card className="h-full w-full bg-muted text-white group-hover:scale-105 transition-transform group-hover:bg-secondary group-hover:text-txt-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle>DumbSound</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1724329414/DS-logo_ipf4wu.png"
                          alt="DumbSound"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDaysIcon className="h-8 w-8" />
                          <span>Created At 13 Aug - present</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
