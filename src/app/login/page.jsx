import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form
        action=""
        className="bg-[#182237] p-[50px] rounded-xl w-[500px] h-[500px] flex flex-col gap-[30px] justify-center"
      >
        <input
          type="text"
          placeholder="userName..."
          className="p-[30px] border-2 border-solid border-[#2e374a] bg-[#151c2c] text-white"
        />
        <input
          type="password"
          placeholder="password..."
          className="p-[30px] border-2 border-solid border-[#2e374a] bg-[#151c2c] text-white"
        />
        <button className="p-8 bg-teal-500 border-none rounded-md">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
