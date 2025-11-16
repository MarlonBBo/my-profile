import '../types/TabTypes';
import { Tab } from "../types/TabTypes";
import { TabContent } from "../types/TabTypes";
import { useState } from "react";

export function Tabs(){

    const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabs: Tab[] = [
    { id: "tab1", label: "Sobre mim"},
    { id: "tab2", label: "Experiência profissional"},
    { id: "tab3", label: "Formação acadêmica"},
  ];

  const tabContent: TabContent = {
    tab1: (
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Sobre mim</h1>
          <p className="text-lg font-sans text-zinc-500">Sou Desenvolvedor Mobile React Native, focado em criar aplicativos modernos, rápidos e funcionais. Tenho experiência com <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>Expo</strong>, integração com APIs REST, armazenamento local e construção de interfaces intuitivas.<br/>
          Gosto de transformar ideias em soluções reais e tenho facilidade em aprender novas tecnologias, resolver problemas e trabalhar em equipe.<br/>

          Atualmente estou aprimorando minhas habilidades em boas práticas, arquitetura limpa, performance, testes e publicação de apps na Play Store.
          Busco oportunidades para crescer como desenvolvedor, contribuir em projetos reais e evoluir continuamente no ecossistema React Native.</p>
      </div>
  ),

    tab2: (
      <div>
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Desenvolvedor Mobile</h1>
          <p className="text-lg font-sans text-zinc-500">Tetra Soluções Empresariais • Março/2025 - Atualmente</p>
          <div className="mt-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Desenvolvimento Mobile</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400">
                Durante minha atuação na Tetra Soluções, fui responsável pelo desenvolvimento completo de um aplicativo mobile que funciona como extensão do sistema interno SG. O projeto foi desenvolvido do zero utilizando  <strong>React Native</strong>, <strong>JavaScript</strong>, <strong>Redux</strong>, <strong>Styled Components</strong>, <strong>AsyncStorage</strong> e <strong>Expo SQLite</strong>, garantindo uma interface moderna, performance sólida e armazenamento local eficiente.
              </p>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Desenvolvimento Backend</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400">
                Atuei no backend criando <strong>APIs RESTful</strong> com <strong>C# ASP.NET</strong>, implementando novas funcionalidades e viabilizando integrações consistentes entre o aplicativo mobile e o sistema principal.
              </p>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Banco de Dados e Desenvolvimento Web</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400">
                Contribuí para a <strong>modelagem e estruturação de tabelas no SQL Server</strong>, além de realizar manutenção, correções e desenvolvimento de novas funcionalidades nos sistemas web internos.
              </p>
            </div>
          </div>
      </div>
      
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
      <h1 className="text-2xl font-bold">Desenvolvedor Fullstack</h1>
        <p className="text-lg font-sans text-zinc-500">Freelancer • 2023 - 2025</p>
    </div>
    </div>
    ),

    tab3: (
      <div>
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Graduação em Engenharia de Software</h1>
          <p className="text-lg font-sans text-zinc-500">Graduação em <strong>Engenharia de Software</strong> - Universidade Estácio • 2024 - 2028</p>
      </div>
      <div className="flex flex-col mt-5 border border-zinc-300 dark:border-zinc-700 gap-4 rounded-md p-4">
        <h1 className="text-2xl font-bold">Formação C# .NET - Udemy</h1>
          <p className="text-lg font-sans text-zinc-500">Curso de <strong>C# .NET</strong> - Udemy • 2025</p>
      </div>
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