import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineContactMail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";






export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-5">
        <aside className="border-2 h-full flex flex-col rounded-md font-mono text-2xl p-4 text-white w-full"> 
            <Link href="#" className="w-full p-4 my-8 text-center  border-b rounded-sm border-x-0 border-t-0 border-b-white flex justify-center items-center gap-2 hover:text-black hover:bg-white transition duration-500"><FaGithub /> Github</Link>
            <Link href="#" className="w-full p-4 mb-8 text-center  border-b rounded-sm border-x-0 border-t-0 border-b-white flex justify-center items-center gap-2 hover:text-black hover:bg-white transition duration-500"><CiLinkedin /> Linkedin</Link>
            <Link href="#" className="w-full p-4 mb-8 text-center  border-b rounded-sm border-x-0 border-t-0 border-b-white flex justify-center items-center gap-2 hover:text-black hover:bg-white transition duration-500"><MdOutlineContactMail /> Contato</Link>
            <Link href="#" className="w-full p-4 mb-8 text-center  border-b rounded-sm border-x-0 border-t-0 border-b-white flex justify-center items-center gap-2 hover:text-black hover:bg-white transition duration-500"><SiReaddotcv /> Currículo</Link>
        </aside>
      </div>

      <div className="w-full">
        <h1 className="text-2xl text-slate-200">Home</h1>
        <p className="text-slate-200">Esse é o conteúdo da Home</p>
      </div>
    </div>
  );
}


// hover:border-white transition duration-500