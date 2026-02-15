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
          <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mt-2 italic">
            Atuação no desenvolvimento completo do aplicativo Tetra One e sistemas associados, participando desde a concepção da arquitetura até a evolução contínua do produto, com foco em estabilidade, escalabilidade e eficiência operacional.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Desenvolvimento do aplicativo Tetra One</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mb-2">
                Desenvolvimento do aplicativo Tetra One do zero, criando funcionalidades para apoiar a digitalização das operações logísticas:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base font-sans text-zinc-600 dark:text-zinc-400 ml-4">
                <li>Gestão de estoque e controle de inventário</li>
                <li>Conferência de mercadorias e balanço</li>
                <li>Expedição para operações de atacado</li>
                <li>Impressão e gerenciamento de etiquetas</li>
                <li>Controle de processos internos e conferência de compras</li>
              </ul>
              <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-md">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  ➝ Contribuiu para redução de até 40% em erros operacionais e maior controle de inventário
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Criação de APIs em C# com ASP.NET</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mb-2">
                Estruturação de endpoints completos para comunicação entre app mobile, sistema web e banco de dados:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base font-sans text-zinc-600 dark:text-zinc-400 ml-4">
                <li>Endpoints completos para consumo e manipulação de dados</li>
                <li>Integração segura entre app, web e banco de dados</li>
                <li>Implementação de regras de negócio e validações</li>
              </ul>
              <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-md">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  ➝ Maior confiabilidade dos dados e redução de inconsistências através de integrações seguras
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Modelagem e estruturação do banco de dados</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mb-2">
                Definição de tabelas, relacionamentos, constraints e ajustes de performance, além de execução de migrações e melhorias conforme novas demandas:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base font-sans text-zinc-600 dark:text-zinc-400 ml-4">
                <li>Tabelas, relacionamentos e constraints bem definidos</li>
                <li>Ajustes de performance e normalização</li>
                <li>Implementação de melhorias e migrações conforme novas demandas</li>
              </ul>
              <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-md">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  ➝ Otimizações que resultaram em melhora de performance nas consultas críticas e maior organização da base de dados
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Desenvolvimento e manutenção do sistema web</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mb-2">
                Desenvolvimento e manutenção do sistema web, utilizando React, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base font-sans text-zinc-600 dark:text-zinc-400 ml-4">
                <li>Criação de novas funcionalidades e componentes reutilizáveis</li>
                <li>Refatoração de trechos críticos</li>
                <li>Melhorias de usabilidade e performance</li>
                <li>Correção de bugs e ajustes contínuos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Evolução do ecossistema Tetra</h2>
              <p className="text-base font-sans text-zinc-600 dark:text-zinc-400">
                Atuação contínua na evolução do ecossistema, colaborando com decisões técnicas, melhorias de estabilidade e suporte à operação diária da empresa.
              </p>
              <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-md">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  ➝ Participação direta na sustentação de um sistema utilizado em processos essenciais da operação
                </p>
              </div>

                      <div className="mt-4 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Reestruturação Completa de Aplicativo</h2>
            <p className="text-sm font-medium text-zinc-500 mb-2">Refatoração Arquitetural — React Native</p>
            <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mb-2">
              Aplicativo desenvolvido às pressas, sem arquitetura definida, sem TypeScript, sem testes, com múltiplas dependências desnecessárias, arquivos com +1000 linhas, baixa componentização e alta complexidade. Optamos por refazer do zero devido à inviabilidade de manutenção incremental.
            </p>
            <ul className="list-disc list-inside space-y-1 text-base font-sans text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Implementação da arquitetura MVVM e migração completa para TypeScript, estabelecendo padrões de design consistentes em toda a aplicação.</li>
              <li>Criação de hooks customizados otimizados e componentização bem definida, eliminando arquivos monolíticos e reduzindo complexidade.</li>
              <li>Implementação de testes automatizados e redução de dependências externas desnecessárias.</li>
            </ul>
            <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-md">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                ➝ Código mais escalável, legível e com base sólida para crescimento futuro. Manutenção facilitada e maior produtividade da equipe.
              </p>
            </div>
            <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <strong>Diferencial:</strong> Visão arquitetural + pensamento de longo prazo + foco em qualidade e escalabilidade.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Otimização de Performance em Lista com +70 mil Produtos</h2>
            <p className="text-sm font-medium text-zinc-500 mb-2">React Native — Otimização de FlatList</p>
            <p className="text-base font-sans text-zinc-600 dark:text-zinc-400 mb-2">
              Cliente possuía mais de 70 mil produtos cadastrados no banco de dados. A listagem no aplicativo estava lenta, travando e pulando itens durante o scroll, comprometendo a experiência do usuário.
            </p>
            <ul className="list-disc list-inside space-y-1 text-base font-sans text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Estudo aprofundado da documentação oficial do React Native e aplicação de boas práticas de otimização da FlatList.</li>
              <li>Aplicação de keyExtractor, ajuste de initialNumToRender, implementação de getItemLayout e controle de re-renderizações desnecessárias.</li>
              <li>Uso de memo, componentização adequada e paginação/virtualização eficiente.</li>
            </ul>
            <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-md">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                ➝ Redução significativa de travamentos e scroll fluido com grande volume de dados. Aumento da confiabilidade do cliente.
              </p>
            </div>
            <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <strong>Diferencial:</strong> Capacidade de diagnóstico técnico + estudo autônomo + aplicação prática baseada em documentação oficial.
            </p>
          </div>
        </div>
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