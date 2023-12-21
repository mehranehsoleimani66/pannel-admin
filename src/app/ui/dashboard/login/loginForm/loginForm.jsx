"use client";

import { authenticate } from "@/src/app/lib/actions";
import { useFormState } from "react-dom";
const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form
      action={formAction}
      className="bg-[#182237] p-[50px] rounded-xl w-[500px] h-[500px] flex flex-col gap-[30px] justify-center"
    >
      <input
        name="username"
        type="text"
        placeholder="userName..."
        className="p-[30px] border-2 border-solid border-[#2e374a] bg-[#151c2c] text-white"
      />
      <input
        name="password"
        type="password"
        placeholder="password..."
        className="p-[30px] border-2 border-solid border-[#2e374a] bg-[#151c2c] text-white"
      />
      <button className="p-8 bg-teal-500 border-none rounded-md">LogIn</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
