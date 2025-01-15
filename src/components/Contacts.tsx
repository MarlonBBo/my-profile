import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

export function Contacts(){
    return (
          <>
            <Link href="https://github.com/MarlonBBo" target="_blank" rel="noopener noreferrer">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <FaGithub className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/marlonbborges1606/ "target="_blank" rel="noopener noreferrer">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <FaLinkedin className="w-6 h-6"/>
                </div>
              </Link>
              <Link href="#">
                <div className="border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <MdEmail className="w-6 h-6"/>
                </div>
              </Link>
              <a href="#" download="../public/Curriculo.pdf">
                <div className="flex gap-2 border-2 border-zinc-700 p-2 rounded-xl hover:bg-zinc-700 transition duration-500">
                  <IoIosPaper className="w-6 h-6"/> <p className="text-md font-bold">Download</p>
                </div>
              </a> 
          </>
    )
}