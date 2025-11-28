"use client";

export function Privacy() {
  return (
    <div className="flex flex-col gap-10">
      <div className="lg:flex-row flex-col flex justify-between">
        <h2 className="text-2xl font-bold">Privacy & Security details</h2>

        <button className="bg-amber-400 text-white px-15 py-3 rounded-md text-[20px] font-semibold hover:bg-amber-500">
          Edit
        </button>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 py-6.5 border-y border-[#bbbbbb]">
        <div className="grid grid-cols-2">
          <p className="leading-9 text-base text-text-dark">Name</p>
          <p className="leading-9 text-base text-text-gray">Thomas</p>
          <p className="leading-9 text-base text-text-dark">Email Address</p>
          <p className="leading-9 text-base text-text-gray">Thomas@gmail.com</p>
          <p className="leading-9 text-base text-text-dark">Mobile Number</p>
          <p className="leading-9 text-base text-text-gray">726 258 942</p>
          <p className="leading-9 text-base text-text-dark">Password</p>
          <p className="leading-9 text-base text-text-gray">*************</p>
        </div>
      </div>
    </div>
  );
}
