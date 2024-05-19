import Image from "next/image";

export default function OurApp() {
  return (
    <div className="flex justify-start items-center">
      <div className="basis-1/2 self-center p-[24px] flex flex-col gap-[1.28rem]">
        <h1 className="text-4xl font-extrabold w-[80%] leading-[3.4rem]">
          Download our <span className="text-teal-500 font-bold">App</span> to get most out of it
        </h1>
        <p className="text-neutral-500 p-1">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="flex justify-start gap-x-2 items-center">
          <Image
            width={200}
            height={200}
            className="cursor-pointer"
            src={
              "https://i.postimg.cc/4mhsShmj/appStore.png"
            }
          />
          <Image
            width={200}
            height={200}
            className="cursor-pointer"
            src={
              "https://i.postimg.cc/XrS4S75q/google-Play.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
