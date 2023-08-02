import { Link } from "react-router-dom"

export default function Header () {
    return(
        <header className="flex justify-between">
        <a href="" className="flex items-center gap-1" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <span className="font-bold text-xl">BookFlip</span>
        </a>
        <div className="flex items-right gap-2 border border-gray300 rounded-full py-2 px-4 shadow-md shadow-greenlight-500">
          <Link to ={"/login"} >Registrate o inicia sesión</Link>
          <div className="border-l border-gray-300"></div>
          <div>Vender Producto</div>
        <br className="border-t-1 border-black" />
        </div>
        <div>
          <button className="bg-primary text-white p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </header>
    )
}