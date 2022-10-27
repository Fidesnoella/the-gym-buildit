import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
    <Head>
      <title>Buildit | Home</title>
    </Head>
    <div className="flex flex-col min-h-screen">
      <div className="px-28 pb-16 pt-36 bg-[url('../public/Bgs.svg')] bg-no-repeat bg-cover">
        <div className="mx-auto container grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-center gap-y-5">
            <h1 className="text-[#486A6F] font-bold text-[64px] leading-[72px]">
              Development company
            </h1>
            <p className="text-[#678C92] text-xl font-normal">
              Forward-thinking real estate developer, owner and investor with a
              reputation
            </p>
            <div className="flex gap-x-5 mt-10">
              <Button
                text="Services"
                style="text-[#F4F7FF] bg-[#4397A4] w-28 p-2 h-14"
              />
              <Button
                text="About the company"
                style="text-[#486A6F] bg-[#C6DBFF] px-10 p-2 h-14"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex items-end gap-x-8">
              <img src="/Rectangle 613.png" alt="" />
              <img src="/Rectangle 610.png" alt="" />
              <img src="/Rectangle 612.png" alt="" />
            </div>
            <div className="flex items-start gap-x-8">
              <img src="/Rectangle 608.png" alt="" />
              <img src="/Rectangle 609.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className=" bg-[#F4F7FF]">
          <div className="mx-auto container gap-y-10 py-36 flex flex-col">
            <h1 className="font-bold text-[#486A6F] text-4xl leading-[48px] text-center">
              Innovative Execution
            </h1>
            <div className="flex items-center gap-x-20 mx-28 pt-20 justify-center">
              <div>
                <div className="bg-[#486A6F] w-16  p-5 rounded-md">
                  <img src="/list.svg" alt="" />
                </div>
                <h2 className="text-[#486A6F] font-bold text-2xl mt-3">
                  Featured Listing
                </h2>
                <p className="text-[#678C92] text-base font-medium mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <div className="bg-[#486A6F] w-16  p-5 rounded-md">
                  <img src="/properties.svg" alt="" />
                </div>
                <h2 className="text-[#486A6F] font-bold text-2xl mt-3">
                  Available Properties
                </h2>
                <p className="text-[#678C92] text-base font-medium mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <div className="bg-[#486A6F] w-16  p-5 rounded-md">
                  <img src="/news.svg" alt="" />
                </div>
                <h2 className="text-[#486A6F] font-bold text-2xl mt-3">
                  In the News
                </h2>
                <p className="text-[#678C92] text-base font-medium mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E1EBFA] px-28 pt-14 pb-24">
          <div className="mx-auto container">
            <div className="flex gap-10 border-t-2 border-b-2 border-[#678C92] px-36 p-5">
              <img src="/Vector.svg" alt="" />
              <img src="/Vector-1.svg" alt="" />
              <img src="/Vector-2.svg" alt="" />
              <img src="/Vector-3.svg" alt="" />
              <img src="/Vector-4.svg" alt="" />
            </div>
            <div className="grid grid-cols-2 pt-20 gap-10">
              <img src="/Photo.png" alt="" />
              <div className="grid">
                <h3 className="text-base font-medium text-[#5BCCDE]">
                  About us
                </h3>
                <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
                  Owner and investor with a reputation
                </h1>
                <p className="font-medium text-base text-[#678C92] leading-[32px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F7FF]">
          <div className="mx-auto container grid grid-cols-2 pt-24 pb-20">
            <div className="pl-24 flex flex-col mt-20 gap-y-10">
              <h3 className="text-base font-medium text-[#5BCCDE]">
                Available Properties
              </h3>
              <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
                Featured Listing
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
              <Button
                text="Explore"
                style="text-[#F4F7FF] bg-[#4397A4] p-3 px-10 w-[150px] shadow-md"
              />
            </div>
            <img src="/Photos.png" alt="" />
          </div>
        </div>
        <div className="bg-[#E1EBFA]">
          <div className="mx-auto container flex flex-col items-center pt-28 py-20">
            <h3 className="text-base font-medium text-[#5BCCDE]">Socials</h3>
            <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px] mt-3">
              On Instagram
            </h1>
            <div className="grid grid-cols-3 mt-10 gap-5">
              <img src="/Card.png" alt="" />
              <img src="/Card-1.png" alt="" />
              <img src="/Card-2.png" alt="" />
              <img src="/Card(2).png" alt="" />
              <img src="/Card-1(2).png" alt="" />
              <img src="/Card-2(2).png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#F4F7FF]">
          <div className="mx-auto container px-24 py-28 grid grid-cols-2 gap-32">
            <div>
              <h3 className="text-base font-medium text-[#5BCCDE]">Contact</h3>
              <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
                Get In Touch
              </h1>
              <div className="mt-20 grid gap-y-10">
                <div className="flex gap-x-5 items-center">
                  <div className="bg-[#E1EBFA] rounded-md p-5">
                    <img src="/phone.svg" alt="" />
                  </div>
                  <div className="text-[#486A6F]">
                    <p className="font-medium text-base">Tel</p>
                    <p className="font-bold text-xl">708-790-0000</p>
                  </div>
                </div>
                <div className="flex gap-x-5 items-center">
                  <div className="bg-[#E1EBFA] rounded-md p-5">
                    <img src="/email.svg" alt="" />
                  </div>
                  <div className="text-[#486A6F]">
                    <p className="font-medium text-base">Email</p>
                    <p className="font-bold text-xl">sales@buildit.site</p>
                  </div>
                </div>
                <div className="flex gap-x-5 items-center">
                  <div className="bg-[#E1EBFA] rounded-md p-5">
                    <img src="/email.svg" alt="" />
                  </div>
                  <div className="text-[#486A6F]">
                    <p className="font-medium text-base">office</p>
                    <p className="font-bold text-xl">
                      60 Manor Station St.
                      <br /> Fairport, NY 14450
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#d0e1fe] shadow-xl rounded-md">
              <form action="#" className="grid grid-cols-2 gap-y-5 p-5">
                <div className="flex gap-x-8">
                  <div>
                    <label htmlFor="name" className="text-[#486A6F]">
                      Name
                    </label>
                    <input
                      type="text"
                      className="outline-none bg-[#d0e1fe] border-[#486A6F] border h-[40px] rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="text-[#486A6F]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="outline-none bg-[#d0e1fe] border-[#486A6F] border  h-[40px] rounded-md"
                    />
                  </div>
                </div>

                <div className="grid col-span-2">
                  <label htmlFor="name" className="text-[#486A6F]">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="outline-none bg-[#d0e1fe] border-[#486A6F] border w-full h-[40px] rounded-md"
                  />
                </div>
                <div className="grid col-span-2">
                  <label htmlFor="name" className="text-[#486A6F]">
                    Message
                  </label>
                  <input
                    type="text"
                    className="outline-none bg-[#d0e1fe] border-[#486A6F] border w-full h-[130px] rounded-md"
                  />
                </div>
                <div className="grid col-span-2">
                  <Button
                    text="send Message"
                    style="text-[#F4F7FF] bg-[#4397A4] p-3 px-10 shadow-md"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
