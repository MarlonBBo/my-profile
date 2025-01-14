'use client';

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import Image from "next/image";
import '../styles/animation.css';
import { useState } from "react";

type Tab = {
  id: number;
  label: string;
}



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

  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: Tab[] = [
    { id: 0, label: "Sobre mim"},
    { id: 1, label: "Experiência profissional"},
    { id: 2, label: "Formação academica"},
  ];

  const tabContent = {
    0: (
      <div className="flex flex-col m-10 border border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Sobre mim</h1>
          <p className="text-lg font-sans text-zinc-400">Olá, sou Marlon Barreto Borges, desenvolvedor Fullstack.  
            Iniciei na programação querendo criar meus próprios sites e apps, o que me fez desenvolver uma abordagem criativa e proativa para resolver desafios. Sou uma pessoa bem-humorada que busca constantemente maneiras de criar um ambiente colaborativo e divertido.
            Atualmente desenvolvo minhas aplicações com <strong>Javascript</strong>, uso tecnologias como: <strong>Typescript, React, Tailwindcss, NodeJS, Express, NestJS, Prisma, PostgresSQL, Docker, Git</strong></p>
      </div>
  ),

  1: (
    <div className="flex flex-col m-10 border border-zinc-700 gap-4 rounded-md p-4">
      <h1 className="text-2xl font-bold">Experiência profissional</h1>
        <p className="text-lg font-sans text-zinc-400">Desenvolvedor Fullstack na <strong>Empresa X</strong> - 2020 - 2021</p>
    </div>
  ),

  2: (
    <div className="flex flex-col m-10 border border-zinc-700 gap-4 rounded-md p-4">
      <h1 className="text-2xl font-bold">Formação academica</h1>
        <p className="text-lg font-sans text-zinc-400">Graduação em <strong>Engenharia de Software</strong> - Universidade X - 2018 - 2022</p>
    </div>
  )
}


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
                  <li key={tech} className=" text-xs border-2 border-zinc-700 px-2.5 py-0.5 font-semibold bg-zinc-700 rounded-full">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 border-zinc-500 justify-center md:justify-start"> 
              <Link href="https://github.com/MarlonBBo" target="_blank" rel="noopener noreferrer">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <FaGithub className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/marlonbborges1606/ "target="_blank" rel="noopener noreferrer">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <CiLinkedin className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="#">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <MdEmail className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="#">
                <div className="flex gap-2 border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <IoIosPaper className="w-6 h-6"/> <p className="text-md font-bold">Download</p>
                </div>
              </Link> 
            </div>
            <div className="txt-animado">
                <span></span>
            </div> 
          </div>
        </section>
        <section className="flex flex-col items-center md:items-start gap-4 p-4">
          <div className="flex flex-col w-full md:w-auto md:flex-row bg-zinc-800 gap-2 p-1 rounded-md">
              {tabs.map((tab)=>(
                <button key={tab.id} 
                className={`bg-zinc-800 md:w-52 text-sm py-1 rounded-md font-semibold text-zinc-400 ${
                  activeTab === tab.id ? "bg-zinc-950 text-zinc-50": "text-white "}`}
                onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
          </div>
          <div>
            {tabContent[activeTab]}
          </div>
        </section>
      </div>
    </div>
  );
}
/*<h1 className="text-2xl font-bold">Sobre mim</h1>
          <p className="text-lg font-sans text-zinc-400">Olá, sou Marlon Barreto Borges, desenvolvedor Fullstack.  
            Iniciei na programação querendo criar meus próprios sites e apps, o que me fez desenvolver uma abordagem criativa e proativa para resolver desafios. Sou uma pessoa bem-humorada que busca constantemente maneiras de criar um ambiente colaborativo e divertido.
            Atualmente desenvolvo minhas aplicações com <strong>Javascript</strong>, uso tecnologias como: <strong>Typescript, React, Tailwindcss, NodeJS, Express, NestJS, Prisma, PostgresSQL, Docker, Git</strong></p> */