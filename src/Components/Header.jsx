import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { BiUser } from "react-icons/bi";
import { FaBacon } from "react-icons/fa";
import { GiSaltShaker } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";
import { FaHotdog } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { useContext } from "react";
import { DARK_MODE } from "../constants/themeConstant";
import { ThemeContext } from "../context/ThemContext";

const Header = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext)
  console.log(theme);
  return (
    <>
      <header className={`flex justify-between text-black items-center mx-16 my-5 ${theme === DARK_MODE ? 'bg-white text-black' : 'bg-black text-white '
        }`} >

        <div>
          <ul className="flex">
            <li><Link className="text-5xl bg-[#309B42] font-semibold text-white px-1 p-0" to={'../pages/index.jsx'}>EVOS</Link></li>
            <li className="py-[10px] px-[8px] ml-5"><Link to={'../pages/index.jsx'} className="text-[#309B42] active:underline active:underline-offset-2 text-[16px]">Main</Link></li>
            <li className="py-[10px] px-[8px]"><Link to={'../pages/branches.jsx'} className="text-[16px]">Branches</Link></li>
            <li className="py-[10px] px-[8px]"><Link to={'../pages/vacancies.jsx'} className="text-[16px]">Vacancies</Link></li>
            <li className="py-[10px] px-[8px]"><Link to={'../pages/news.jsx'} className="text-[16px]">News</Link></li>
            <li className="py-[10px] px-[8px]"><Link to={'../pages/about.jsx'} className="text-[16px]">About Us</Link></li>
            <li className="py-[10px] px-[8px]"><Link to={'../pages/contact.jsx'} className="text-[16px]">Contacts</Link></li>
            <li className="py-[10px] px-[8px]">
              <button onClick={toggleDarkMode} className="border border-red-600 p-2">
                {theme === DARK_MODE ? 'Dark Mode' : 'Light Mode'}
              </button>
            </li>
          </ul>
        </div>

        <div className="flex">
          <button className={`flex items-center bg-[#F6F8F9] p-3 mr-4 ${theme === DARK_MODE ? 'bg-white text-black' : 'bg-black text-white '}`}>
            <FaLocationDot className="text-xl mr-2" />
            <p className="font-medium">Select your address</p>
            <MdKeyboardArrowDown className="ml-2 text-[18px] font-medium" />
          </button>
          <button className={`flex items-ceneter bg-[#F6F8F9] p-3 mr-4 ${theme === DARK_MODE ? 'bg-white text-black' : 'bg-black text-white '}`}>
            <FaBasketShopping className="text-xl mr-2" />
            <p className="font-medium text-base">Basket</p>
          </button>
          <button className={`flex items-ceneter bg-[#F6F8F9] p-3 mr-4 ${theme === DARK_MODE ? 'bg-white text-black' : 'bg-black text-white '}`}>
            <img className="w-6 h-6 rounded-[50%]" src="https://media.istockphoto.com/id/880562092/vector/great-britain-united-kingdom-flag.jpg?s=612x612&w=0&k=20&c=z6Qg_O-2pIcreAK3Fb8X003h2HRIFiRWNT8cg7hDfFo=" alt="" />
            <MdKeyboardArrowDown className="ml-2 text-[20px] font-medium" />
          </button>
          <button className={`flex items-ceneter text-center bg-[#F6F8F9] p-3 mr-4 ${theme === DARK_MODE ? 'bg-white text-black' : 'bg-black text-white '}`}>
            <BiUser className="text-2xl mr-2" />
          </button>
        </div>
      </header>
      <div className="relative bg-green-700 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">

          <div className="md:w-1/2 space-y-6 p-10">
            <h1 className="text-[42px] font-bold">
              For a good breakfast - go to EVOS!
            </h1>
            <div className="text-lg flex space-x-4">
              <span className="material-icons text-2xl"><GiSaltShaker /></span>
              <span className="material-icons text-2xl"><PiHamburger /></span>
              <span className="material-icons text-2xl"><FaHotdog /></span>
              <span className="material-icons text-2xl"><FaHamburger /></span>
              <span className="material-icons text-2xl"><FaBacon /></span>
            </div>
            <p className="text-xl">
              From 7:00 to 10:00 enjoy aspecial menu where you will find excellent dishes to start a productive day😊
            </p>
            <a href="./news.jsx" className="text-yellow-300 underline">News Details...</a>


            <div className="space-y-4 grid grid-cols-2 grid-flow-row gap-2">
              <button className="bg-green-500 mt-4 text-white py-3 px-6 rounded-lg font-bold">
                Our Menu
              </button>
              <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-bold">
                APP Evos
              </button>
              <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-bold">
                Product Composition
              </button>
              <button className="bg-transparent border border-white py-3 px-6 rounded-lg text-white">
                For partners
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative">
              <img
                src="https://admin.evos.uz/uploads/photo_2024_08_27_13_30_25_2_8021f7b904.jpg"
                alt="EVOS Breakfast"
                className="rounded-lg shadow-lg w-[628px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-20%] translate-x-[13%] bg-white rounded-[10px] py-[19px] px-[8px] mr-0 overflow-x-auto overflow-y-auto w-[1200px] text-center">
        <ul className="flex justify-start items-center list-none">
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#News">News</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Lavashes">Lavashes</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Trindnwiches">Trindnwiches</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Shawarmas">Shawarmas</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Burgers">Burgers</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Hot_dogs">Hot dogs</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Fries">Fries</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Snacks">Snacks</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Meals">Meals</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Combos">Combos</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Sets">Sets and Pairs</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Desserts">Desserts</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Sauces_additives">Sauces,additives</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Salads">Salads</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Other">Other</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Juices">Juices</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Beverage">Beverage</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Tea">Tea</a>
          </li>
          <li className="mr-6 whitespace-nowrap text-[16px]">
            <a className="whitespace-nowrap" href="#Coffee">Coffee</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
