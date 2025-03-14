import { Project } from "@/interfaces/Project";
import Image from "next/image";



export function Projects(){

    const project: Project[] = [
        {
          id: "1",
          title: "Project Cine",
          description: "O Site oferece uma lista com vários filmes que vem de uma API. Podendo ver detalhes do filme, buscar por outros filmes. Contendo Autentificação do usuário.",
          techs: ["React", "TypeScript","JavaScript", "Tailwindcss", "PostgreSQL","Nest", "Prisma", "Docker"],
          image: "https://camo.githubusercontent.com/10b7d33e4dad5b33ebc331752c7a4510c4387d81dcfb2823397038e603f8d490/68747470733a2f2f692e696d6775722e636f6d2f684a74446665562e706e67",
          url: "http://0nzcine.site/"
        },
        {
          id: "2",
          title: "Project Blog",
          description: "Nessa aplicação o usuário navega pelas páginas de posts e categorias, já o/os admin(s) podem alterar as páginas de posts e categorias, adcionando ou subtraindo postagens.",
          techs: ["Node", "JavaScript", "Bootstrap", "Express", "MongoDB", "Handlebars", "Docker"],
          image: "https://camo.githubusercontent.com/9be1252b2665c7187fa575b900b10a0b449699005a3e954955422238a47b661d/68747470733a2f2f692e696d6775722e636f6d2f33506e737563612e706e67",
          url: "https://github.com/MarlonBBo/Project-Blog"
        },
        {
          id: "3",
          title: "Portfólio",
          description: "Portfólio criado para apresentar um pouco mais dos meus projetos e algumas informações pessoais",
          techs: ["TypeScript", "React", "Next", "Tailwindcss"],
          image: "https://i.imgur.com/eqXGru3.png",
          url: "https://github.com/MarlonBBo/my-profile"
        },
        {
          id: "4",
          title: "Nutrition",
          description: "Aplicativo criado com React Native que cria suas dietas com base em seus objetivos, nivel de atividade física, etc... Essas dietas são criadas por uma Inteligência Artificial.",
          techs: ["TypeScript", "React Native", "CSS", "Nest", "React Query"],
          image: "https://i.imgur.com/p2D36qT.png",
          url: "https://github.com/MarlonBBo/nutrition"
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