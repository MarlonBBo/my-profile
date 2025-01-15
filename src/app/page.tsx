'use client';

import Image from "next/image";
import '../styles/animation.css';
import { Tabs } from "@/components/Tabs";
import { Contacts } from "@/components/Contacts";
import { Projects } from "@/components/Projects";


const techs = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Nest.js",
  "PostgreSQL",
  "MySQL",
]


export default function Home() {

  return (
    <div className="flex flex-col h-screen items-center">
      <div className=" text-white  md:w-4/6">
        <section className="flex flex-col md:flex-row items-center justify-start mt-10 rounded-md font-mono p-4 gap-5">
        <Image src="https://avatars.githubusercontent.com/u/163504930?v=4" alt="foto de perfil" width={200} height={200} className="rounded-full border-2 border-zinc-500"/>
          <div className="flex flex-col w-full gap-3">
            <h1 className=" text-2xl font-bold md:text-4xl w-full text-center md:text-start">Desenvolvedor Fullstack</h1>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-2 mt-5 md:justify-start justify-center">
                {techs.map((tech) => (
                  <li key={tech} className=" text-xs border-2 border-zinc-700 px-2.5 py-0.5 font-extrabold bg-zinc-700 rounded-full">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 border-zinc-500 justify-center md:justify-start"> 
              <Contacts />
            </div>
            <div className="txt-animado">
                <span></span>
            </div> 
          </div>
        </section>
        <section className="flex flex-col items-center md:items-start gap-4 p-4">
          <Tabs/>
        </section>
        <h1 className="text-2xl font-bold mx-4 mt-10">Meus projetos</h1>
        <section>
          <Projects/>
        </section>
      </div>
    </div>
  );
}