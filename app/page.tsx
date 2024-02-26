import Image from "next/image";
import React from "react";
import topBlob from "@/public/assets/blob/top-blob.svg";
import bottomBlob from "@/public/assets/blob/bottom-blob.svg";
import rocketImage from "@/public/assets/rocket.svg";
import Countdown from "@/components/countdown";

const LaunchPage = () => {
  return (
    <main className="flex flex-col bg-white h-full">
      <Image
        height={1000}
        width={1000}
        loading="lazy"
        src={topBlob}
        alt={"alt"}
        className="w-full aspect-[10] fill-violet-200 fill-opacity-30 max-md:max-w-full object-cover"
      />
      <section className="z-10 self-center w-full max-w-7xl flex-1 grid place-items-center">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5-- my-auto max-md:mt-10 max-md:max-w-full">
              <Countdown />
              <LaunchSignup />
            </div>
          </div>
          <div className="flex ml-5 w-[56%] max-md:ml-0 max-md:w-full aspect-square">
            <Image
              height={1000}
              width={1000}
              src={rocketImage}
              alt="Product image"
            />
          </div>
        </div>
      </section>
      <Image
        height={1000}
        width={1000}
        loading="lazy"
        src={bottomBlob}
        alt={"alt"}
        className="w-full aspect-[10] fill-violet-200 fill-opacity-30 max-md:max-w-full object-cover"
      />
    </main>
  );
};

export default LaunchPage;

const LaunchSignup = () => (
  <form className="flex flex-col items-center mt-12 text-[#9C9AB6]">
    Sign up to find out more about the launch
    <button
      type="submit"
      className="justify-center self-center px-10 py-4 mt-9 text-base text-white whitespace-nowrap bg-indigo-500 rounded-xl max-md:px-5"
    >
      Sign Up
    </button>
  </form>
);