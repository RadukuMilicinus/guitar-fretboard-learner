'use client'
import Image from "next/image";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  dropdown
} from "@nextui-org/react";
import Key from "./Options";
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import React, { useState , useEffect, useRef} from 'react';
import {Scale, Interval, Note, Chord, transpose} from "tonal";
import About from './about/page';
import {Howl, Howler} from 'howler';
import './styles.css'
// import './globals.css'
// import {SampleLibrary} from '../../tonejs-instruments/Tonejs-Instruments';

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

export function Dot(){
  return (
    <div className="absolute left-[70%] top-1/2 transform -translate-y-1/2 w- h-3 rounded-full bg-red-600 border-black border-2"></div>
  );
}

export function Intervals(items){

  const [color, setColor] = useState("bg-[727777]")

  useEffect(() => {
    // This function will be called every time `switchVal` changes.
    if (!items.switchVal) {
      setColor("bg-[#727777]");
    }
  }, [items.switchVal]); // Dependency array, ensures effect runs only if switchVal changes.

  const changeState = () => {
    if ( color === "bg-blue-700" ){
      setColor("bg-[#727777]")
    } else {
      setColor("bg-blue-700")
    }
  }

  const notes = ['Ab/G#', 'A', 'Bb/A#', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G']

  useEffect(() => {
    if(!items.switchVal){
      setColor("bg-[#727777]")
    }
  }, [items.switchVal])

  return (
    <div className="relative flex basis-1/12 flex-row items-center h-full w-[1/4]">
      <div className="flex break-words justify-center items-center relative basis-3/5 h-full text-xs lg:max-xl:text-sm xl:max-2xl:text-lg 2xl:text-base text-black intervalNames font-medium">{items.text}</div>
      <div className="relative basis-2/5 h-full flex justify-center items-center" onClick={() => 
                                                                                          {
                                                                                            if(items.switchVal === true){
                                                                                              changeState(); 
                                                                                              items.setInterv();
                                                                                           } 
                                                                                          }}>
        {color === "bg-blue-700" && items.switchVal ?
          <div className="relative rounded-full w-3 h-3 xl:w-4 xl:h-4 bg-blue-700"></div>
          :
          <React.Fragment>
            <div className="absolute justify-center items-center w-3 h-3 xl:w-4 xl:h-4 checkBox  bg-[#727777] rounded-full z-0"></div>
            <div className="absolute justify-center items-center w-2 h-2 xl:w-3 xl:h-3 innerCheckBox bg-[#3D3D3D] rounded-full z-1"></div>
          </React.Fragment>
        }
      </div>
    </div>
  );
}

export function Switch(items){
  // Determine the classes for left position
  const leftClass = items.switchVal ? 'left-[45%]': 'left-[5%]';
  // Determine the classes for background color
  const bgColorClass = items.switchVal ? 'bg-blue-700' : 'bg-[#cb2a2a]';

  return (
    <div className={`absolute top-[10%] w-[50%] max-h-[80%] h-[80%] rounded-full ${leftClass} ${bgColorClass} z-2`} 
         onClick={items.changeSwitch}>
    </div>
  );
}



export function Intervs(items){

    const [switchVal, setSwitchVal] = useState(false);

    const changeSwitch = () => {
      setSwitchVal(!switchVal);
      items.defaultIntervs();
      console.log("Switch value has been changed to", switchVal);
    }

    useEffect(() => {
      if(items.scale.length != '' || items.chord != ''){
        items.defaultIntervs();
        setSwitchVal(false)
      }
    }, [items.scale, items.chord])

    return (
        <div className="absolute top-[5%] left-[75%] w-[20%] h-[90%] bg-[#3D3D3D] z-1">
            <div className="relative flex flex-row items-center justify-center top-0 left-0 h-[30%] w-[100%] bg-[#3D3D3D] z-2">
              <div className="flex items-center h-full w-[70%] basis-1/2">
                <div className="text-lg lg:text-xl  xl:text-2xl  2xl:text-3xl titles font-semibold font-roboto mx-auto text-black">Intervals</div>
              </div>
              <div className="flex basis-1/2 left-[50%] items-center justify-center top-0 h-[100%] w-[50%]">
                <div className="relative w-[70%] lg:w-[50%] h-[40%] rounded-full bg-black z-0" onClick={() => changeSwitch()}>
                  <Switch switchVal={switchVal} changeSwitch={changeSwitch}></Switch>
                </div>
                {/* <div className="absolute top-[15%] left-[20%] w-[30%] h-[60%] rounded-full bg-[#cb2a2a]"></div> */}
              </div>
            </div>
            <div className="relative grid grid-cols-3 top-[0%] left-0 h-[70%] w-full bg-[#3D3D3D] z-2">
              {/* here ch intervals is a function and changes the intervals in the Home function */} 
              <Intervals text="Root" switchVal={switchVal} setInterv={() => {items.chIntervals(0); console.log("root interval chosen")}} key={items.key}></Intervals>             
              <Intervals text="3" switchVal={switchVal}  setInterv={() => {items.chIntervals(4); console.log("3rd interval chosen")}} key={items.key} ></Intervals>
              <Intervals text="#5/b6" switchVal={switchVal} setInterv={() => {items.chIntervals(8); console.log("#5/b6 chosen")}} key={items.key} ></Intervals>
              <Intervals text="b2" switchVal={switchVal} setInterv={() => {items.chIntervals(1); console.log("b2 chosen")}} key={items.key} ></Intervals>
              <Intervals text="4" switchVal={switchVal} setInterv={() => {items.chIntervals(5); console.log("4 chosen")}} key={items.key} ></Intervals>
              <Intervals text="6" switchVal={switchVal} setInterv={() => {items.chIntervals(9); console.log("6 chosen")}} key={items.key} ></Intervals>
              <Intervals text="2" switchVal={switchVal} setInterv={() => {items.chIntervals(2); console.log("2 chosen")}} key={items.key} ></Intervals>
              <Intervals text="#4/b5" switchVal={switchVal} setInterv={() => {items.chIntervals(6); console.log("#4/b5 chosen")}} key={items.key} ></Intervals>
              <Intervals text="b7" switchVal={switchVal} setInterv={() => {items.chIntervals(10); console.log("b7 chosen")}} key={items.key} > </Intervals>
              <Intervals text="b3" switchVal={switchVal} setInterv={() => {items.chIntervals(3); console.log("b3 chosen")}} key={items.key}  ></Intervals>
              <Intervals text="5" switchVal={switchVal} setInterv={() => {items.chIntervals(7); console.log("5 chosen")}} key={items.key} ></Intervals>
              <Intervals text="7" switchVal={switchVal} setInterv={() => {items.chIntervals(11); console.log("7 chosen")}} key={items.key}></Intervals>
            </div>
          


          </div>
    );
}

export function ChordsDropdown() {

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="text-black">
          Chords
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function Instrument({instrName, onChange, isActive}) {
  // Determine the background color based on whether the instrument is active
  const bgColor = isActive ? "bg-blue-700" : "bg-[#727777]";

  return (
        <div className="relative flex basis-1/3 items-center justify-center w-[100%] h-[100%]" onClick={onChange}>
          {
            instrName === "Guitar" ?
            <div className={`absolute flex w-[100%] items-center justify-center rounded-l-md h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xs md:text-sm lg:text-md subtitles font-bold text-black">
                {instrName}
              </div>
            </div> 
              :
            instrName === "Piano" ?
            <div className={`absolute flex w-[100%] items-center justify-center rounded-r-md h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xs md:text-sm lg:text-md subtitles font-bold text-black">
                {instrName}
              </div>
            </div> 
              :
            <div className={`absolute flex w-[100%] items-center justify-center h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xs md:text-sm lg:text-md subtitles font-bold text-black">
                {instrName}
              </div>
            </div> 
          }
          
        </div>
  );
}


export function DropdownChord(items){


  const chordNames = ['Major', 'Minor', 'Diminished', 'Augmented', 'Major 7', 'Minor 7', 'Sus 2', 'Sus4']

  return (
   <div className="absolute top-0 left-0 flex flex-col w-full overflow-y-scroll no-scrollbar h-[500%] z-50 bg-[#727777]"> {/* Set a fixed maximum height */}
      {chordNames.map((chord, index) => (
          <div key={index} className="relative flex justify-center align-middle items-center w-full max-h-[20%] min-h-[20%] font-medium text-opacity-70 text-black text-sm hover:bg-gray-200 cursor-pointer z-auto" onClick={() => items.setPressedChord(index)}>
            {chord}
          </div> 
      ))}
    </div>
  );
}

export function DropdownScale(items){


  const scaleNames = ['Major Pentatonic', 'Minor Pentatonic', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'Harmonic Minor']

  return (
   <div className="absolute top-0 left-0 flex flex-col w-full overflow-y-scroll no-scrollbar h-[500%] z-50 bg-[#727777]"> {/* Set a fixed maximum height */}
      {scaleNames.map((chord, index) => (
          <div key={index} className="relative flex justify-center align-middle items-center w-full max-h-[20%] min-h-[20%] text-opacity-70 text-black text-sm hover:bg-gray-200 cursor-pointer z-auto" onClick={() => items.setPressedScale(index)}>
            {chord}
          </div> 
      ))}
    </div>
  );
}

export function DropdownTuning(items){

  const tunings = ['E standard', 'D standard', 'C standard', 'Drop D', 'Drop C']

  return (
   <div className="absolute top-0 left-0 flex flex-col w-full overflow-y-scroll no-scrollbar h-[500%] z-50 bg-[#727777]"> {/* Set a fixed maximum height */}
      {tunings.map((tuning, index) => (
          <div key={index} className="relative flex justify-center align-middle items-center w-full max-h-[20%] min-h-[20%] text-opacity-70 text-black text-sm lg:text-base hover:bg-gray-200 cursor-pointer z-auto" onClick={() => {items.setPressedTuning(index); items.setTuning(tuning)}}>
            {tuning}
          </div> 
      ))}
    </div>
  );
}

//////////////////////////////
// Used in Options
///////////////////////////////
export function GridChordScale(items){



    //////////////////////////////////////
    //          Chord dropdown          //                        
    //////////////////////////////////////
    
    const [dropDownChord, setDropDown] = useState(false);

    const changeDropDownChord = () => {
      setDropDown(!dropDownChord)
    }
    
    const [dropDownScale, setDropDownScale] = useState(false);

    const changeDropDownScale = () => {
      setDropDownScale(!dropDownScale)
    }

    const chordNames = ['Major', 'Minor', 'Diminished', 'Augmented', 'Major 7', 'Minor 7', 'Sus 2', 'Sus 4']
    const [indexChordPressed, setIndexChordPressed] = useState(-1);
    const [indexScalePressed, setIndexScalePressed] = useState(-1);

    const setChordPressed = (index) => {
      console.log("============== START SET CHORD PRESSED =============== ")
      // console.log("chord %s has been chosen with index %d", chordNames[index], index);
      setIndexChordPressed(index);
      console.log("chord %s WITH INDEX %d has been chosen", chordNames[index], indexChordPressed);
      items.changeChordType(chordNames[index]) // this changes chord and passes this value to parent
      if(dropDownScale === true){
        changeDropDownScale()
      }
      setIndexScalePressed(-1);
      items.changeScaleType('')
      console.log("chord has been chosen and scale set to ''")
      console.log("=========== END SET CHORD PRESSED =================== ")
    }
    
    //////////////////////////////////////
    //          Scale dropdown          //                        
    //////////////////////////////////////

    
    const scaleNames = ['Major Pentatonic', 'Minor Pentatonic', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'Harmonic Minor']

    const setScalePressed = (index) => {
      console.log("============== START SET SCALE PRESSED ========= ")
      // console.log("scale %s has been chosen with index %d", scaleNames[index], index);
      setIndexScalePressed(index);
      console.log("scale %s WITH INDEX %d has been chosen", scaleNames[index], indexScalePressed);
      items.changeScaleType(scaleNames[index])
      if(dropDownChord === true){
        changeDropDownChord()
      }
      
      setIndexChordPressed(-1)
      items.changeChordType('')

      console.log("scale has been chosen and chord set to ''")
      console.log("=========== END SET SCALE PRESSED ========= ")
    }

    //////////////////////////////////////
    //          Tuning dropdown         //                        
    //////////////////////////////////////

    const [dropDownTuning, setDropDownTuning] = useState(false);

    const changeDropDownTuning = () => {
      setDropDownTuning(!dropDownTuning)
    }
    
    const tunings = ['E standard', 'D standard', 'C standard', 'Drop D', 'Drop A - 7 string', 'B standard - 7 string']
    const [indexTuningPressed, setIndexTuningPressed] = useState(-1);

    const setTuningPressed = (index) => {
      console.log("tuning %s has been chosen with index %d", tunings[index], index);
      setIndexTuningPressed(index);
      items.setTuning(tunings[index])
      console.log("tuning %s WITH INDEX %d has been chosen", tunings[index], indexTuningPressed);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // State to hold the name of the currently active instrument
    const [activeInstrument, setActiveInstrument] = useState("");

    // Function to handle instrument selection
    const handleInstrumentChange = (instrumentName) => {
      if (activeInstrument === instrumentName) {
        // If the same instrument is clicked again, toggle it off
        setActiveInstrument("");
      } else {
        // Set the new active instrument
        setActiveInstrument(instrumentName);
      }
    };

  useEffect(() => {
    console.log("Scale chosen has changed in GridChordScale horizontal layout")
    for(var i = 0; i < scaleNames.length ; i++){
      if(items.scaleChosen === scaleNames[i]){
        setIndexScalePressed(i)
        setIndexChordPressed(-1)
      }
    }
    console.log("Scale chosen has changed in GridChordScale horizontal layout")
  }, [items.scaleChosen])
  
  useEffect(() => {
    for(var i = 0; i < chordNames.length ; i++){
      if(items.chordChosen === chordNames[i]){
        setIndexChordPressed(i)
        setIndexScalePressed(-1)
      }
    }
    console.log("Chord chosen has changed in GridChordScale horizontal layout")
  }, [items.chordChosen])
  
  useEffect(() => {
    for(var i = 0; i < tunings.length ; i++){
      if(items.tuning === tunings[i]){
        setIndexTuningPressed(i)
      }
    }
    console.log("Tuning chosen has changed in GridChordScale horizontal layout")
  }, [items.tuning])


  ///////////////////////////////////////////////////////
  //          SET CHORD 
  //

  return (
     <div className="relative grid grid-cols-2 gap-[10%] left-0 top-[5%] h-[90%] bg-[#3D3D3D]"> 
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full">
              <div className="flex relative text-xl lg:max-2xl:text-xl 2xl:text-2xl titles items-center justify-center font-semibold font-roboto w-[100%] text-black">Chord</div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%] z-2">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-xl text-center flex justify-center items-center text-opacity-70 font-medium text-black bg-[#727777] rounded-lg" onClick={() => {changeDropDownChord()}}>
                { dropDownChord ? 
                  (
                    <DropdownChord setPressedChord={setChordPressed} />
                  ) : indexChordPressed > -1 ? 
                  
                  (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-base lg:text-lg subtitles  bg-[#727777] rounded-lg">
                      {chordNames[indexChordPressed]}
                    </div>
                  ) : (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-sm lg:text-base subtitles bg-[#727777] rounded-lg">
                      Select a chord...
                    </div>
                )}
              </div>
              {/* <ChordsDropdown></ChordsDropdown> */}
            </div>
          </div>
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full z-0">
              <div className="flex relative text-xl lg:max-2xl:text-xl 2xl:text-2xl titles items-center justify-center font-semibold font-roboto w-[100%] text-black">Scale</div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%] z-2">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-xl flex items-center justify-center text-opacity-70 font-medium  text-black bg-[#727777] rounded-lg" onClick={() => {changeDropDownScale()}}>
                { dropDownScale ? 
                  (
                    <DropdownScale setPressedScale={setScalePressed} />
                  ) : indexScalePressed > -1 ? 

                  (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-sm lg:text-base subtitles bg-[#727777] rounded-lg overflow-hidden">
                      {scaleNames[indexScalePressed]}
                    </div>
                  ) : (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-sm lg:text-base subtitles bg-[#727777] rounded-lg overflow-hidden">
                      Choose scale...
                    </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full z-0">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-xl lg:max-2xl:text-xl 2xl:text-2xl titles font-semibold font-roboto mx-auto text-black">Tuning</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="flex relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-sm lg:text-base titles justify-center items-center font-medium text-opacity-70 text-black bg-[#727777] rounded-lg" onClick={() => {changeDropDownTuning()}}>
                { dropDownTuning ? 
                  (
                    <DropdownTuning setPressedTuning={setTuningPressed} setTuning={items.setTuning} />
                  ) : indexTuningPressed > -1 ? 
                  
                  (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-sm lg:text-base subtitles bg-[#727777] rounded-lg">
                      {tunings[indexTuningPressed]}
                    </div>
                  ) : (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-sm lg:text-base subtitles bg-[#727777] rounded-lg overflow-hidden">
                      Choose tuning...
                    </div>
                )}

              </div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-xl lg:max-2xl:text-xl 2xl:text-2xl titles font-semibold font-roboto mx-auto text-black">Instrument</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="relative flex w-[100%] justify-evenly flex-row left-0 top-0 h-full bg-[#727777] rounded-md">
                <Instrument instrName="Guitar" onChange={() => handleInstrumentChange("Guitar")} isActive={activeInstrument === "Guitar"} />
                <div className="w-[2%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
                <Instrument instrName="Bass" onChange={() => handleInstrumentChange("Bass")} isActive={activeInstrument === "Bass"} />
                {/* <div className="flex basis-1/3 h-[100%] items-center justify-center text-xl font-bold text-black">Bass</div> */}
                <div className="w-[2%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
                <Instrument instrName="Piano" onChange={() => handleInstrumentChange("Piano")} isActive={activeInstrument === "Piano"} />
              </div>
            </div>
          </div> 
  </div> 
  );
}

export function Options(items){

    useEffect(() => {
      console.log("\n\n\nIn Options - chosen scale = " + items.chosenScale + "\n\n\n")
    }, [items.chosenScale])
    
    useEffect(() => {
      console.log("\n\n\nIn Options - chosen chord = " + items.chosenChord + "\n\n\n")
    }, [items.chosenChord])

    useEffect(() => {
      console.log("\n\n\nIn Options - chosen key = " + items.key + "\n\n\n")
    }, [items.key])
    
    useEffect(() => {
      console.log("\n\n\nIn Options - chosen accidental = " + items.accidental + "\n\n\n")
    }, [items.accidental])

    return (
      <div className="absolute invisible md:visible top-[20%] left-[8%] h-[25%] w-[82%] rounded-3xl bg-[#3D3D3D]">
        <div className="absolute grid grid-cols-10 left-0 top-0 h-[100%] w-[100%]">
          <div className="relative col-span-3">
            <Key changeKey={items.change_key} keyChosen={items.keyChosen} accidental={items.accidental} changeAccidental={items.changeAcc} noteRep={items.noteRep} changeNoteRepres={items.changeNoteRep}></Key>
          </div>  
          <div className="relative col-span-4">
            <GridChordScale changeChordType={items.changeChord} chordChosen={items.chosenChord} scaleChosen={items.chosenScale} tuning={items.tuning} changeScaleType={items.changeScale} setTuning={items.changeTuning}></GridChordScale>
          </div>  
          <div className="relative col-span-3"></div>  
        </div>
        <Intervs defaultIntervs={items.defaultIntervs} chIntervals={items.changeIntervals} scale={items.chosenScale} chord={items.chosenChord} key={items.key}> </Intervs>
      </div>
    );
}

function scaleHasNote(scale, note) {
  // console.log("note = %s", note)
  for (let i = 0 ; i < scale.length ; i++){
    // console.log("scale[%d] = ", i, scale[i])
    if( scale[i] === note ){
      return true;
    }
  }
  return false;
}

function getInterval(root, note){

  // G - Ab = 2m
  // G - A =  2M
  // G - Bb = 3m
  // G - B = 3M
  // G - C = 4P
  // G - Db = 5d
  // G - D = 5P
  // G - Eb = 6m
  // G - E = 6M
  // G - F = 7m
  // G - F# = 7M

  var interval = Interval.distance(root, note)

  if(interval.includes("P", 0) || interval.includes("M", 0)){
    interval = interval[0]
  } else if(interval.includes("m", 0)){
    interval = "b" + interval[0]
  } else if(interval.includes("A", 0)){
    interval = "#" + interval[0]
  } else if(interval.includes("d", 0)){
    interval = "b" + interval[0]
  }


  return interval
}


export function String(items){
  
  var sc = items.scale;
  var index = items.index;
  var strNr = items.strNr;
  var key = items.keyChosen;
  var accidental = items.accidental;
  var chord = items.chord;
  var intervs = items.notes;

  var noteRepres = items.note_rep
    
  const fretboardGeneric = [
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'], 
      ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E']
  ];
  
  const dropDfretboard = [
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'], 
      ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D']
  ];

   const DStandardFretboard = [
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['F#/Gb', 'G', 'Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D']
  ];
   
  const CStandardFretboard = [
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['E', 'F', 'F#/Gb', 'G', 'Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb'], 
      ['B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb'], 
      ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C']
  ];

  const dropCfretboard = [
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['F#/Gb', 'G', 'Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C']
  ];
  
  const fretboardPitches = [
      ['F4', 'Fs4/Gb4', 'G4', 'Gs4/Ab5', 'A5', 'As5/Bb', 'B5', 'C5', 'Cs5/Db5', 'D5', 'Ds5/Eb5', 'E5'], 
      ['C4', 'Cs4/Db4', 'D4', 'Ds4/Eb4', 'E4', 'F4', 'Fs4/Gb4', 'G4', 'Gs4/Ab5', 'A5', 'As5/Bb5', 'B5'], 
      ['Ab4', 'A4', 'As4/Bb4', 'B4', 'C4', 'Cs4/Db4', 'D4', 'Ds4/Eb4', 'E4', 'F4', 'Fs4/Gb4', 'G4'], 
      ['Ds3/Eb3', 'E3', 'F3', 'Fs3/Gb3', 'G3', 'Gs3/Ab3', 'A4', 'As4/Bb4', 'B4', 'C4', 'Cs4/Db4', 'D4'], 
      ['As3/Bb3', 'B3', 'C3', 'Cs3/Db3', 'D3', 'Ds3/Eb3', 'E3', 'F3', 'Fs3/Gb3', 'G3', 'Gs3/Ab3', 'A4'], 
      ['F2', 'Fs2/Gb2', 'G2', 'Gs2/Ab2', 'A3', 'As3/Bb3', 'B3', 'C3', 'Cs3/Db3', 'D3', 'Ds3/Eb3', 'E3']
  ];

  const [notesString, setNotesString] = useState(fretboardGeneric[strNr - 1]);

  useEffect(() => {
    if(items.tuning === 'E standard') {
      setNotesString(fretboardGeneric[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'Drop D') {
      setNotesString(dropDfretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'D standard') {
      setNotesString(DStandardFretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'Drop C') {
      setNotesString(dropCfretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'C standard') {
      setNotesString(CStandardFretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
  }, [items.tuning])


  const [scale, chScale] = useState(sc);

  useEffect(() => {
    if(sc.length === 0 && intervs.length === 0){   // check if length of scale is equal to 0, then choose chord
      chScale(chord)
    } else if(intervs.length === 0){
      chScale(sc)
    } else {             // chord is empty
      chScale(intervs)
      // console.log("On string, intervals is now on")
    } 
    // console.log("Scale changed to = %s for string", sc)
  }, [sc, chord, intervs])

  // commenting this allows scale to be changed

  const sounds = items.sounds

  function play (note, strNr){
    var idx = -1
    for(var i = 0; i < fretboardGeneric[strNr - 1].length ; i++){
      if(note === fretboardGeneric[strNr - 1][i]) {
        idx = i
        break
      }
    }

    console.log("Playing note %s NOW", note, "sound = %s", sounds[idx + 1])

    var howler = new Howl({
      src: [sounds[idx + 1]], 
      volume: 1,
    })

    howler.play();
  }

  return (
    <div className="relative top-0 left-0 flex flex-row justify-evenly w-full h-full">
      {
        notesString.map((note, idx) => 
          <div className="relative flex justify-center items-center top-0 left-0 basis-1/12 h-full">
            {idx > 0 && strNr < 6 && <div className="absolute left-[-2px] top-[-25%] h-[250%] w-[6px] bg-slate-500"></div>}
            {strNr === 6 && idx > 0 && <div className="absolute left-[-2px] top-[-25%] h-[140%] w-[6px] bg-slate-500"></div>}
            { 
                note.split("/").length == 1 && scaleHasNote(scale, note) ?
                ( 
                  (items.note_rep === 1) ? 
                  (
                    (note == items.keyChosen) ?
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-green-700 rounded-full z-50" onClick={() => {console.log("%s pressed", note); play(note, strNr)}}>{note}</div>
                    :
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50" onClick={() => {console.log("%s pressed", note); play(note, strNr)}}>{note}</div>
                  ) :
                  (
                    (note == items.keyChosen) ?
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-green-700 rounded-full z-50" onClick={() => {console.log("%s pressed", note); play(note, strNr)}}>{getInterval(items.keyChosen, note)}</div>
                    :
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50" onClick={() => {console.log("%s pressed", note);  play(note, strNr)}}>{getInterval(items.keyChosen, note)}</div>
                  ) 
                ) :
                (scaleHasNote(scale, note.split("/")[0]) || scaleHasNote(scale, note.split("/")[1])) ?
                (
                  scaleHasNote(scale, note.split("/")[0]) ?
                  (

                    (items.note_rep === 1) ? 
                    (
                      (note.split("/")[0] === items.keyChosen + accidental) ?
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-green-700 rounded-full z-50" onClick={() => { play(note, strNr) }} >{note.split("/")[0]}</div>
                        :
                          <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50" onClick={() => { play(note, strNr) }} >{note.split("/")[0]}</div>
                    ) 
                      :
                    (
                      (note.split("/")[0] == items.keyChosen + accidental) ?
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-green-700 rounded-full z-50"  onClick={() => { play(note, strNr) }} >{getInterval(items.keyChosen + accidental, note.split("/")[0])}</div>
                      :
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50" onClick={() => { play(note, strNr) }}  >{getInterval(items.keyChosen + accidental, note.split("/")[0])}</div>
                    ) 
                  ) : 
                  scaleHasNote(scale, note.split("/")[1]) ?
                  (

                    (items.note_rep === 1) ? 
                    (
                      (note.split("/")[1] === items.keyChosen + accidental) ?
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-green-700 rounded-full z-50" onClick={() => { play(note, strNr) }}  >{note.split("/")[1]}</div>
                        :
                          <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50" onClick={() => { play(note, strNr) }}  >{note.split("/")[1]}</div>
                    ) 
                      :
                    (
                      (note.split("/")[1] === items.keyChosen + accidental) ?
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-green-700 rounded-full z-50" onClick={() => { play(note, strNr) }}  >{getInterval(items.keyChosen + accidental, note.split("/")[1])}</div>
                      :
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50" onClick={() => { play(note, strNr) }}  >{getInterval(items.keyChosen + accidental, note.split("/")[1])}</div>
                    )

                  ) :
                    (items.note_rep === 1) ? 
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50 hidden">{note}</div>
                    :
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50 hidden">{getInterval(items.keyChosen, note)}</div>
                )
                  :
                    (items.note_rep === 1) ? 
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50 hidden">{note}</div>
                    :
                      <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] justify-center items-center text-sm lg:text-xl sizeNote font-semibold basis-1/12 bg-blue-700 rounded-full z-50 hidden"> {getInterval(items.keyChosen, note)} </div>
            }
          </div>
        )         
      }
    </div>
  );
}

function changeName(chordType){

  if(chordType == "major 7"){
    return "maj7"
  } else if(chordType == "minor 7"){
    return "min7"
  } else if(chordType == "Sus 2"){
    return "sus2"
  } else if(chordType == "Sus 4"){
    return "sus4"
  } else return chordType
}

export default function Home() {

  const [keyChosen, setKey] = useState("C") // initially set to null 
  const [accidental, setAccidental] = useState("") // initially set to null 
  const [tuning, setTuning] = useState("E standard") // initially set to null 
  const [chordType, setChord] = useState("major") // initially set to null 
  const [scale, setScale] = useState("") // initially set to null 
  const [noteRep, setNoteRep] = useState(1);
  const [intervals, setIntervals] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
  const notes = ['Ab/G#', 'A', 'Bb/A#', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G']
  const [chosenNotes, setChosenNotes] = useState([])
  const intervalChoiceRef = useRef(null); 
  const [intervOn, setIntervs] = useState(false);

  var lowE = ['samples/samples/guitar-acoustic/E2.mp3', 'samples/samples/guitar-acoustic/F2.mp3', 'samples/samples/guitar-acoustic/Fs2.mp3', 'samples/samples/guitar-acoustic/G2.mp3', 'samples/samples/guitar-acoustic/Gs2.mp3',
          'samples/samples/guitar-acoustic/A3.mp3','samples/samples/guitar-acoustic/As3.mp3', 'samples/samples/guitar-acoustic/B3.mp3', 'samples/samples/guitar-acoustic/C3.mp3', 'samples/samples/guitar-acoustic/Cs2.mp3',
          'samples/samples/guitar-acoustic/D3.mp3', 'samples/samples/guitar-acoustic/Ds3.mp3', 'samples/samples/guitar-acoustic/E3.mp3']
  
  var Astring = ['samples/samples/guitar-acoustic/A3.mp3', 'samples/samples/guitar-acoustic/As3.mp3', 'samples/samples/guitar-acoustic/B3.mp3', 'samples/samples/guitar-acoustic/C3.mp3', 'samples/samples/guitar-acoustic/Cs3.mp3',
          'samples/samples/guitar-acoustic/D3.mp3','samples/samples/guitar-acoustic/Ds3.mp3', 'samples/samples/guitar-acoustic/E3.mp3', 'samples/samples/guitar-acoustic/F3.mp3', 'samples/samples/guitar-acoustic/Fs3.mp3',
          'samples/samples/guitar-acoustic/G3.mp3', 'samples/samples/guitar-nylon/Gs3.mp3', 'samples/samples/guitar-nylon/A4.mp3']
  
  var Dstring = ['samples/samples/guitar-acoustic/D3.mp3', 'samples/samples/guitar-acoustic/Ds3.mp3', 'samples/samples/guitar-acoustic/E3.mp3', 'samples/samples/guitar-acoustic/F3.mp3', 'samples/samples/guitar-acoustic/Fs3.mp3',
          'samples/samples/guitar-acoustic/G3.mp3','samples/samples/guitar-acoustic/Gs3.mp3', 'samples/samples/guitar-acoustic/A4.mp3', 'samples/samples/guitar-acoustic/As4.mp3', 'samples/samples/guitar-acoustic/B4.mp3',
          'samples/samples/guitar-acoustic/C4.mp3', 'samples/samples/guitar-nylon/Cs4.mp3', 'samples/samples/guitar-acoustic/D4.mp3']
  
  var Gstring = ['samples/samples/guitar-acoustic/G3.mp3', 'samples/samples/guitar-acoustic/Gs3.mp3', 'samples/samples/guitar-acoustic/A4.mp3', 'samples/samples/guitar-acoustic/As4.mp3', 'samples/samples/guitar-acoustic/B4.mp3',
          'samples/samples/guitar-acoustic/C4.mp3','samples/samples/guitar-acoustic/Cs4.mp3', 'samples/samples/guitar-acoustic/D4.mp3', 'samples/samples/guitar-acoustic/Ds4.mp3', 'samples/samples/guitar-acoustic/E4.mp3',
          'samples/samples/guitar-acoustic/F4.mp3', 'samples/samples/guitar-nylon/Fs4.mp3', 'samples/samples/guitar-nylon/G4.mp3']
  
  var Bstring = ['samples/samples/guitar-acoustic/B4.mp3', 'samples/samples/guitar-acoustic/C4.mp3', 'samples/samples/guitar-acoustic/Cs4.mp3', 'samples/samples/guitar-acoustic/D4.mp3', 'samples/samples/guitar-acoustic/Ds4.mp3',
          'samples/samples/guitar-acoustic/E4.mp3','samples/samples/guitar-acoustic/F4.mp3', 'samples/samples/guitar-acoustic/Fs4.mp3', 'samples/samples/guitar-acoustic/G4.mp3', 'samples/samples/guitar-acoustic/Gs4.mp3',
          'samples/samples/guitar-acoustic/A5.mp3', 'samples/samples/guitar-nylon/As5.mp3', 'samples/samples/guitar-acoustic/B5.mp3']
  
  var highE = ['samples/samples/guitar-acoustic/E4.mp3', 'samples/samples/guitar-acoustic/F4.mp3', 'samples/samples/guitar-acoustic/Fs4.mp3', 'samples/samples/guitar-acoustic/G4.mp3', 'samples/samples/guitar-acoustic/Gs4.mp3',
          'samples/samples/guitar-nylon/A5.mp3','samples/samples/guitar-nylon/As5.mp3', 'samples/samples/guitar-acoustic/B5.mp3', 'samples/samples/guitar-acoustic/C5.mp3', 'samples/samples/guitar-acoustic/Cs5.mp3',
          'samples/samples/guitar-acoustic/D5.mp3', 'samples/samples/guitar-electric/Ds5.mp3', 'samples/samples/guitar-nylon/E5.mp3'] 

  const highEsounds = new Howl({
    src: ['samples/samples/guitar-acoustic/A2.mp3']
  });

  const changeKey = (keyName) => {
    setKey(keyName)
    console.log("Key = %s", keyName)
  }
  
  const changeAccidental = (accidental) => {
    setAccidental(accidental)
    console.log("Accidental = %s", accidental)
  }

  const changeTuning = (newTuning) => {
    setTuning(newTuning)
  }
  
  const changeChord = (newChord) => {
    setChord(newChord)
    // setScale('')
    console.log("chord type set to %s", chordType)
  }
  
  const changeScale = (newScale) => {
    setScale(newScale)
  }

  const changeNoteRep = (nr) => {
    // if note rep = 0 => intervals, else note names
    setNoteRep(nr)
    if(nr === 0) console.log('note representation changed to intervals')
    else console.log('note representation changed to note names')
  }

  const setIntervsToFalse = () => {
    const intervs = [false, false, false, false, false, false, false, false, false, false, false, false]
    setIntervals(intervs)
    // console.log("Intervals are now = %s", intervs)
    intervs.forEach((elem) => {
      console.log(elem)
    })
    setChosenNotes([])
    console.log("Chosen notes are now =")
    chosenNotes.forEach((elem) => {
      console.log(elem)
    })
  }

  const changeIntervsAndSetNotes = (index) => {
    console.log("Change intervs and set notes called")
    const newIntervs = [...intervals];
    newIntervs[index] = !newIntervs[index];

    const chosenNotesCpy = [...chosenNotes]
    // based on key append or remove note
    if(newIntervs[index] === false){
      var idx = 0
      
      // if the interval has been set to false, then remove that note from chosenNotes
      // calculate what degree the note is and remove it
      
      var intervName = Interval.fromSemitones(index)
      var newNote = transpose(keyChosen, intervName)
      for(var i = 0; i < chosenNotes.length ; i++){
        if(newNote == chosenNotes[i]) {
          idx = i
          break
        }
      }
      chosenNotesCpy.splice(idx, 1)
    } else {
      var intervName = Interval.fromSemitones(index)
      var newNote = transpose(keyChosen, intervName)
      chosenNotesCpy.push(newNote)
    }

    changeScale('')
    changeChord('')

    setIntervals(newIntervs);
    setChosenNotes(chosenNotesCpy);
    // console.log("Chosen notes are: %s", chosenNotesCpy);
  };

  useEffect(() => {
    // console.log("Chord type in Home updated to:", chordType);
  }, [chordType]);

  useEffect(() => {
    // console.log("Scale type in Home updated to:", scale);
  }, [scale]);

  function isInScaleOrChordOrInterval(note, chosenNotes, keyChosen, accidental, scale, chordType) {
    console.log("checking if is in scale or chord or interval %s", note);
    console.log("Note is = " + note + ", chosenNotes = " + chosenNotes + ", keyChosen " + keyChosen + accidental + ", scale = " + scale + ", chordType = " + chordType);

    if (chosenNotes.length > 0) {
      // console.log("chosenNotes = " + chosenNotes);
      return chosenNotes.some((chosenNote) => {
        // console.log(note + " is from the scale");
        if (note === chosenNote) {
          // console.log(note + " is from the chosen notes");
          return true;
        }
        return false;
      });
    } else if (scale !== '') {
      const sc = Scale.get(keyChosen + accidental + " " + scale.toLowerCase()).notes;
      // console.log("scale = " + sc);
      return sc.some((scNote) => {
        // console.log("Looking in scale");
        if (scNote === note) {
          // console.log(note + " is from the scale");
          return true;
        }
        return false;
      });
    } else if (chordType !== '') {
      const ch = Chord.get(keyChosen + accidental + " " + chordType.toLowerCase()).notes;
      // console.log("chord = " + ch);
      return ch.some((chNote) => {
        // console.log("Looking in chord");
        if (chNote === note) {
          // console.log(note + " is from the chord");
          return true;
        }
        return false;
      });
    }
    return false;
  }

  function play (note){

    var sounds = []    
    if(note === 'highE') sounds.push(highE[0])
    else if(note === 'B') sounds.push(Bstring[0])
    else if(note === 'G') sounds.push(Gstring[0])
    else if(note === 'D') sounds.push(Dstring[0])
    else if(note === 'A') sounds.push(Astring[0])
    else if(note === 'E') sounds.push(lowE[0])

    var howler = new Howl({
      src: [sounds[0]], 
      volume: 1,
    })

    howler.play();
  }

  const [bgBlur, setBlur] = useState(false);

  function chBlur(){
    setBlur(!bgBlur)
    console.log("blur value after being changed = " + bgBlur)
  }

  const [keyChanging, setKeyChanging] = useState(false);

  function changingKeyStatus() {
    setKeyChanging(!keyChanging);
  }

  function KeyChoice() {
    return (
      <div className="fixed left-[15%] top-[35%] w-[70%] h-[40%] grid grid-cols-4 bg-[#713D6F] z-50 rounded-2xl">
        <div className="hover:bg-green-600 flex items-center justify-center text-2xl font-semibold rounded-tl-2xl" onClick={() => {setKey('A'); setKeyChanging(false); setAccidental("")}}>A</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('A#'); setKeyChanging(false); setAccidental("#")}}>A#</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('B'); setKeyChanging(false); setAccidental("")}}>B</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold rounded-tr-2xl" onClick={() => {setKey('C'); setKeyChanging(false); setAccidental("")}}>C</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('C#'); changingKeyStatus(); setAccidental("#")}}>C#</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('D'); changingKeyStatus(); setAccidental("")}}>D</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('D#'); changingKeyStatus(); setAccidental("#")}}>D#</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('E'); changingKeyStatus(); setAccidental("")}}>E</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold rounded-bl-2xl" onClick={() => {setKey('F'); changingKeyStatus(); setAccidental("")}}>F</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('F#'); changingKeyStatus(); setAccidental("#")}}>F#</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold" onClick={() => {setKey('G'); changingKeyStatus(); setAccidental("")}}>G</div>
        <div className="hover:bg-green-600  flex items-center justify-center text-2xl font-semibold rounded-br-2xl" onClick={() => {setKey('G#'); changingKeyStatus(); setAccidental("#")}}>G#</div>
      </div>
    );
  }
  
  const scaleNames = ['Major Pentatonic', 'Minor Pentatonic', 'Blues scale', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 
    'Mixolydian', 'Aeolian', 'Locrian', 'Harmonic Minor', 'Locrian Nat. 6', 'Ionian #5', 'Dorian #11', 'Phrygian Dominant', 'Lydian #2', 'Super Locrian bb7']

  const [scaleChanging, setScaleChanging] = useState(false);

  function changingScaleStatus() {
    setScaleChanging(!scaleChanging);
    console.log("Scale changing status changed to " + scaleChanging + ",chord changing = " + chordChanging + ",keyChanging = " + keyChanging);
  }

  const [chosenScale, setChosenScale] = useState('Major Pentatonic')

  // function changeScale(scaleName){
  //   setChosenScale(scaleName)
  // }

  function changeScale1(newScale){
    setChosenScale(newScale)
    console.log("Scale now set to = " + chosenScale)
  }

  function ScaleChoice() {
    return (
      <div className="fixed top-[35%] left-[0%] w-[100%] h-[40%] grid grid-cols-3 bg-[#713D6F] z-51 overflow-hidden">
        {
          scaleNames.map((scaleName) => {
            return (
              <div className="hover:bg-green-600 flex items-center justify-center text-sm text-black font-semibold rounded-2xl" onClick={() => {changeScale1(scaleName); changeScale(scaleName); setScale(scaleName);  setScaleChanging(false); console.log("Scale changing now set to false"); setChord('Choose chord..')}}>
                {scaleName}
              </div>
              )
          })
        }
      </div>
    );
  }
  
  const chordNames = ['Major', 'Minor', 'Sus2', 'Sus4', 'Diminished', 'Augmented', 'Major 7', 
    'Minor 7', 'Minor 7b5', 'Dominant 7', 'Major 9', 'Major 11', 'Major 13', 'Minor 9', 'Minor 11', 'Minor 13', '']

  const [chordChanging, setChordChanging] = useState(false);

  function changingChordStatus() {
    setChordChanging(!chordChanging);
  }

  const [chosenChord, setChosenChord] = useState('Major')

  // function changeScale(scaleName){
  //   setChosenScale(scaleName)
  // }



  function ChordChoice() {
    return (
      <div className="fixed top-[35%] left-[0%] w-[100%] h-[40%] grid grid-cols-3 bg-[#713D6F] z-51 overflow-hidden">
        {
          chordNames.map((chordName) => {
            return (
              <div className="hover:bg-green-600 flex items-center justify-center text-sm text-black font-semibold rounded-2xl" onClick={() => {changeChord(chordName); setChord(chordName); setChordChanging(false); console.log("Chord changing now set to false"); setScale('Choose scale..')}}>
                {chordName}
              </div>
              )
          })
        }
      </div>
    );
  }

  useEffect(() => {
    console.log("Scale changing set to " + scaleChanging);
  }, [scaleChanging])

  useEffect(() => {
    console.log("Chord changing set to " + chordChanging);
  }, [chordChanging])
  
  useEffect(() => {
    console.log("Key changing set to " + keyChanging);
  }, [keyChanging])

  useEffect(() => {
    console.log("Key chosen in Home is = " + keyChosen)
  }, [keyChosen])

  // when chosenScale is changed, scale (landscape mode is also changed)
  useEffect(() => {
    setScale(chosenScale);
    console.log("\n\nIn HOME scale set to ==" + chosenScale + "\n\n")
  }, [chosenScale])
  
  useEffect(() => {
    setChord(chosenChord);
    console.log("\n\nIn HOME chord set to ==" + chosenChord + "\n\n")
  }, [chosenChord])



  const [intervalChanging, setIntervalChanging] = useState(false);
  var intervalsChoices = ['1', 'b2', '2', 'b3', '3', '4', '#4/b5', '5', '#5/b6', '6', 'b7', '7']

  useEffect(() => {
    if (intervalChanging) {
      const handleClickOutside = (event) => {
        if (intervalChoiceRef.current && !intervalChoiceRef.current.contains(event.target)) {
          console.log("Interval changing set to false");
          setIntervalChanging(false);
          setIntervs(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [intervalChanging]);

  function IntervalChoice(items) {
   
    return (
      <div ref={intervalChoiceRef} className={`fixed top-[35%] left-[0%] w-[100%] h-[40%] grid grid-cols-3 bg-[#713D6F] z-51 overflow-hidden`}>
        {
          intervalsChoices.map((intervalName, idx) => {
            return (
              <div className={`hover:bg-green-700 flex items-center justify-center text-sm text-black font-semibold rounded-xl ${intervals[idx] === true ? 'bg-green-700' : 'bg-[#713D6F]'}`} onClick={() => {console.log("Scale changing now set to false"); changeIntervsAndSetNotes(idx)}}>
                {intervalName}
              </div>
              )
          })
        }
      </div>
    );
  }

  const [tuningChanging, setTuningChanging] = useState(false);
  var tunings = ['E standard', 'D standard', 'C standard', 'Drop C', 'Drop D', 'B standard', 'A standard']

   function TuningChoice() {
    return (
      <div className="fixed top-[35%] left-[0%] w-[100%] h-[40%] grid grid-cols-3 bg-[#713D6F] z-51 overflow-hidden">
        {
          tunings.map((tuning) => {
            return (
              <div className="hover:bg-green-600 flex flex-col items-center justify-center text-sm text-black font-semibold" onClick={() => {setTuning(tuning); setTuningChanging(false); console.log("Tuning changing now set to false from tuning choice"); }}>
                {tuning}
              </div>
              )
          })
        }
      </div>
    );
  }

  function AboutBar() {

    const router = useRouter()

    return (
      <div className="absolute flex flex-row left-[70%] w-[30%] top-[1%] h-[6%] md:top-[1%] md:left-[80%] md:w-[20%] lg:left-[82%] lg:w-[18%] bg-[#3D3D3D] z-1 rounded-l-2xl">
        <div className="relative h-[100%] w-[100%] hover:bg-[#727272] hover:rounded-l-2xl flex top-0 basis-1/2 justify-center items-center text-[#929292] text-xs md:text-sm font-bold lg:text-md xl:text-xl 2xl:text-2xl md:font-semibold" onClick={() => {console.log("BACK HOME!"); router.push('/')}}>
          {/* HOME */}
          HOME
        </div>
        {/* <div className="relative top-0 w-[10px] bg-[#3D3D3D] h-[100%] z-2"></div> */}
        <div className="relative flex h-[100%] w-[100%] hover:bg-[#727272] top-0 basis-1/2 justify-center items-center text-[#929292] text-xs font-bold md:text-sm lg:text-md xl:text-xl 2xl:text-2xl md:font-semibold" onClick={() => {console.log("Now should be in the about route"); router.push('/about')}}>
          {/* ABOUT */}
          ABOUT
        </div>
        {/* <div className="relative top-0 basis-1/3 justify-center items-center flex flex-row gap-1 2xl:gap-0">
          <div className="flex flex-col relative basis-2/5 justify-center items-center">
            <img src="./Instaguramo.png" alt="Instagram" className="max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]"/>
          </div>
          <div className="flex flex-col relative basis-2/5 justify-center items-center">
            <img src="./RinkedIn.png" alt="LinkedIn" className="max-w-[30px] max-h-[30px] md:max-w-[40px] md:max-h-[40px]"/>
          </div>
        </div> */}
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 h-full w-full bg-[#2D2D2D]">
      {/* Below renders on < 768px wide */}
      {keyChanging === true ? <KeyChoice></KeyChoice> : <div></div>}
      {scaleChanging === true ? <ScaleChoice></ScaleChoice> : <div></div>}
      {chordChanging === true ? <ChordChoice></ChordChoice> : <div></div>}
      {intervalChanging === true ? <IntervalChoice></IntervalChoice> : <div></div>}
      {tuningChanging === true ? <TuningChoice></TuningChoice> : <div></div>}
      <Fretboard2 blur={bgBlur} tuning={tuning} intervalChanging={intervalChanging} scaleChanging={scaleChanging} chordChanging={chordChanging} tuningChanging={tuningChanging} keyChanging={keyChanging} chosenNotes={chosenNotes} keyChosen={keyChosen} accidental={accidental} chordType={chordType} scale={scale} noteRep={noteRep} highE={highE} Bstring={Bstring} Gstring={Gstring} Dstring={Dstring} Astring={Astring} lowE={lowE}></Fretboard2>      
      <EmptyStrings2 blur={bgBlur} tuning={tuning} chosenNotes={chosenNotes} noteRep={noteRep} scale={scale} chordType={chordType} intervalChanging={intervalChanging} scaleChanging={scaleChanging} chordChanging={chordChanging} tuningChanging={tuningChanging} keyChanging={keyChanging} keyChosen={keyChosen} accidental={accidental} isInScaleOrChordOrInterval={isInScaleOrChordOrInterval} play={play}></EmptyStrings2>
      <Options2 changeNoteRep={changeNoteRep} noteRep={noteRep} changeTuning={changeTuning} setTuningChanging={setTuningChanging} setIntervalChanging={setIntervalChanging} intervalChanging={intervalChanging} tuningChanging={tuningChanging} 
        tuning={tuning} changeBlur={chBlur} scaleChanging={scaleChanging} accidental={accidental} changeAcc={changeAccidental} setScaleChanging={changingScaleStatus} 
        chordChanging={chordChanging} changeChord={changeChord} setChordChanging={changingChordStatus} keyChanging={keyChanging} setKeyChanging={changingKeyStatus} 
        keyChosen={keyChosen} scaleChosen={scale} chordChosen={chordType} intervalOn={intervOn} setIntervs={setIntervs}></Options2>
      <Logo2></Logo2>
      <AboutBar></AboutBar>

      {/* Below renders on > 768px wide */}
      <Logo></Logo>
      <Options change_key={changeKey} noteRep={noteRep} keyChosen={keyChosen} accidental={accidental} changeAcc={changeAccidental} changeTuning={changeTuning} setTuning={setTuning} tuning={tuning} changeChord={changeChord} chosenChord={chordType} chosenScale={scale} changeScale={changeScale} scale={scale} changeNoteRep={changeNoteRep} defaultIntervs={setIntervsToFalse} changeIntervals={changeIntervsAndSetNotes}></Options>
      <EmptyStrings keyChosen={keyChosen} tuning={tuning} chosenNotes={chosenNotes} noteRep={noteRep} chordType={chordType} scale={scale} accidental={accidental} isInScaleOrChordOrInterval={isInScaleOrChordOrInterval} play={play}></EmptyStrings>
      <Strings></Strings>
      <Fretboard tuning={tuning} chosenNotes={chosenNotes} keyChosen={keyChosen} accidental={accidental} chordType={chordType} scale={scale} noteRep={noteRep} highE={highE} Bstring={Bstring} Gstring={Gstring} Dstring={Dstring} Astring={Astring} lowE={lowE}></Fretboard>
    </div>
  );
}

export function Logo() {
  return (
    <div className="absolute top-[5%] w-full max-h-[20%] flex justify-center invisible md:visible">
      <div className="flex items-center justify-center max-w-[45%] h-[100%]">
        <img src="./FretboardDojo Logo.png" alt="logo" />
      </div>
    </div>
  );
}


export function Logo2() {
  return (
    <div className="absolute top-[2%] left-[2%] w-[50%] max-h-[20%] flex visible md:invisible">
      <div className="relative left-[0%] max-w-[100%] h-[100%]">
        <img src="./FretboardDojo Logo.png" alt="logo" />
      </div>
    </div>
  );
}

export function EmptyStrings(items) {

  useEffect(() => {
    console.log("In EmptyStrings, keyChanging = " + items.keyChanging);
  }, [items.keyChanging])

  const [strings, setStringNotes] = useState(['E','A','D','G','B','E']) 
  
  const Estandard = ['E','A','D','G','B','E']
  const Dstandard = ['D','G','C','F','A','D']
  const Cstandard = ['C','F','Bb','Eb','G','C']

  useEffect(() => {
    var newStrings = [...strings]
    if(items.tuning === "Drop D") {
      newStrings[0] = 'E'
      setStringNotes(newStrings)
    } 
    else if(items.tuning === "Drop C") {
      newStrings = [...Dstandard]
      newStrings[0] = 'C'
      setStringNotes(newStrings)
    }
    else if(items.tuning === "E standard") {
      newStrings = [...Estandard]
      setStringNotes(newStrings)
    }
    else if(items.tuning === "D standard") {
      newStrings = [...Dstandard]
      setStringNotes(newStrings)
    }
    else if(items.tuning === "C standard") {
      newStrings = [...Cstandard]
      setStringNotes(newStrings)
    }
    
  }, [items.tuning])

  function getInterval(root, note){

    // G - Ab = 2m
    // G - A =  2M
    // G - Bb = 3m
    // G - B = 3M
    // G - C = 4P
    // G - Db = 5d
    // G - D = 5P
    // G - Eb = 6m
    // G - E = 6M
    // G - F = 7m
    // G - F# = 7M

      console.log("calculating the interval between " + root + " and " + note)

    var interval = Interval.distance(root, note)

    if(interval.includes("P", 0) || interval.includes("M", 0)){
      interval = interval[0]
    } else if(interval.includes("m", 0)){
      interval = "b" + interval[0]
    } 

    return interval
  }


  return (
      <div className="absolute flex flex-col justify-between top-[55%] left-[5%] w-[2%] h-[35%] bg-slate-600 invisible md:visible rounded-2xl">
        {/*${ ? 'bg-blue-700' : 'bg-transparent'} */}
        <div className={`absolute top-[2%] w-full h-[10%] justify-center font-semibold text-black ${strings[5] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[5], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'} rounded-xl`} onClick={() => items.play('highE')} >
          <div className="relative flex justify-center align-center text-sm md:text-xl md:top-[15%] lg:text-2xl lg:top-[10%] sizeEmptyStr w-full">
                {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[5], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[5])
                    : '')
                  : strings[5]}      
          </div>
        </div>
        <div className={`absolute top-[20%] w-full h-[10%] justify-center font-semibold text-black ${strings[4] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[4], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'}  rounded-xl`} onClick={() => items.play('B')}  >
          <div className="relative flex justify-center align-center text-sm md:text-xl md:top-[15%] lg:text-2xl lg:top-[10%] sizeEmptyStr w-full">
            {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[4], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[4])
                    : '')
                  : strings[4]}      
          </div> 
        </div>
        <div className={`absolute top-[38%] w-full h-[10%] justify-center font-semibold text-black ${strings[3] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[3], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'}  rounded-xl`} onClick={() => items.play('G')}  >
          <div className="relative flex justify-center align-center text-sm md:text-xl md:top-[15%] lg:text-2xl lg:top-[10%] sizeEmptyStr w-full">
            {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[3], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[3])
                    : '')
                  : strings[3]}      
          </div> 
        </div>
        <div className={`absolute top-[56%] w-full h-[10%] justify-center font-semibold text-black ${strings[2] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[2], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'} rounded-xl`} onClick={() => items.play('D')}  >
          <div className="relative flex justify-center align-center text-sm md:text-xl md:top-[15%] lg:text-2xl lg:top-[10%] sizeEmptyStr w-full">
              {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[2], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[2])
                    : '')
                  : strings[2]}      
          </div> 
        </div>
        <div className={`absolute top-[74%] w-full h-[10%] justify-center font-semibold text-black ${strings[1] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[1], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'}  rounded-xl`} onClick={() => items.play('A')} >
          <div className="relative flex justify-center align-center text-sm md:text-xl md:top-[15%] lg:text-2xl lg:top-[10%] sizeEmptyStr w-full">
            {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[1], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[1])
                    : '')
                  : strings[1]}  
          </div> 
        </div>
        <div className={`absolute top-[91%] w-full h-[10%] justify-center font-semibold text-black ${strings[0] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[0], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'} rounded-xl`} onClick={() => items.play('E')} >
          <div className="relative flex justify-center align-center text-sm md:text-xl md:top-[15%] lg:text-2xl lg:top-[10%] sizeEmptyStr w-full">
            {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[0], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[0])
                    : '')
                  : strings[0]}  
          </div> 
        </div>
      </div> 

  );
}

