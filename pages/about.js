
import Head from "next/head";
import Button from "../components/Button";

const About = () => {
  return (
    <>
    <Head>
    <title>Buildit | About</title>
    </Head>
    <div className="flex flex-col min-h-screen ">
      <div className="flex-1 ">
        <div className="bg-[#dde9fb]">
          <div className="mx-auto container grid grid-cols-2 pt-32 px-28">
            <div>
              <img src="/investor.png" alt="" />
            </div>
            <div className="grid gap-y-5">
              <h3 className="text-base font-medium text-[#5BCCDE]">About us</h3>
              <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
                Owner and investor with a reputation
              </h1>
              <p className="font-medium text-base text-[#678C92] leading-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F7FF] flex flex-col justify-center items-center py-28 gap-y-5">
          <h3 className="text-base font-medium text-[#5BCCDE]">Statistics</h3>
          <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
            Development in numbers
          </h1>
          <img src="/cards.png" alt="" />
          <div className="flex gap-10 border-t-2 border-b-2 border-[#678C92] px-36 p-5">
            <img src="/Vector.svg" alt="" />
            <img src="/Vector-1.svg" alt="" />
            <img src="/Vector-2.svg" alt="" />
            <img src="/Vector-3.svg" alt="" />
            <img src="/Vector-4.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#E1EBFA] py-10">
          <div className="mx-auto container flex flex-col justify-center items-center px-24 py-20">
            <h3 className="text-base font-medium text-[#5BCCDE]">Our team</h3>
            <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
              Let’s meet
            </h1>
            <div className="grid grid-cols-3 pt-10">
              <img src="/meet.png" alt="" />
              <img src="/meet2.png" alt="" />
              <img src="/meet3.png" alt="" />
              <img src="/meet4.png" alt="" />
              <img src="/meet5.png" alt="" />
              <img src="/meet6.png" alt="" />
              <img src="/meet7.png" alt="" />
              <img src="/meet8.png" alt="" />
              <img src="/meet9.png" alt="" />
            </div>
            <div className="grid grid-cols-3 items-center border-t-2 border-b-2 border-b-[#678C92]  border-t-[#678C92] p-10">
              <div className="col-span-2">
                <h1 className="text-4xl font-bold text-[#486A6F] leading-[48px]">
                  Call us
                </h1>
              </div>
              <div className="flex gap-x-5">
                <Button
                  text="call"
                  style="text-[#F4F7FF] bg-[#4397A4] w-52 p-2 h-14"
                />
                <Button
                  text="Email"
                  style="text-[#486A6F] bg-[#C6DBFF] px-10 w-36 p-2 h-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
