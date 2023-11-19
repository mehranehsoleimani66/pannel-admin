import Image from "next/image";

const Transaction = () => {
  return (
    <div className="bg-[#182237] p-5 rounded-xl flex gap-2 flex-col pointer w-full ml-3 hover:bg-[#2e374a]">
      <h1 className="mb-5 font-extralight text-[#b7bac1]">
        Latest Transaction
      </h1>
      <table className="w-full">
        {" "}
        <thead>
          <tr className="p-3">
            <td>Name</td>
            <td>Status</td>
            <td>Data</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-3 items-center ">
                {" "}
                <Image
                  src="/avatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className="rounded-full  object-cover"
                />
                <span className="text-sm">John Deo</span>
              </div>
            </td>
            <td>
              <span className="bg-[#f7cb7375] rounded-md p-1 text-sm text-white">
                pending
              </span>
            </td>
            <td>2023.10.12</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className="flex gap-3 items-center ">
                {" "}
                <Image
                  src="/avatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className="rounded-full  object-cover"
                />
                <span className="text-sm">John Deo</span>
              </div>
            </td>
            <td>
              <span className="bg-[#afd6ee75] rounded-md p-1 text-sm text-white">
                done
              </span>
            </td>
            <td>2023.10.12</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className="flex gap-3 items-center ">
                {" "}
                <Image
                  src="/avatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className="rounded-full  object-cover"
                />
                <span className="text-sm">John Deo</span>
              </div>
            </td>
            <td>
              <span className="bg-[#f7737375]  rounded-md p-1 text-sm text-white">
                cancelled
              </span>
            </td>
            <td>2023.10.12</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className="flex gap-3 items-center">
                {" "}
                <Image
                  src="/avatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className="rounded-full  object-cover"
                />
                <span className="text-sm">John Deo</span>
              </div>
            </td>
            <td>
              <span className="bg-[#f7737375]  rounded-md p-1 text-sm text-white">
                cancelled
              </span>
            </td>
            <td>2023.10.12</td>
            <td>$3.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
