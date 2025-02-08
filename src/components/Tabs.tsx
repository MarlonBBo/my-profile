import '../types/TabTypes';
import { Tab } from "../types/TabTypes";
import { TabContent } from "../types/TabTypes";
import { useState } from "react";


export function Tabs(){

    const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabs: Tab[] = [
    { id: "tab1", label: "Sobre mim"},
    { id: "tab2", label: "Experiência profissional"},
    { id: "tab3", label: "Formação academica"},
  ];

  const tabContent: TabContent = {
    tab1: (
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Sobre mim</h1>
          <p className="text-lg font-sans text-zinc-500">Olá, sou Marlon Barreto Borges, desenvolvedor Fullstack.  
            Iniciei na programação querendo criar meus próprios sites e apps, o que me fez desenvolver uma abordagem criativa e proativa para resolver desafios. Sou uma pessoa bem-humorada que busca constantemente maneiras de criar um ambiente colaborativo e divertido.
            Atualmente desenvolvo minhas aplicações com <strong>C# e Javascript</strong>, uso tecnologias como: <strong> .Net, Typescript, React, Tailwindcss, NodeJS, Express, NestJS, Prisma, PostgresSQL, MySQL, Docker, Git</strong></p>
      </div>
  ),

    tab2: (
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Experiência profissional</h1>
          <p className="text-lg font-sans text-zinc-500">Desenvolvedor Fullstack Freelancer - 2023 - Atualmente</p>
      </div>
    ),

    tab3: (
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Formação academica</h1>
          <p className="text-lg font-sans text-zinc-500">Graduação em <strong>Engenharia de Software</strong> - Universidade Estacio - 2024 - 2028</p>
      </div>
    )
}
    return (
        <>
        <div className="flex flex-col w-full md:w-auto md:flex-row dark:bg-zinc-800 bg-zinc-200 gap-2 p-1 rounded-md">
              {tabs.map((tab)=>(
                <button key={tab.id} 
                className={`bg-zinc-200 dark:bg-zinc-800 md:w-52 text-sm py-1 rounded-md font-semibold text-zinc-600 ${
                  activeTab === tab.id ? "bg-zinc-300 dark:bg-zinc-900 dark:text-white text-zinc-50": "text-white dark:text-zinc-400"}`}
                onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
          </div>
          <div className='w-full'>
            {tabContent[activeTab]}
          </div>
        </>
    )

}