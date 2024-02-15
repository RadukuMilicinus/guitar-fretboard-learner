export default function Options(){
    return (
        <div className="relative top-[20%] left-[15%] h-[25%] w-[65%] rounded-3xl bg-[#E39D34]">
        <div className="absolute grid grid-cols-2 gap-3 left-[15%] top-[5%] w-[50%] h-[90%] bg-[#E39D34]"> 
          <div className="relative flex justify-center w-[100%] h-[100%] bg-blue-400 rounded-lg">
            <div className="absolute flex items-center justify-center h-[50%] w-full">
              <div className="absolute font-medium text-xl font-roboto">Key</div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-opacity-50 text-black bg-white rounded-lg" onClick={null}>Insert key...</div>
            </div>
          </div>
          {/* Scales */}
          <div className="relative w-[100%] h-[100%] bg-blue-400 rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center h-full w-[50%]">
                <div className="font-medium text-xl font-roboto mx-auto">Scale</div>
              </div>
              <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#039500]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-opacity-50 text-black bg-white rounded-lg" onClick={null}>Choose scale...</div>
            </div>
          </div>
          {/* Chords */}
          <div className="relative w-[100%] h-[100%] bg-blue-400 rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center h-full w-[50%]">
                <div className="font-medium text-xl font-roboto mx-auto">Chord</div>
              </div>
              <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#039500]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-opacity-50 text-black bg-white rounded-lg" onClick={null}>Choose chord...</div>
            </div>
          </div>
          {/* Arpeggios */}
          <div className="relative w-[100%] h-[100%] bg-blue-400 rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center h-full w-[50%]">
                <div className="font-medium text-xl font-roboto mx-auto">Arpeggio</div>
              </div>
              <div className="absolute left-[50%] top-0 h-[100%] w-[50%]">
                <div className="relative top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-black"></div>
                <div className="absolute top-[15%] left-[20%] w-[30%] h-[70%] rounded-full bg-[#039500]"></div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-opacity-50 text-black bg-white rounded-lg" onClick={null}>Choose arpeggio...</div>
            </div>
          </div>
        </div> 
      </div>
    );
}