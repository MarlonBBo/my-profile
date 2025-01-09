import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-5">
        <aside className="bg-gray-700 h-full flex flex-col rounded-lg font-bold text-2xl p-4 text-white w-full"> 
            <Link href="#" className="w-full p-4 my-8 text-center  shadow-slate-800 shadow-sm rounded-full border-2 border-gray-700  bg-gray-700 hover:border-slate-300 transition duration-700">Github</Link>
            <Link href="#" className="w-full p-4 mb-8 text-center  shadow-slate-800 shadow-sm rounded-full border-2 border-gray-700  bg-gray-700 hover:border-slate-300 transition duration-700">Linkedin</Link>
            <Link href="#" className="w-full p-4 mb-8 text-center  shadow-slate-800 shadow-sm rounded-full border-2 border-gray-700  bg-gray-700 hover:border-slate-300 transition duration-700">Contato</Link>
            <Link href="#" className="w-full p-4 mb-8 text-center  shadow-slate-800 shadow-sm rounded-full border-2 border-gray-700  bg-gray-700 hover:border-slate-300 transition duration-700">Download</Link>
        </aside>
      </div>

      <div className="w-full">
        <h1 className="text-2xl text-slate-200">Home</h1>
        <p className="text-slate-200">Esse é o conteúdo da Home</p>
      </div>
    </div>
  );
}

/*
<ul className="font-bold text-2xl h-5/6 p-4 text-white w-full">
              <li className="mb-5 text-center border-b-2 p-5 rounded-lg hover:bg-gray-600">
                <a href="#">Github</a>
              </li>
              <li className="mb-5 text-center border-b-2 p-5 rounded-lg">
                <a href="#">Linkedin</a>
              </li >
              <li className="mb-5 text-center border-b-2 p-5 rounded-lg">
                <a href="#">Contato</a>
              </li>
              <li className="mb-5 text-center border-b-2 p-5 rounded-lg">
                <a href="#">Download</a>
              </li>
            </ul>
*/