export function Strings() {

  return (
      <div className="absolute top-[55%] left-[8%] rounded-l-lg  w-[2%] h-[35%] bg-slate-600 invisible md:visible"> 
        <div className="absolute top-[5%] left-0 w-[100%] h-[2%] bg-[#D9D9D9] z-1"></div>
        <div className="string2"></div>
        <div className="string3"></div>
        <div className="string4"></div>
        <div className="string5"></div>
        <div className="string6"></div>
      </div>
  );
}

export function Fretboard(items) {
  return (    
    <div className="absolute top-[55%] left-[10%] w-[80%] h-[35%] bg-[#713D6F] opacity-90 invisible md:visible landscape">
      <div className="string1"></div>
      <div className="absolute top-[2%] left-0 w-full h-[8%] ">
        {/* TODO: PLAY SOUND FROM NOTES */}
        <String intervals={items.chosenNotes} tuning={items.tuning}  chord={ Chord.get(items.keyChosen + items.accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(items.keyChosen + items.accidental + " " + items.scale.toLowerCase()).notes} keyChosen={items.keyChosen} accidental={items.accidental} strNr={1} note_rep={items.noteRep} notes={items.chosenNotes} sounds={items.highE}></String>
      </div>
      <div className="string2"></div>
      <div className="absolute top-[20%] left-0 w-full h-[8%]">
        <String intervals={items.chosenNotes} tuning={items.tuning} chord={ Chord.get(items.keyChosen + items.accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(items.keyChosen + items.accidental + " " + items.scale.toLowerCase()).notes} keyChosen={items.keyChosen} accidental={items.accidental} strNr={2} note_rep={items.noteRep} notes={items.chosenNotes} sounds={items.Bstring}></String>
      </div>
      <div className="string3"></div>
      <div className="absolute top-[38%] left-0 w-full h-[8%]"> {/* fret */}
        <String intervals={items.chosenNotes} tuning={items.tuning} chord={ Chord.get(items.keyChosen + items.accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(items.keyChosen + items.accidental + " " + items.scale.toLowerCase()).notes} keyChosen={items.keyChosen} accidental={items.accidental} strNr={3} note_rep={items.noteRep} notes={items.chosenNotes} sounds={items.Gstring}></String>
      </div>
      <div className="string4"></div>
      <div className="absolute top-[56%] left-0 w-full h-[8%]">
        <String intervals={items.chosenNotes} tuning={items.tuning}  chord={ Chord.get(items.keyChosen + items.accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(items.keyChosen + items.accidental + " " + items.scale.toLowerCase()).notes} keyChosen={items.keyChosen} accidental={items.accidental} strNr={4} note_rep={items.noteRep} notes={items.chosenNotes} sounds={items.Dstring}></String>
      </div>
      <div className="string5"></div>
      <div className="absolute top-[74%] left-0 w-full h-[8%]">
        <String intervals={items.chosenNotes} tuning={items.tuning} chord={ Chord.get(items.keyChosen + items.accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(items.keyChosen + items.accidental + " " + items.scale.toLowerCase()).notes} keyChosen={items.keyChosen} accidental={items.accidental} strNr={5} note_rep={items.noteRep} notes={items.chosenNotes} sounds={items.Astring}></String>
      </div>
      <div className="string6"></div>
      <div className="absolute top-[91%] left-0 w-full h-[8%]">
        <String intervals={items.chosenNotes} tuning={items.tuning}  chord={ Chord.get(items.keyChosen + items.accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(items.keyChosen + items.accidental + " " + items.scale.toLowerCase()).notes} keyChosen={items.keyChosen} accidental={items.accidental} strNr={6} note_rep={items.noteRep} notes={items.chosenNotes} sounds={items.lowE}></String>
      </div>

      <div className="relative flex flex-row justify-evenly top-0 w-[100%] h-[100%]">
      </div>
    </div>

  );
}


// export function String1(){

//   return (
//     <div className=""> </div>
//   );
// }

export function EmptyStrings2(items){

  useEffect(() => {
    console.log("In EmptyStrings2, keyChanging = " + items.keyChanging);
  }, [items.keyChanging])

  const [strings, setStringNotes] = useState(['E','A','D','G','B','E']) 
  
  const Dstandard = ['D','G','C','F','A','D']
  const Cstandard = ['C','F','Bb','Eb','G','C']

  useEffect(() => {
    var newStrings = [...strings]
    if(items.tuning === "Drop D") {
      newStrings[0] = 'E'
      setStringNotes(newStrings)
    } 
    else if(items.tuning === "Drop C") {
      newStrings = [...Dstandard]
      newStrings[0] = 'C'
      setStringNotes(newStrings)
    }
    else if(items.tuning === "E standard") {
      setStringNotes(newStrings)
    }
    else if(items.tuning === "D standard") {
      newStrings = [...Dstandard]
      setStringNotes(newStrings)
    }
    else if(items.tuning === "C standard") {
      newStrings = [...Cstandard]
      setStringNotes(newStrings)
    }
    
  }, [items.tuning])

  function getInterval(root, note){

  // G - Ab = 2m
  // G - A =  2M
  // G - Bb = 3m
  // G - B = 3M
  // G - C = 4P
  // G - Db = 5d
  // G - D = 5P
  // G - Eb = 6m
  // G - E = 6M
  // G - F = 7m
  // G - F# = 7M

    console.log("calculating the interval between " + root + " and " + note)

  var interval = Interval.distance(root, note)

  if(interval.includes("P", 0) || interval.includes("M", 0)){
    interval = interval[0]
  } else if(interval.includes("m", 0)){
    interval = "b" + interval[0]
  } 

  return interval
}

  return (
    <div className={`absolute flex flex-col top-[32%] left-[20%] w-[60%] h-[3%] z-0 bg-slate-600 rounded-t-2xl ${(items.keyChanging === true || items.scaleChanging === true || items.chordChanging === true || items.tuningChanging === true || items.intervalChanging === true) ? 'invisible' : 'visible'} md:invisible`}>
      <div className={`absolute left-[2%] w-[10%] h-[100%] top-0 justify-center text-xl font-semibold text-black ${strings[0] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[0], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'} rounded-xl`} onClick={() => items.play('highE')} >
        <div className="relative flex flex-row justify-center align-center text-lg left-[-0%] top-[0px] 2xl:top-[0%] w-full">
          {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[0], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[0])
                    : '')
                  : strings[0]}        
        </div> 
      </div>
      <div className={`absolute left-[19%] w-[10%] h-[100%] justify-center text-xl font-semibold text-black ${strings[1] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[1], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'}  rounded-xl`} onClick={() => items.play('B')}  >
        <div className="relative flex flex-row justify-center align-center text-lg left-[-0%] top-[0px] 2xl:top-[0%] w-full">
            {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[1], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[1])
                    : '')
                  : strings[1]}      
        </div> 
      </div>
    <div className={`absolute left-[36%] w-[10%] h-[100%] justify-center text-xl font-semibold text-black ${strings[2] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[2], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'}  rounded-xl`} onClick={() => items.play('G')}  >
        <div className="relative flex flex-row justify-center align-center text-lg left-[0%] top-[0px] w-full">
          {items.noteRep === 0
              ? (items.isInScaleOrChordOrInterval(strings[2], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                ? getInterval(items.keyChosen, strings[2])
                : '')
              : strings[2]}      
        </div> 
      </div>
      <div className={`absolute left-[53%] w-[10%] h-[100%] justify-center text-xl font-semibold text-black ${strings[3] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[3], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'} rounded-xl`} onClick={() => items.play('D')}  >
        <div className="relative flex justify-center align-center text-lg left-[0%] top-[0px] w-full">
          {items.noteRep === 0
                ? (items.isInScaleOrChordOrInterval(strings[3], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                  ? getInterval(items.keyChosen, strings[3])
                  : '')
                : strings[3]}      
        </div> 
      </div>
      <div className={`absolute left-[70%] w-[10%] h-[100%] justify-center text-xl font-semibold text-black ${strings[4] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[4], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'}  rounded-xl`} onClick={() => items.play('A')} >
        <div className="relative flex justify-center align-center text-lg left-[0%] top-[0px] w-full">
            {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[4], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[4])
                    : '')
                  : strings[4]}      
        </div> 
      </div>
      <div className={`absolute left-[87%] w-[10%] h-[100%] justify-center text-xl font-semibold text-black ${strings[5] === items.keyChosen + items.accidental ? 'bg-green-700' : items.isInScaleOrChordOrInterval(strings[5], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType) === true ? 'bg-blue-700' : 'bg-transparent'} rounded-xl`} onClick={() => items.play('E')} >
        <div className="relative flex justify-center align-center text-lg left-[0%] top-[0px] w-full h-[40px]">
              {items.noteRep === 0
                  ? (items.isInScaleOrChordOrInterval(strings[5], items.chosenNotes, items.keyChosen, items.accidental, items.scale, items.chordType)
                    ? getInterval(items.keyChosen, strings[5])
                    : '')
                  : strings[5]}      
        </div> 
      </div>
    </div>
  );
}

export function Strings2(items) {
  return (
    <div className={`absolute top-[0%] left-[0%] w-[100%] h-[100%] visible ${(items.keyChanging === true || items.scaleChanging === true || items.chordChanging === true || items.tuningChanging === true || items.intervalChanging === true) ? 'invisible' : 'visible'} md:invisible`}>
      <div className="absolute left-[6%] w-[2%] h-[100%] top-0 bg-[#D9D9D9] z-10"></div>
      <div className="absolute left-[23%] w-[2%] h-[100%] top-0 bg-[#D9D9D9] z-10"></div>
      <div className="absolute left-[40%] w-[2%] h-[100%] top-0 bg-[#D9D9D9] z-10"></div>
      <div className="absolute left-[57%] w-[2%] h-[100%] top-0 bg-[#D9D9D9] z-10"></div>
      <div className="absolute left-[74%] w-[2%] h-[100%] top-0 bg-[#D9D9D9] z-10"></div>
      <div className="absolute left-[91%] w-[2%] h-[100%] top-0 bg-[#D9D9D9] z-10"></div>
    </div>
  )
}

export function Options2(items) {

  const [represPressed, setRepres] = useState([false, false])

  function pressedRepres(idx){
    var newRepres = [...represPressed]
    if(idx == 0) console.log("Pressed representation 1")
    else {
      console.log("Pressed representation 2")
    }
    if(represPressed[idx] === false) {
      for(var i = 0; i < represPressed.length; i++){
        if(newRepres[i] == true) newRepres[i] = !newRepres[i];
      }
    }
    newRepres[idx] = !newRepres[idx];
    console.log("representation pressed of" + idx + "= " + newRepres[idx])
    setRepres(newRepres)
  }

  const [key, setKey] = useState('C');

  const [keyPressed, setKeyPress] = useState(false);

  function changeKeyPressed(){
    setKeyPress(!keyPressed);
  }

  function print1000(){
    for(var i = 0; i < 100; i++){
      console.log("AAAA");
    }
  }

  var [scaleChanging, changeScale] = useState(false);

  useEffect(() => {
    changeScale(items.scaleChanging);    
    console.log("In effect, scale changing now set to " + items.scaleChanging)
  }, [items.scaleChanging])

  function chAcc() {
    var lenKeyChosen = items.keyChosen.length
    if(items.keyChosen.length == 2){
      items.changeAcc(items.keyChosen[lenKeyChosen - 1])
    }
    console.log("Accidental is now = " + items.accidental)
  }

  const [tuning, chTuning] = useState('E standard')

  useEffect(() => {
    chTuning(items.tuning)
  }, [items.tuning])

  useEffect(() => {
    console.log("In options2 chord chosen has changed")
  }, [items.chordChosen])

  useEffect(() => {
    console.log("In options2 scale chosen has changed")
  }, [items.scaleChosen])

  useEffect(() => {
    if(items.noteRep === 0) {
      pressedRepres(0)
    } else {
      pressedRepres(1)
    }
  }, [items.noteRep])

  return (
    <div className="absolute left-[0%] w-[100%] top-[10%] h-[20%] visible md:invisible">
      <div className="absolute left-[2%] w-[96%] top-[0%] h-[50%] flex basis-3 flex-row bg-[#3D3D3D] rounded-t-2xl">
        <div className="relative flex basis-1/3 flex-col items-center h-full justify-center">
          <div className="flex items-center justify-center basis-1/2 text-lg text-[#929292] font-semibold">
            Key
          </div>
          <div className="flex left-[15%] w-[70%] h-1/4 rounded-md border-2 border-black  bg-[#727777] font-semibold text-md items-center justify-center text-opacity-70" onClick={() => {items.changeBlur(); console.log("Key pressed" + items.keyChosen + "\n\n\n\n\nKey pressed"); changeKeyPressed(); items.setKeyChanging(); console.log("Key pressed set to " + items.keyChanging); chAcc()}}>
            {items.keyChosen} 
          </div>
          {/* {keyPressed && <KeyChoice></KeyChoice>} */}
        </div>
        <div className="relative flex basis-1/3 flex-col items-center h-full justify-center">
          <div className="flex items-center justify-center basis-1/2 text-lg text-[#929292] font-semibold">
            Scale
          </div>
          <div className="flex left-[15%] w-[70%] h-1/4 rounded-md border-2 border-black  bg-[#727777] font-semibold text-xs items-center justify-center text-opacity-70 truncate" onClick={() => { items.setScaleChanging() ; console.log("Scale changing set to " + scaleChanging) }}>
            {items.scaleChosen === '' ? 'Choose scale..' : items.scaleChosen}
          </div>
        </div>
        <div className="relative flex basis-1/3 left-0 w-[90%] flex-row items-center h-full">
          <div className="flex basis-1/2 items-center justify-center h-1/2 text-base text-[#929292] font-semibold">
            Repres.
          </div> 
          <div className="relative rounded-xl border-2 border-black bg-[#727777] h-[25%] font-semibold text-xl flex basis-2/5 items-center justify-center z-1 ">
            <div className={`relative z-2 flex-1 h-full flex items-center justify-center text-xs rounded-l-xl ${represPressed[0] === true ? 'bg-blue-700' : 'bg-[#cb2a2a]'}`} onClick ={() => {pressedRepres(0); items.changeNoteRep(0)}}>I</div>
            <div className="absolute w-[6%] h-full bg-black"></div>
            <div className={`relative z-2 flex-1 h-full flex items-center justify-center text-xs rounded-r-xl ${represPressed[1] === true ? 'bg-blue-700' : 'bg-[#cb2a2a]'}`}  onClick={() => {pressedRepres(1); items.changeNoteRep(1)}}>NN</div>
          </div>
        </div>
      </div>
      <div className="absolute left-[2%] w-[96%] top-[50%] h-[50%] visible md:invisible flex basis-3 flex-row bg-[#3D3D3D] rounded-b-2xl">
        <div className="relative flex basis-1/3 flex-col items-center h-full justify-center">
          <div className="flex items-center justify-center basis-1/2 text-lg text-[#929292] font-semibold">
            Tuning
          </div>
          <div className="flex left-[15%] w-[70%] h-1/4 rounded-md border-2 border-black  bg-[#727777] font-semibold text-xs items-center justify-center text-opacity-70" onClick={() => {items.setTuningChanging(true); console.log("Tuning changing set to " + items.tuningChanging);  }}>
            {items.tuning === '' ? 'Choose tuning..' : items.tuning}
          </div>
        </div>
        <div className=" relative flex basis-1/3 flex-col items-center h-full justify-center">
          <div className="flex items-center justify-center basis-1/2 text-lg text-[#929292] font-semibold">
            Chord
          </div>
          <div className="flex left-[15%] w-[70%] h-1/4 rounded-md border-2 border-black  bg-[#727777] font-semibold text-xs items-center justify-center text-opacity-70 truncate" onClick={() => {items.setChordChanging(); console.log("Chord changing set to " + items.chordChanging) }}>
            {items.chordChosen === '' ? 'Choose chord..' : items.chordChosen}
          </div>
        </div>
        <div className="relative flex basis-1/3 flex-row items-center h-full justify-left">
          <div className="flex basis-7/12 items-center justify-center h-1/2 text-base text-[#929292] font-semibold">
            Intervals
          </div> 
          <div className={`relative left-0 flex basis-3/12 rounded-full ${items.intervOn === true ? 'bg-blue-700' : 'bg-black'} w-[20px] h-[20px] font-semibold text-xl items-center z-2 `}>
            <div className={`absolute flex min-w-[50%] min-h-[100%] max-w-[100%] max-h-[100%] ${items.intervalChanging === false ? 'bg-[#cb2a2a]' : 'bg-blue-700 right-[2%] left-[50%]'} rounded-full z-3 border-2 border-black`}  onClick={() => {items.setIntervs(!items.intervOn) ; items.setIntervalChanging(!items.intervalChanging); console.log("intervOn is = " + items.intervOn)}}>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export function FretsMakerVertical(){

  var notes = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <div className="absolute flex flex-col justify-between top-[20%] left-[5%] w-[45%] h-[75%] z-1 visible md:invisible">
      {
        notes.map((note) => {
          <div className="relative w-full h-[2%] left-0 bg-black z-2"></div>
        })
      }
    </div>
  );
}

var nrs = [1,2,3,4,5,6,7,8,9,10,11,12]

var nrs = [1,2,3,4,5,6,7,8,9,10,11,12];

export function String2(items) {

  var sc = items.scale;
  var index = items.index;
  var strNr = items.strNr;


  const [key, setKeyChosen] = useState('C');
  
  useEffect(() => {
    if(items.keyChosen.length == 2){
      console.log("In String2 Key = " + items.keyChosen)
      setKeyChosen(items.keyChosen[0])
    }
    setKeyChosen(items.keyChosen[0])
    console.log("In String2 Key = " + items.keyChosen + " accidental = " + items.accidental)
  }, [items.keyChosen])

  var accidental = items.accidental;
  var chord = items.chord;
  var intervs = items.notes;

  var noteRepres = items.note_rep

  
  // const [notesString, setNotesString] = useState([]);
    
  const fretboardGeneric = [
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/db', 'd', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['C', 'C#/Db', 'D','D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'], 
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E']
  ];
  
  const dropDfretboard = [
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/db', 'd', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['C', 'C#/Db', 'D','D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'], 
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E']
  ];

   const DStandardFretboard = [
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/db', 'd', 'D#/Eb', 'E', 'F'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D','D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D']
  ];
   
  const CStandardFretboard = [
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F'], 
      ['B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb'], 
      ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/db', 'd', 'D#/Eb'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D','D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C']
  ];

  const dropCfretboard = [
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'], 
      ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/db', 'd', 'D#/Eb', 'E', 'F'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D','D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D']
  ];
  
  const FretboardPitches = [
      ['F4', 'Fs4/Gb4', 'G4', 'Gs4/Ab5', 'A5', 'As5/Bb', 'B5', 'C5', 'Cs5/Db5', 'D5', 'Ds5/Eb5', 'E5'], 
      ['C4', 'Cs4/Db4', 'D4', 'Ds4/Eb4', 'E4', 'F4', 'Fs4/Gb4', 'G4', 'Gs4/Ab5', 'A5', 'As5/Bb5', 'B5'], 
      ['Ab4', 'A4', 'As4/Bb4', 'B4', 'C4', 'Cs4/Db4', 'D4', 'Ds4/Eb4', 'E4', 'F4', 'Fs4/Gb4', 'G4'], 
      ['Ds3/Eb3', 'E3', 'F3', 'Fs3/Gb3', 'G3', 'Gs3/Ab3', 'A4', 'As4/Bb4', 'B4', 'C4', 'Cs4/Db4', 'D4'], 
      ['As3/Bb3', 'B3', 'C3', 'Cs3/Db3', 'D3', 'Ds3/Eb3', 'E3', 'F3', 'Fs3/Gb3', 'G3', 'Gs3/Ab3', 'A4'], 
      ['F2', 'Fs2/Gb2', 'G2', 'Gs2/Ab2', 'A3', 'As3/Bb3', 'B3', 'C3', 'Cs3/Db3', 'D3', 'Ds3/Eb3', 'E3']
  ];

  const [notesString, setNotesString] = useState(fretboardGeneric[strNr - 1]);

  useEffect(() => {
    if(items.tuning === 'E standard') {
      setNotesString(fretboardGeneric[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'Drop D') {
      setNotesString(dropDfretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'D standard') {
      setNotesString(DStandardFretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'Drop C') {
      setNotesString(dropCfretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
    else if(items.tuning === 'C standard') {
      setNotesString(CStandardFretboard[strNr - 1])
      console.log("notesString [" + (strNr - 1) + "] = " + notesString)
    }
  }, [items.tuning])

  const [scale, chScale] = useState(sc);

  useEffect(() => {
    if(sc.length === 0 && intervs.length === 0){   // check if length of scale is equal to 0, then choose chord
      chScale(chord)
    } else if(intervs.length === 0){
      chScale(sc)
      console.log("Scale is now = " + scale)
    } else {             // chord is empty
      chScale(intervs)
      // console.log("On string, intervals is now on")
    } 
    // console.log("Scale changed to = %s for string", sc)
  }, [sc, chord, intervs])

  // commenting this allows scale to be changed

  const sounds = items.sounds

  function play (note, strNr){
    var idx = -1
    for(var i = 0; i < fretboardGeneric[strNr - 1].length ; i++){
      if(note === fretboardGeneric[strNr - 1][i]) {
        idx = i
        break
      }
    }

    console.log("Playing note %s NOW", note, "sound = %s", sounds[idx + 1])

    var howler = new Howl({
      src: [sounds[idx + 1]], 
      volume: 1,
    })

    howler.play();
  }

  return (
   <div className="absolute top-0 left-0 flex flex-col justify-evenly w-full h-full z-20">
      {
        notesString.map((note, idx) => 
          <div className="relative flex justify-center items-center top-0 left-0 basis-1/12 h-full">
            { 
                note.split("/").length == 1 && scaleHasNote(scale, note) ?
                ( 
                  (items.note_rep === 1) ? 
                  (
                    (note == key) ?
                      <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-green-700 rounded-full z-20" onClick={() => {console.log("%s pressed", note); play(note, strNr)}}>{note}</div>
                    :
                      <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%]  flex justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20" onClick={() => {console.log("%s pressed", note); play(note, strNr)}}>{note}</div>
                  ) :
                  (
                    (note == key) ?
                      <div className="absolute top-[30%]  max-h-[40%] max-w-[100%] min-w-[100%]  flex justify-center items-center text-sm font-semibold basis-1/12 bg-green-700 rounded-full z-20" onClick={() => {console.log("%s pressed", note); play(note, strNr)}}>{getInterval(key, note)}</div>
                    :
                      <div className="absolute top-[30%]  max-h-[40%] max-w-[100%] min-w-[100%]  flex justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20" onClick={() => {console.log("%s pressed", note);  play(note, strNr)}}>{getInterval(key, note)}</div>
                  ) 
                ) :
                (scaleHasNote(scale, note.split("/")[0]) || scaleHasNote(scale, note.split("/")[1])) ?
                (
                  scaleHasNote(scale, note.split("/")[0]) ?
                  (

                    (items.note_rep === 1) ? 
                    (
                      (note.split("/")[0] === key + accidental) ?
                        <div className="absolute top-[30%] max-j-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-green-700 rounded-full z-20" onClick={() => { play(note, strNr) }} >{note.split("/")[0]}</div>
                        :
                          <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20" onClick={() => { play(note, strNr) }} >{note.split("/")[0]}</div>
                    ) 
                      :
                    (
                      (note.split("/")[0] === key + accidental) ?
                        <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-green-700 rounded-full z-20"  onClick={() => { play(note, strNr) }} >{getInterval(key + accidental, note.split("/")[0])}</div>
                      :
                        <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20" onClick={() => { play(note, strNr) }} >{getInterval(key + accidental, note.split("/")[0])}</div>
                    ) 
                  ) : 
                  scaleHasNote(scale, note.split("/")[1]) ?
                  (

                    (items.note_rep === 1) ? 
                    (
                      (note.split("/")[1] === key + accidental) ?
                        <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-green-700 rounded-full z-20" onClick={() => { play(note, strNr) }}>{note.split("/")[1]}</div>
                        :
                          <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20" onClick={() => { play(note, strNr) }}>{note.split("/")[1]}</div>
                    ) 
                      :
                    (
                      (note.split("/")[1] === key + accidental) ?
                        <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-green-700 rounded-full z-20" onClick={() => { play(note, strNr) }}  >{getInterval(key + accidental, note.split("/")[1])}</div>
                      :
                        <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] flex justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20" onClick={() => { play(note, strNr) }}  >{getInterval(key + accidental, note.split("/")[1])}</div>
                    )

                  ) :
                  (items.note_rep === 1) ? 
                      <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20 hidden">{note}</div>
                    :
                      <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20 hidden">{getInterval(key, note)}</div>
                )
                  :
                    (items.note_rep === 1) ? 
                      <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] justify-center items-center text-sm font-semibold basis-1/12 bg-blue-700 rounded-full z-20 hidden">{note}</div>
                    :
                      <div className="absolute top-[30%] max-h-[40%] max-w-[100%] min-w-[100%] justify-center items-center text-sm  font-semibold basis-1/12 bg-blue-700 rounded-full z-20 hidden"> {getInterval(key, note)} </div>
                  
            }
          </div>
        )
      }
    </div>
  );

}


export function Fretboard2(items) {

  const [key, setKeyHere] = useState(items.keyChosen);
  const [accidental, setAccidentalHere] = useState(items.accidental);

  useEffect(() => {
    if(items.keyChosen.length === 2) {
      setKeyHere(items.keyChosen[0])
    } else{
      setKeyHere(items.keyChosen[0])
    }
  }, [items.keyChosen])

   useEffect(() => {
    if(items.keyChosen.length === 2) {
      setAccidentalHere(items.accidental)
    } else{
      setAccidentalHere(items.accidental)
    }
  }, [items.accidental])


  return (
    <div className={`absolute top-[35%] left-[20%] w-[60%] h-[65%] z-20 bg-[#713D6F] opacity-90 ${(items.keyChanging === true || items.scaleChanging === true || items.chordChanging === true || items.tuningChanging === true || items.intervalChanging === true) ? 'invisible' : 'visible'} md:invisible`}>
      <div className="relative flex flex-col top-0 left-0 w-full h-full">
        {nrs.map((nr) => (
          <div key={nr} className={`absolute left-0 w-full h-[1%] bg-slate-500  ${nr === 12 ? 'hidden' : ''}`} style={{ top: `${(100 - (nr / 12) * 100)}%` }}></div>
        ))}
        <Strings2 blur={items.bgBlur} scaleChanging={items.scaleChanging} intervalChanging={items.intervalChanging} chordChanging={items.chordChanging} tuningChanging={items.tuningChanging} keyChanging={items.keyChanging}></Strings2>
        {['3%', '20%', '37%', '54%', '71%', '88%'].map((left, index) => (
          <div key={index} className="absolute top-[0%] w-[8%] h-[100%]" style={{ left }}>
            <String2 intervals={items.chosenNotes} tuning={items.tuning} chord={ Chord.get(key + accidental + " " +  changeName(items.chordType.toLowerCase())).notes } scale={ Scale.get(key + accidental + " " + items.scale.toLowerCase()).notes} keyChosen={key} accidental={accidental} strNr={index + 1} note_rep={items.noteRep} notes={items.chosenNotes} sounds={index === 0 ? items.lowE : index === 1 ? items.Astring : index === 2 ? items.Dstring : index === 3 ? items.Gstring : index === 4 ? items.Bstring : items.highE}></String2>
          </div>
        ))}
      </div>
    </div>
  );
}
     
  