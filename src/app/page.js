import Image from "next/image";

export function Fret() {
  return (
    <div className="top-0 w-[1%] h-[100%] bg-[#4A4A4A] z-2"></div>
  );
}

export function FretMarker() {
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] rounded-full bg-[#BA1C1C]"></div>
  );
}

export default function Home() {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-orange-200">

      <div className="relative top-[20%] left-[15%] h-[25%] w-[65%] rounded-3xl bg-[#E39D34]">
        <div className="absolute grid grid-cols-2 gap-3 left-[15%] top-[5%] w-[50%] h-[90%] bg-[#E39D34]"> 
          <div className="relative flex justify-center w-[100%] h-[100%]">

            <div className="absolute font-medium text-xl font-roboto">Key</div>
            <div className="absolute top-[25%] left-[0%] h-[75%] w-[100%]">
              <div className="relative left-[0%] top-[50%] w-[100%] h-[50%] text-center text-opacity-50 text-black bg-white rounded-lg" onClick={null}>Insert key...</div>
            </div>
          </div>
          {/* Scales */}
          <div className="relative w-[100%] h-[100%] bg-gray-400">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center h-full w-[50%]">
                <div className="font-medium text-xl font-roboto mx-auto">Scale</div>
              </div>
              <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#039500]"></div>
              </div>
            </div>
          </div>
          {/* Chords */}
          <div className="relative w-[100%] h-[100%] bg-gray-400">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center h-full w-[50%]">
                <div className="font-medium text-xl font-roboto mx-auto">Chord</div>
              </div>
              <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#039500]"></div>
              </div>
            </div>
          </div>
          {/* Arpeggios */}
          <div className="relative w-[100%] h-[100%] bg-gray-400">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center h-full w-[50%]">
                <div className="font-medium text-xl font-roboto mx-auto">Arpeggio</div>
              </div>
              <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#039500]"></div>
              </div>
            </div>
          </div>
        </div> 

      </div>

      <div className="absolute top-[55%] left-[6%] w-[80%] h-[30%]">

      </div> 
      <div className="absolute top-[55%] left-[8%] rounded-l-lg  w-[2%] h-[35%] bg-slate-600 "> 
        <div className="string1"></div>
        <div className="string2"></div>
        <div className="string3"></div>
        <div className="string4"></div>
        <div className="string5"></div>
        <div className="string6"></div>
      </div>
      <div className="absolute top-[55%] left-[10%] w-[80%] h-[35%] bg-[#E39D34]">
        <div className="string1"></div>
        <div className="string2"></div>
        <div className="string3"></div>
        <div className="string4"></div>
        <div className="string5"></div>
        <div className="string6"></div>

        <div className="relative flex flex-row justify-evenly top-0 w-[100%] h-[100%]">
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
        </div>

        {/* <div className="absolute top-[46.5%] left-[27.5%] w-6 h-6"> 
          <FretMarker></FretMarker>
        </div>
        <div className="absolute top-[46.5%] left-[27.5%] w-6 h-6"> 
          <FretMarker></FretMarker>
        </div> */}
      </div>

    </div>
  );
}
