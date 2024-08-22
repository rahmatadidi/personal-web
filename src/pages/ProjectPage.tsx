import { CalendarDaysIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function ProjectPage() {
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
                  <Card className="h-full w-full bg-secondary group-hover:scale-105 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle className="text-muted-foreground">
                            Circle App
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src="../src/assets/circleApp-logo.png"
                          alt="circelApp logo"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground">
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
                  <Card className="h-full w-full bg-secondary group-hover:scale-105 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle className="text-muted-foreground">
                            Lakoe E-commerce
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src="../src/assets/akoelakoe-logo.png"
                          alt="akoelakoe logo"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground">
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
                  <Card className="h-full w-full bg-secondary group-hover:scale-105 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle className="text-muted-foreground">
                            Clash Of Song
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src="../src/assets/COS-logo.png"
                          alt="Clash Of Song App"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground">
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
                  <Card className="h-full w-full bg-secondary group-hover:scale-105 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="grid gap-1">
                          <CardTitle className="text-muted-foreground">
                            DumbSound
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <img
                          src="../src/assets/DS-logo.png"
                          alt="DumbSound"
                          width={600}
                          height={400}
                          className="rounded-md object-cover w-full aspect-[3/2]"
                        />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground">
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
