import { Project } from "@/interfaces/Project";
import Image from "next/image";



export function Projects(){

    const project: Project[] = [
        {
          id: "1",
          title: "My Wallet Local",
          description: "Aplicativo de controle de finanças pessoais, com controle de carteiras, categorias, transações e anotações.",
          techs: ["React Native", "TypeScript","JavaScript", "Expo", "SQLite", "Nativewind", "Tailwindcss", "Zustand", "Reusables", "react-native-gifted-charts"],
          image: "https://i.imgur.com/0cCbLp4.png",
          url: "https://mywalletlocal.store"
        }
      ]
          
      

    return(        
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                {project.map((project) => (
              <a
                className="w-full p-2 transition  duration-300 ease-in-out hover:scale-105"
                key={project.id}
                href={project.url}
                target="_blank"
              >
                <div className="rounded-lg border bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 bg-card text-card-foreground shadow-sm overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-32"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-zinc-500">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techs.map((tech, index) => (
                        <span key={index} className=" text-xs border-2 dark:bg-zinc-700 dark:border-zinc-700 border-zinc-200 px-2.5 py-0.5 font-semibold bg-zinc-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
                ))}
            </div>  
    )
}