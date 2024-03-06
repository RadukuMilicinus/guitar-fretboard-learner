import react from 'react';

// export default function Options(){
//   return (

//   );
// }

export default function Key(){
  return (
    <div className="relative left-0 top-[10%] w-full h-[80%] flex flex-col">
      <div className="relative flex flex-col basis-1/2 items-center justify-center w-full md:h-auto">
        <div className="flex h-1/2 items-center justify-center w-full text-black text-2xl font-semibold">Key</div>
        <div className="flex justify-normal flex-row left-[10%] w-[80%] h-full md:h-auto">
          {/* Divs with notes A to G */}
          
          <div className="relative flex w-[100%] justify-evenly flex-row left-0 top-0 h-full bg-[#727777] rounded-md">
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">A</div>
            <div className="w-[1%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">B</div>
            <div className="w-[1%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">C</div>
            <div className="w-[1%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">D</div>
            <div className="w-[1%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">E</div>
            <div className="w-[1%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">F</div>
            <div className="w-[1%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <div className="basis-1/7 h-[100%] items-center justify-center text-xl font-bold">G</div>
          </div>
          {/* Divs with # and b */}
          <div className="flex flex-row basis-3/10 w-[30%] h-[100%] justify-evenly">
            <div className="flex basis-1/5 h-[100%]"></div>
            <div className="flex basis-4/5 h-full bg-[#727777] rounded-md">
              <div className="flex basis-1/2 h-[100%] items-center justify-center text-xl font-bold">#</div>
              <div className="w-[4%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
              <div className="flex basis-1/2 h-[100%] items-center justify-center text-xl font-bold">b</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col basis-1/2 items-center justify-center w-full md:h-auto ">
        <div className="flex h-1/2 items-center justify-center w-full text-black text-2xl font-semibold">Note representation</div>
        <div className="flex flex-row left-[10%] w-[80%] h-1/2">
          <div className="relative flex flex-row w-1/2 h-full">
            <div className="flex basis-4/5 h-full font-semibold text-2xl text-black justify-center items-center">
              Intervals
            </div>
            <div className="flex basis-1/5 h-[100%] justify-center items-center relative">
              <div className="flex absolute justify-center items-center w-6 h-6 bg-[#727777] rounded-full z-0"></div>
              <div className="flex absolute justify-center items-center w-4 h-4 bg-[#3D3D3D] rounded-full z-1"></div>
            </div>
          </div>
          <div className="relative flex flex-row w-1/2 h-full">
            <div className="flex basis-4/5 h-full font-semibold text-2xl text-black justify-center items-center">
              Note name
            </div>
            <div className="flex basis-1/5 h-[100%] justify-center items-center relative">
              <div className="flex absolute justify-center items-center w-6 h-6 bg-[#727777] rounded-full z-0"></div>
              <div className="flex absolute justify-center items-center w-4 h-4 bg-[#3D3D3D] rounded-full z-1"></div>
            </div>
          </div>
          {/* Your content for the second part */}
        </div>
      </div>
    </div>
  );
}



