

import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import ThemeSwitcher from "./theme-switcher";


export function Contacts(){
    return (
          <>
              <Link href="https://github.com/MarlonBBo" target="_blank" rel="noopener noreferrer">
                <div className="border border-zinc-700 p-2 rounded-xl dark:hover:bg-zinc-700 hover:bg-zinc-200 transition duration-500">
                  <RiGithubLine className="w-6 h-6 text-black dark:text-white"/>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/marlonbborges1606/ "target="_blank">
                <div className="border border-zinc-700 dark:hover:bg-zinc-700 p-2 rounded-xl hover:bg-zinc-200 transition duration-500">
                  <FiLinkedin className="w-6 h-6 text-black dark:text-white"/>
                </div>
              </Link>
              <Link href="mailto:contato.marlonbarretoborges@gmail.com" target="_blank">
                <div className="border border-zinc-700 dark:hover:bg-zinc-700 p-2 rounded-xl hover:bg-zinc-200 transition duration-500">
                  <MdOutlineEmail className="w-6 h-6 text-black dark:text-white"/>
                </div>
              </Link>
              <a href="https://raw.githubusercontent.com/MarlonBBo/my-profile/master/CurriculO.pdf" download>
                <div className="flex gap-2 border border-zinc-700 p-2 dark:hover:bg-zinc-700 rounded-xl hover:bg-zinc-200 transition duration-500">
                  <IoIosPaper className="w-6 h-6 text-black dark:text-white"/>
                </div>
              </a> 
              <ThemeSwitcher/>
          </>
    )
}