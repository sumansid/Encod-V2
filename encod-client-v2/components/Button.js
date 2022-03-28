import React from "react";

const Button = (props) => {
  return (
    <div className="mt-24 space-y-20">
      <div className="w-full">
        <div className="flex-1 h-full w-80 mx-auto">
          <button className="hover:bg-gray-800 flex w-full bg-gray-900 shadow rounded-lg py-4 px-16">
            <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-white">
              {props.name}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
