"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const tabs = [
  {
    title: "ALL",
    content: "Content of ALL",
    images: [
      "https://via.placeholder.com/350x350?text=all1",
      "https://via.placeholder.com/350x350?text=all2",
      "https://via.placeholder.com/350x350?text=all3",
    ],
  },
  {
    title: "DESIGN",
    content: "Content of DESIGN",
    images: [
      "https://via.placeholder.com/350x350?text=design1",
      "https://via.placeholder.com/350x350?text=design2",
      "https://via.placeholder.com/350x350?text=design3",
    ],
  },
  {
    title: "DEVELOPMENT",
    content: "Content of DEVELOPMENT",
    images: [
      "https://via.placeholder.com/350x350?text=development1",
      "https://via.placeholder.com/350x350?text=development2",
      "https://via.placeholder.com/350x350?text=development3",
    ],
  },
  {
    title: "UI/UX",
    content: "Content of UI/UX",
    images: [
      "https://via.placeholder.com/350x350?text=ui/ux1",
      "https://via.placeholder.com/350x350?text=ui/ux2",
      "https://via.placeholder.com/350x350?text=ui/ux3",
    ],
  },
  {
    title: "GRAPHICS",
    content: "Content of GRAPHICS",
    images: [
      "https://via.placeholder.com/350x350?text=graphics1",
      "https://via.placeholder.com/350x350?text=graphics2",
      "https://via.placeholder.com/350x350?text=graphics3",
    ],
  },
  {
    title: "MARKETING",
    content: "Content of MARKETING",
    images: [
      "https://via.placeholder.com/350x350?text=marketing1",
      "https://via.placeholder.com/350x350?text=marketing2",
      "https://via.placeholder.com/350x350?text=marketing3",
    ],
  },
  {
    title: "SEO",
    content: "Content of SEO",
    images: [
      "https://via.placeholder.com/350x350?text=seo1",
      "https://via.placeholder.com/350x350?text=seo2",
      "https://via.placeholder.com/350x350?text=seo3",
    ],
  },
];

const RecentProject = () => {

  return (
    <div className="mt-20 container">
      <h1 className="font-bold text-3xl mb-6 text-center ">Recent Projects </h1>
      <div className=" grid md:grid-cols-2  gap-5  ">
        <div className="space-y-4">
          <Card className="from-h-72  from-text=slate-500 to-text-red-700  flex scale sticky border-2 border-slate-500 top-[10rem] ">
            <div className="flex  w-4/6 flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur et officia eaque eius quia ipsam quas, ex, ipsum
                  libero praesentium necessitatibus vitae fuga saepe, ducimus id
                  veniam itaque labore exercitationem?
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="h-72 flex sticky border-2 border-slate-500 top-[12rem] ">
            <div className="flex  w-4/6 flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur et officia eaque eius quia ipsam quas, ex, ipsum
                  libero praesentium necessitatibus vitae fuga saepe, ducimus id
                  veniam itaque labore exercitationem?
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="h-72 flex sticky border-2 border-slate-500 top-[14rem] ">
            <div className="flex  w-4/6 flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur et officia eaque eius quia ipsam quas, ex, ipsum
                  libero praesentium necessitatibus vitae fuga saepe, ducimus id
                  veniam itaque labore exercitationem?
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="h-72 flex sticky border-2 border-slate-500 top-[10rem] ">
            <div className="flex  w-4/6 flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur et officia eaque eius quia ipsam quas, ex, ipsum
                  libero praesentium necessitatibus vitae fuga saepe, ducimus id
                  veniam itaque labore exercitationem?
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="h-72 flex sticky border-2 border-slate-500 top-[12rem] ">
            <div className="flex  w-4/6 flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur et officia eaque eius quia ipsam quas, ex, ipsum
                  libero praesentium necessitatibus vitae fuga saepe, ducimus id
                  veniam itaque labore exercitationem?
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="h-72 flex sticky border-2 border-slate-500 top-[14rem] ">
            <div className="flex  w-4/6 flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur et officia eaque eius quia ipsam quas, ex, ipsum
                  libero praesentium necessitatibus vitae fuga saepe, ducimus id
                  veniam itaque labore exercitationem?
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
   
    
 
  );
};

export default RecentProject;
