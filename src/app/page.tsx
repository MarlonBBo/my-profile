'use client';

import Image from "next/image";
import { Tabs } from "@/components/Tabs";
import { Contacts } from "@/components/Contacts";
import { Projects } from "@/components/Projects";


const techs = [
  "React Native",
  "TypeScript",
  "Expo",
  "EAS Build",
  "React Navigation",
  "Redux",
  "Context API",
  "Zustand",
  "Axios",
  "REST API",
  "JSON",
  "Styled Components",
  "Nativewind",
  "AsyncStorage",
  "SQLite",
];


export default function Home() {

  return (
    <div className="flex flex-col items-center bg-white dark:bg-zinc-900">
      <div className=" text-black dark:text-white md:w-4/6">
        <section className="flex flex-col md:flex-row items-center justify-start mt-10 rounded-md font-mono p-4 gap-5">
        <Image src="https://avatars.githubusercontent.com/u/163504930?v=4" alt="foto de perfil" width={200} height={200} className="rounded-full border-2 dark:border-zinc-700 border-zinc-300"/>
          <div className="flex flex-col w-full gap-3">
            <h1 className=" text-2xl font-bold md:text-4xl w-full text-center md:text-start">Desenvolvedor Mobile</h1>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-2 mt-5 md:justify-start justify-center">
                {techs.map((tech) => (
                  <li key={tech} className=" text-xs border-2 dark:border-zinc-700 border-zinc-200 px-2.5 py-0.5 font-extrabold dark:bg-zinc-700 bg-zinc-200 rounded-full">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 border-zinc-500 justify-center md:justify-start"> 
              <Contacts />
            </div>
            <div className="txt-animado flex justify-start items-start text-[25px] font-light">
              <span className="relative">
                Hi, I am Marlon Barreto
                <span className="absolute h-[85%] text-muted animate-palavras">
                </span>
                <span className="absolute h-[85%] border-l-[2px] border-black dark:border-white right-[-10px] animate-digitando w-[calc(100%+10px)] bg-white dark:bg-zinc-900">   
                </span>
              </span>
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