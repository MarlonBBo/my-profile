import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import Image from "next/image";
import '../styles/animation.css';



const techs = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Nest.js",
  "PostgreSQL",
  "MySQL",
]


export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-zinc-900 items-center">
      <div className=" text-white w-4/6">
        <section className="flex items-center h-3/6 mt-10 rounded-md font-mono p-4">
        <Image src="https://avatars.githubusercontent.com/u/163504930?v=4" alt="foto de perfil" width={200} height={200} className="rounded-full border-2 border-zinc-500"/>
          <div className="flex flex-col w-full h-full gap-8 ml-8">
            <h1 className="text-4xl font-bold ">Desenvolvedor Fullstack</h1>
            
            <div className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <li key={tech} className=" text-sm border-2 border-zinc-700 px-2 font-extrabold bg-zinc-700 rounded-xl">{tech}</li>
                ))}
              </ul>
            </div>

            <div className="txt-animado">
              <span></span>
            </div>

            <div className="flex gap-4 border-zinc-500"> 
              <Link href="https://github.com/MarlonBBo">
                <div className="bg-zinc-700 p-2 rounded-full">
                  <FaGithub className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/marlonbborges1606/">
                <div className="bg-zinc-700 p-2 rounded-full">
                  <CiLinkedin className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://github.com/MarlonBBo">
                <div className="bg-zinc-700 p-2 rounded-full">
                  <MdEmail className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://github.com/MarlonBBo">
                <div className="bg-zinc-700 p-2 rounded-full">
                  <SiReaddotcv className="w-6 h-6"/>
                </div>
              </Link>
            </div>

          </div>
        </section>

        <section className="flex flex-col items-center justify-center h-2/5 m-10 border-2  rounded-md font-mono  p-4">
          <h1 className="text-4xl font-mono">My Profile</h1>
          <p className="text-lg font-mono">Bem vindo ao meu perfil</p>
        </section>

        <section className="flex flex-col items-center justify-center h-2/5 m-10 border-2 rounded-md font-mono  p-4">
          <h1 className="text-4xl font-mono">My Profile</h1>
          <p className="text-lg font-mono">Bem vindo ao meu perfil</p>
        </section>
      </div>
    </div>
  );
}


// hover:border-white transition duration-500