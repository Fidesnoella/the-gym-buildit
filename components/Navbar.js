import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Nabvar = () => {
  return (
    <header className="absolute w-full z-20 ">
      <nav className="flex mx-auto container justify-between pt-10 items-center px-20 ">
      <Link href="/">
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 rounded-3xl h-12 bg-[#4397A4] shadow-md"></div>
          <a className="font-bold text-2xl text-[#486A6F] cursor-pointer">Buildit</a>
        </div>
        </Link>
        <div>
          <ul className="flex gap-x-8">
            <li className="font-medium text-[#678C92] text-base cursor-pointer hover:underline">
              <Link href="/about">
              <a>About</a>
              </Link>
            </li>
            <li className="font-medium text-[#678C92] text-base cursor-pointer hover:underline">
            <Link href="/services">
              <a>Services</a>
            </Link>
            </li>
            <li className="font-medium text-[#678C92] text-base cursor-pointer hover:underline">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            </li>
            <li className="font-medium text-[#678C92] text-base cursor-pointer hover:underline">
              <Link href="/contact">
              <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button
            text="Need a project?"
            style="text-[#F4F7FF] bg-[#4397A4] p-3 px-10"
          />
        </div>
    </nav>
    </header>
    
  );
};

export default Nabvar;
