import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="not-found flex flex-col justify-center font-bold gap-y-5 text-6xl items-center flex-1">
        <h1 className="text-[#678C92]">Oooops......</h1>
        <h2 className="text-[#678C92]">That page cannot be found.</h2>
        <p className="text-[#678C92]">
          Go back to the{" "}
          <Link href="/">
            <a className="text-blue-700">Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
