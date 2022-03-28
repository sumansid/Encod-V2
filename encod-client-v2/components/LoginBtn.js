import React from "react";
import { VscGithub } from "react-icons/vsc";

const LoginBtn = (props) => {
  return (
    <div className="space-y-20">
      <div className="w-full">
        <div className="flex-1 h-full w-30 mx-auto">
          <button className="hover:bg-gray-100 flex w-full bg-gray-100 shadow rounded-lg px-16">
            <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white">
              {props.btnName}
            </p>
            <VscGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginBtn;
