import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import Image from "next/image";
import '../styles/animation.css';



const techs = [
  "Typescript",
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
      <div className=" text-white  md:w-5/6">
        <section className="flex flex-col md:flex-row items-center justify-start h-3/6 mt-10 rounded-md font-mono p-4 gap-5">
        <Image src="https://avatars.githubusercontent.com/u/163504930?v=4" alt="foto de perfil" width={200} height={200} className="rounded-full border-2 border-zinc-500"/>
          <div className="flex flex-col w-full h-full gap-3">
            <h1 className=" text-2xl font-bold md:text-4xl w-full text-center md:text-start">Desenvolvedor Fullstack</h1>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-2 mt-5 md:justify-start justify-center">
                {techs.map((tech) => (
                  <li key={tech} className=" text-sm border-2 border-zinc-700 px-2 font-extrabold bg-zinc-700 rounded-xl">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="txt-animado">
              <span></span>
            </div>  
            <div className="flex gap-4 border-zinc-500 justify-center md:justify-start"> 
              <Link href="https://github.com/MarlonBBo">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <FaGithub className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/marlonbborges1606/">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <CiLinkedin className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://github.com/MarlonBBo">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <MdEmail className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://github.com/MarlonBBo">
                <div className="flex gap-2 border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <IoIosPaper className="w-6 h-6"/> <p className="text-md font-bold">Download</p>
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