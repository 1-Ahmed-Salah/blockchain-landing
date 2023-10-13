import { useEffect, useRef, useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";


function Navbar() {

    const navRef = useRef()

    const [links, setLinks] = useState([
        'Platform',
        'Developers',
        'Community',
        'About'
    ])

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {

        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 130) {
                navRef.current.style.backgroundColor = 'black'
                navRef.current.style.padding = '20px'
            } else {
                navRef.current.style.backgroundColor = 'transparent'
                navRef.current.style.padding = '40px'
            }
        })

    })

  return (
    <div className={`py-[50px] fixed top-0 w-full m-auto z-50 transition-all duration-300 ${nav? 'bg-black' : 'bg-transparent'} `} ref={navRef}>
        <div className="container text-white flex justify-between items-center ">
            <a href="" className="font-medium text-[25px] uppercase"><span className="text-primary-yallow">De</span>fi</a>
            <nav className="flex">
                <div className="block md:hidden cursor-pointer" onClick={handleNav}>
                    {
                        nav ? <IoIosClose size={30}/> : <HiMenuAlt1 size={28} />
                    }
                    
                </div>
                <ul className={`absolute top-[100%] flex flex-col min-h-max p-[30px] ${nav? 'left-0 bg-black' : 'left-[-100%]'} transition-all duration-300 text-center w-full  md:flex md:flex-row md:items-center md:relative md:p-0 md:left-0 gap-4`}>
                    {
                        links.map(link => (
                            <li key={link} className="hover:text-primary-yallow transition-colors duration-500">
                                <a href="" className="block p-[12px]">{link}</a>
                            </li>
                        ))
                    }
                    <a href="" className="btn px-[20px] py-[9px] text-slate-900 rounded-[30px] font-medium uppercase">
                        Use Defi
                    </a>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar