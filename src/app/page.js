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
import React, { useState , useEffect, useRef } from 'react';
import {Scale, Interval, Note, Chord} from "tonal";

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


  return (
    <div className="relative flex flex-row items-center h-full w-full">
      <div className="flex justify-center items-center relative basis-3/5 h-full text-xl   font-semibold">{items.text}</div>
      <div className="relative basis-2/5 h-full flex justify-center items-center" onClick={changeState}>
        {color === "bg-blue-700" && items.switchVal ?
          <div className="relative rounded-full w-5 h-5 bg-blue-700"></div>
          :
          <React.Fragment>
            <div className="absolute justify-center items-center w-5 h-5 bg-[#727777] rounded-full z-0"></div>
            <div className="absolute justify-center items-center w-3 h-3 bg-[#3D3D3D] rounded-full z-1"></div>
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



export function Intervs(){

    const [switchVal, setSwitchVal] = useState(false);

    const changeSwitch = () => {
      setSwitchVal(!switchVal);
      console.log("Switch value has been changed to", switchVal);
    }

    return (
        <div className="absolute top-[5%] left-[75%] w-[20%] h-[90%] bg-[#3D3D3D] z-1">
          <div className="relative flex flex-row items-center justify-center top-0 left-0 h-[30%] w-[100%] bg-[#3D3D3D]">
            <div className="flex items-center h-full w-[50%] basis-1/2">
              <div className="text-3xl font-semibold font-roboto mx-auto text-black">Intervals</div>
            </div>
            <div className="flex basis-1/2 left-[50%] items-center justify-center top-0 h-[100%] w-[50%]">
              <div className="relative w-[50%] h-[40%] rounded-full bg-black z-0" onClick={() => changeSwitch()}>
                <Switch switchVal={switchVal} changeSwitch={changeSwitch}></Switch>
              </div>
              {/* <div className="absolute top-[15%] left-[20%] w-[30%] h-[60%] rounded-full bg-[#cb2a2a]"></div> */}
            </div>
          </div>
          <div className="relative grid grid-cols-3 top-0 left-0 h-[70%] w-[100%] bg-[#3D3D3D]">
            <Intervals text="Root" switchVal={switchVal}></Intervals>
            <Intervals text="3" switchVal={switchVal}></Intervals>
            <Intervals text="#5/b6" switchVal={switchVal}></Intervals>
            <Intervals text="b2" switchVal={switchVal}></Intervals>
            <Intervals text="4" switchVal={switchVal}></Intervals>
            <Intervals text="6" switchVal={switchVal} ></Intervals>
            <Intervals text="2" switchVal={switchVal}></Intervals>
            <Intervals text="#4/b5" switchVal={switchVal}></Intervals>
            <Intervals text="b7" switchVal={switchVal}></Intervals>
            <Intervals text="b3" switchVal={switchVal}></Intervals>
            <Intervals text="5" switchVal={switchVal}></Intervals>
            <Intervals text="7" switchVal={switchVal}></Intervals>
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
              <div className="relative flex items-center justify-center text-xl font-bold text-black">
                {instrName}
              </div>
            </div> 
              :
            instrName === "Piano" ?
            <div className={`absolute flex w-[100%] items-center justify-center rounded-r-md h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xl font-bold text-black">
                {instrName}
              </div>
            </div> 
              :
            <div className={`absolute flex w-[100%] items-center justify-center h-[100%] z-1 ${bgColor}`}>
              <div className="relative flex items-center justify-center text-xl font-bold text-black">
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
          <div key={index} className="relative flex justify-center align-middle items-center w-full max-h-[20%] min-h-[20%] font-medium text-opacity-70 text-black text-xl hover:bg-gray-200 cursor-pointer z-auto" onClick={() => items.setPressedChord(index)}>
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
          <div key={index} className="relative flex justify-center align-middle items-center w-full max-h-[20%] min-h-[20%] text-opacity-70 text-black text-xl hover:bg-gray-200 cursor-pointer z-auto" onClick={() => items.setPressedScale(index)}>
            {chord}
          </div> 
      ))}
    </div>
  );
}

export function DropdownTuning(items){

  const tunings = ['E standard', 'D standard', 'C standard', 'Drop D', 'Drop A - 7 string', 'B standard - 7 string']

  return (
   <div className="absolute top-0 left-0 flex flex-col w-full overflow-y-scroll no-scrollbar h-[500%] z-50 bg-[#727777]"> {/* Set a fixed maximum height */}
      {tunings.map((chord, index) => (
          <div key={index} className="relative flex justify-center align-middle items-center w-full max-h-[20%] min-h-[20%] text-opacity-70 text-black text-xl hover:bg-gray-200 cursor-pointer z-auto" onClick={() => items.setPressedTuning(index)}>
            {chord}
          </div> 
      ))}
    </div>
  );
}


export function GridChordScale(items){



    //////////////////////////////////////
    //          Chord dropdown          //                        
    //////////////////////////////////////
    
    const [dropDownChord, setDropDown] = useState(false);

    const changeDropDownChord = () => {
      setDropDown(!dropDownChord)
    }

    const chordNames = ['Major', 'Minor', 'Diminished', 'Augmented', 'Major 7', 'Minor 7', 'Sus 2', 'Sus 4']
    const [indexChordPressed, setIndexChordPressed] = useState(-1);

    const setChordPressed = (index) => {
      console.log("chord %s has been chosen with index %d", chordNames[index], index);
      setIndexChordPressed(index);
      console.log("chord %s WITH INDEX %d has been chosen", chordNames[index], indexChordPressed);
      items.changeChordType(chordNames[index]) // this changes chord and passes this value to parent
    }
    
    //////////////////////////////////////
    //          Scale dropdown          //                        
    //////////////////////////////////////

    const [dropDownScale, setDropDownScale] = useState(false);

    const changeDropDownScale = () => {
      setDropDownScale(!dropDownScale)
    }
    
    const scaleNames = ['Major Pentatonic', 'Minor Pentatonic', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'Harmonic Minor']
    const [indexScalePressed, setIndexScalePressed] = useState(-1);

    const setScalePressed = (index) => {
      console.log("scale %s has been chosen with index %d", scaleNames[index], index);
      setIndexScalePressed(index);
      console.log("scale %s WITH INDEX %d has been chosen", scaleNames[index], indexScalePressed);

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


  ///////////////////////////////////////////////////////
  //          SET CHORD 
  //
  
  return (
     <div className="relative grid grid-cols-2 gap-[10%] left-0 top-[5%] h-[90%] bg-[#3D3D3D]"> 
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full">
              <div className="flex relative text-3xl items-center justify-center font-semibold font-roboto w-[100%] text-black">Chord</div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%] z-2">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-xl text-center flex justify-center items-center text-opacity-70 font-medium text-black bg-[#727777] rounded-lg" onClick={changeDropDownChord}>
                { dropDownChord ? 
                  (
                    <DropdownChord setPressedChord={setChordPressed} />
                  ) : indexChordPressed > -1 ? 
                  
                  (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-xl bg-[#727777] rounded-lg">
                      {chordNames[indexChordPressed]}
                    </div>
                  ) : (
                      "Select a chord..." // Placeholder text when no chord is selected
                )}
              </div>
              {/* <ChordsDropdown></ChordsDropdown> */}
            </div>
          </div>
          <div className="relative flex justify-center w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute flex flex-row items-center justify-center h-[50%] w-full z-0">
              <div className="flex relative text-3xl items-center justify-center font-semibold font-roboto w-[100%] text-black">Scale</div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%] z-2">
              <div className="relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-xl flex items-center justify-center text-opacity-70 font-medium  text-black bg-[#727777] rounded-lg" onClick={changeDropDownScale}>
                { dropDownScale ? 
                  (
                    <DropdownScale setPressedScale={setScalePressed} />
                  ) : indexScalePressed > -1 ? 

                  (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-xl bg-[#727777] rounded-lg">
                      {scaleNames[indexScalePressed]}
                    </div>
                  ) : (
                      "Choose scale..." // Placeholder text when no chord is selected
                )}
              </div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full z-0">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-2xl font-semibold font-roboto mx-auto text-black">Tuning</div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[0%] h-[50%] w-[100%]">
              <div className="flex relative left-[0%] top-[25%] w-[100%] h-[75%] text-center text-xl justify-center items-center font-medium text-opacity-70 text-black bg-[#727777] rounded-lg" onClick={changeDropDownTuning}>
                { dropDownTuning ? 
                  (
                    <DropdownTuning setPressedTuning={setTuningPressed} />
                  ) : indexTuningPressed > -1 ? 
                  
                  (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-xl bg-[#727777] rounded-lg">
                      {tunings[indexTuningPressed]}
                    </div>
                  ) : (
                      "Choose tuning..." // Placeholder text when no chord is selected
                )}

              </div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] bg-[#3D3D3D] rounded-lg">
            <div className="absolute left-0 top-0 h-[50%] w-full">
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-2xl font-semibold font-roboto mx-auto text-black">Instrument</div>
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
    return (
      <div className="relative top-[20%] left-[8%] h-[25%] w-[82%] rounded-3xl bg-[#3D3D3D]">
        <div className="absolute grid grid-cols-10 left-0 top-0 h-[100%] w-[100%]">
          <div className="relative col-span-3">
            <Key changeKey={items.change_key} key={items.key} accidental={items.accidental} changeAcc={items.changeAcc}></Key>
          </div>  
          <div className="relative col-span-4">
            <GridChordScale changeChordType={items.change_chord}></GridChordScale>
          </div>  
          <div className="relative col-span-3"></div>  
        </div>
        <Intervs> </Intervs>
      </div>
    );
}

function scaleHasNote(scale, note) {
  for (let i = 0 ; i < scale.length ; i++){
    if( scale[i] == note ){
      return true;
    }
  }
  return false;
}

export function String(items){
  
  var scale = items.scale;
  var index = items.index;
  var strNr = items.strNr;
  var key = items.keyChosen;
  var accidental = items.accidental;
  
  // const [notesString, setNotesString] = useState([]);
    
  const fretboardGeneric = [
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'], 
      ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'], 
      ['Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'], 
      ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'], 
      ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'], 
      ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E']
  ];

  const notesString = fretboardGeneric[strNr - 1];

  return (
    <div className="relative top-0 left-0 flex flex-row justify-evenly w-full h-full">
      {
        notesString.map((note, idx) => 
          <div className="relative flex justify-center items-center top-0 left-0 basis-1/12 h-full">
            {idx > 0 && strNr < 6 && <div className="absolute left-[-2px] top-[-25%] h-[250%] w-[6px] bg-slate-500"></div>}
            {strNr === 6 && idx > 0 &&  <div className="absolute left-[-2px] top-[-25%] h-[140%] w-[6px] bg-slate-500"></div>}
            { 
                note.split("/").length == 1 && scaleHasNote(scale, note) ?
                (
                  (note == items.keyChosen) ?
                    <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-xl font-semibold basis-1/12 bg-green-700 rounded-full z-50">{note}</div>
                  :
                    <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-xl font-semibold basis-1/12 bg-blue-700 rounded-full z-50">{note}</div>
                  
                ) :
                (scaleHasNote(scale, note.split("/")[0]) || scaleHasNote(scale, note.split("/")[1])) ?
                (
                  scaleHasNote(scale, note.split("/")[0]) ?
                  (
                    (note.split("/")[0] === items.keyChosen + accidental) ?
                       <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-xl font-semibold basis-1/12 bg-green-700 rounded-full z-50">{note.split("/")[0]}</div>
                      :
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-xl font-semibold basis-1/12 bg-blue-700 rounded-full z-50">{note.split("/")[0]}</div>
                  ) : 
                  scaleHasNote(scale, note.split("/")[1]) ?
                  (
                    (note.split("/")[1] === items.keyChosen + accidental) ?
                       <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-xl font-semibold basis-1/12 bg-green-700 rounded-full z-50">{note.split("/")[1]}</div>
                      :
                        <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] flex justify-center items-center text-xl font-semibold basis-1/12 bg-blue-700 rounded-full z-50">{note.split("/")[1]}</div>
                  ) :
                    <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] justify-center items-center text-xl font-semibold basis-1/12 bg-blue-700 rounded-full z-50 hidden">{note}</div>
                )
                  :
                    <div className="absolute top-0 min-w-[40%] max-h-[100%] min-h-[100%] justify-center items-center text-xl font-semibold basis-1/12 bg-blue-700 rounded-full z-50 hidden">{note}</div>
                  
            }
          </div>
        )         
      }
    </div>
  );
}

export default function Home() {

  const [keyChosen, setKey] = useState("C") // initially set to null 
  const [accidental, setAccidental] = useState("") // initially set to null 
  const [tuning, setTuning] = useState("") // initially set to null 
  const [chordType, setChord] = useState("major") // initially set to null 
  const [scale, setScale] = useState("") // initially set to null 

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
    console.log("chord type set to %s", chordType)
  }
  
  const changeScale = (newScale) => {
    setScale(newScale)
  }

  useEffect(() => {
    console.log("Chord type in Home updated to:", chordType);
  }, [chordType]);


  return (
    <div className="absolute top-0 left-0 h-full w-full bg-[#2D2D2D]">

      <Options change_key={changeKey} key={keyChosen} accidental={accidental} changeAcc={changeAccidental} change_tuning={changeTuning} tuning={tuning} change_chord={changeChord} chord={chordType} change_scale={changeScale} scale={scale}></Options>

      <div className="absolute top-[55%] left-[6%] w-[80%] h-[30%]">

      </div> 
      <div className="absolute top-[55%] left-[8%] rounded-l-lg  w-[2%] h-[35%] bg-slate-600 "> 
        <div className="absolute top-[5%] left-0 w-[100%] h-[2%] bg-[#D9D9D9] z-1"></div>
        <div className="string2"></div>
        <div className="string3"></div>
        <div className="string4"></div>
        <div className="string5"></div>
        <div className="string6"></div>
      </div>
      <div className="absolute top-[55%] left-[10%] w-[80%] h-[35%] bg-[#713D6F] opacity-90">
        <div className="string1"></div>
        <div className="absolute top-[2%] left-0 w-full h-[8%] ">
          <String scale={Chord.get(keyChosen + accidental + " " + chordType.toLowerCase()).notes} keyChosen={keyChosen} accidental={accidental} strNr={1}></String>
        </div>
        <div className="string2"></div>
        <div className="absolute top-[20%] left-0 w-full h-[8%]">
          <String scale={Chord.get(keyChosen + accidental + " " + chordType.toLowerCase()).notes} keyChosen={keyChosen} accidental={accidental} strNr={2}></String>
        </div>
        <div className="string3"></div>
        <div className="absolute top-[38%] left-0 w-full h-[8%]">
          <String scale={Chord.get( keyChosen + accidental + " " + chordType.toLowerCase()).notes} keyChosen={keyChosen} accidental={accidental} strNr={3}></String>
        </div>
        <div className="string4"></div>
        <div className="absolute top-[56%] left-0 w-full h-[8%]">
          <String scale={Chord.get( keyChosen + accidental + " " + chordType.toLowerCase()).notes} keyChosen={keyChosen} accidental={accidental} strNr={4}></String>
        </div>
        <div className="string5"></div>
        <div className="absolute top-[74%] left-0 w-full h-[8%]">
          <String scale={Chord.get( keyChosen + accidental + " " + chordType.toLowerCase()).notes} keyChosen={keyChosen} accidental={accidental} strNr={5}></String>
        </div>
        <div className="string6"></div>
        <div className="absolute top-[91%] left-0 w-full h-[8%]">
          <String scale={Chord.get( keyChosen + accidental + " " + chordType.toLowerCase()).notes} keyChosen={keyChosen} accidental={accidental} strNr={6}></String>
        </div>

        <div className="relative flex flex-row justify-evenly top-0 w-[100%] h-[100%]">
          {/* <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret>
          <Fret></Fret> */}
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
