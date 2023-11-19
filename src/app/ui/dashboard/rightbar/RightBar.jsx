import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="fixed">
      <div className="relative rounded-xl pt-5  pb-5 pl-5 pr-5  mb-5 bg-gradient-to-t from-[#182237] to-[#253352] ">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="font-bold">🔥 Available Now</span>
          <h3> How to use the new version of the admin dashboard?</h3>
          <span className="text-xs font-medium text-[#b7bac1]">
            Takes 4 minutes to learn
          </span>
          <p className="text-sm font-medium text-[#b7bac1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-3 p-3 bg-[#5d57c9] border-none text-white rounded-md w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className="relative rounded-xl pt-5 pb-5 mb-5 bg-gradient-to-t from-[#182237] to-[#253352] ">
        <div className="flex flex-col gap-2  pt-5  pb-5 pl-5 pr-5">
          <span className='"font-bold"'>🚀 Coming Soon</span>
          <h3 className=" font-medium text-white">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-xs text-[#b7bac1] ">
            Boost your productivity
          </span>
          <p className="text-sm text-[#b7bac1] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-3 p-3 w-max bg-[#5d57c9] text-white cursor-pointer rounded">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
