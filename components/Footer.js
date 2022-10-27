import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#486f74] text-[#F4F7FF]">
      <div className="text-base font-medium flex flex-col mx-auto container p-20 ">
        <div className="flex  gap-28">
          <div className="grid gap-y-4">
            <h1 className="font-bold text-2xl">Buildit</h1>
            <p>Development company, 2022</p>
            <div className="pt-3 mt-16">
            <p>Site design – ⏰ Alarm</p>
          </div>
          </div>
          <div className="flex gap-48">
            <div>
              <ul className="grid gap-y-3">
                <li className="cursor-pointer hover:underline">
                  <a>Service 1</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a>Service 2</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a>Service 3</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a>Service 4</a>
                </li>
              </ul>
              <div className="flex gap-x-3 mt-10">
              <div className="bg-[#678C92] p-1 rounded-md w-8 h-8">
                <Image
                  src="/instagram.svg"
                  width={40}
                  height={40}
                  alt="instagram"
                />
              </div>
              <div className="bg-[#678C92] p-1 rounded-md w-8 h-8">
                <Image
                  src="/facebook.svg"
                  width={40}
                  height={40}
                  alt="facebook"
                />
              </div>
            </div>
            </div>
            <div>
              <ul className="grid gap-y-3">
                <li className="cursor-pointer hover:underline">
                  <a>About us</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a>Services</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a>Projects</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a>Contact</a>
                </li>
              </ul>
              <div className="opacity-0 mt-10">
              <p>About</p>
            </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <p>Get in touch</p>
              <p>60 Manor Station St. Fairport, </p>
              <p>NY 14450</p>
              <div className="mt-10">
              <p>708-790-0000</p>
              <p>sales@buildit.site</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
