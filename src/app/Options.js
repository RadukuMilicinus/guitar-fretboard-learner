import { color } from 'framer-motion';
import react from 'react';
import React, { useState } from 'react';
// import Interval from './page.js';

// export default function Options(){
//   return (

//   );
// }

export function Keys({pressedKeys, pressedAccs, keyChange, accidentalsChange}){
  
  
    return (

        <div className="relative flex flex-col basis-1/2 items-center justify-center w-full md:h-auto">
        <div className="flex h-1/2 items-center justify-center w-full text-black text-2xl font-semibold">Key</div>
        <div className="flex justify-normal flex-row left-[10%] w-[80%] h-full md:h-auto">
          {/* Divs with notes A to G */}
          
          <div className="relative flex w-[100%] justify-evenly flex-row left-0 top-0 h-full bg-[#727777] rounded-md">
            <Note note="A" onClick={() => keyChange(0)} color={pressedKeys[0] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="B" onClick={() => keyChange(1)} color={pressedKeys[1] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="C" onClick={() => keyChange(2)} color={pressedKeys[2] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="D" onClick={() => keyChange(3)} color={pressedKeys[3] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="E" onClick={() => keyChange(4)} color={pressedKeys[4] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="F" onClick={() => keyChange(5)} color={pressedKeys[5] ? 'blue-700' : '#727777'}></Note>
            <div className="w-[5%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
            <Note note="G" onClick={() => keyChange(6)} color={pressedKeys[6] ? 'blue-700' : '#727777'}></Note>
          </div>
          {/* Divs with # and b */}
          <div className="flex flex-row basis-3/10 w-[30%] h-[100%] justify-evenly">
            <div className="flex basis-1/5 h-[100%]"></div>
            <div className="flex basis-4/5 h-full bg-[#727777] rounded-md">
              <SharpFlat accidental="#" onClick={() => accidentalsChange(0)} color={pressedAccs[0] ? 'blue-700' : "#727777"}></SharpFlat>
              <div className="w-[4%] h-[100%] top-[10%] bg-[#3D3D3D]"></div>
              <SharpFlat accidental="b" onClick={() => accidentalsChange(1)} color={pressedAccs[1] ? 'blue-700' : "#727777"}></SharpFlat>
            </div>
          </div>
        </div>
      </div>
        
    );
}


export function Note({note, onClick, color}) {

  const [colorNote, pressNote] = useState("[#727777]")
  // const [pressed, setPress] = useState(false)

  const changeColorNote = () => {

    if( colorNote == "blue-700" ){
      pressNote("[#727777]")

      // change K changes the 
      // changeK()
      // changeK()
      
    } else {
      pressNote("blue-700")
      // changeK()
      // console.log("note color: " + colorNote)
    }
  }


  return (
    <div className="relative flex basis-1/7 h-[100%] w-full items-center justify-center" onClick={changeColorNote}>
      {note === "A" ?
      <div className={`absolute w-[100%] h-full z-1 rounded-l-md bg-${color}`} onClick={onClick}>
        <div className="relative flex text-sm lg:max-xl:text-base xl:max-2xl:text-lg 2xl:text-xl  font-bold justify-center items-center">{note}</div>
      </div> : note === "G" ? 
      <div className={`absolute w-[100%] h-full z-1 rounded-r-md bg-${color}`} onClick={onClick}>
        <div className="relative flex text-sm lg:max-xl:text-base xl:max-2xl:text-lg 2xl:text-xl  font-bold justify-center items-center">{note}</div>
      </div> : 
        <div className={`absolute w-[100%] h-full z-1 bg-${color}`} onClick={onClick}>
          <div className="relative flex text-sm lg:max-xl:text-base xl:max-2xl:text-lg 2xl:text-xl font-bold justify-center items-center">{note}</div>
        </div>      
    },
    </div>
  );
}

export function SharpFlat({accidental, onClick, color}) {

  const [colorNote, pressNote] = useState("[#727777]")

  const changeColorNote = () => {
    if( colorNote == "blue-700" ){
      pressNote("[#727777]")
      // console.log("note color: " + colorNote)
    } else {
      pressNote("blue-700")
      // console.log("note color: " + colorNote)
    }
  }


  if(accidental === "#"){
   return (
      <div className="relative flex basis-1/2 h-[100%] items-center justify-center text-xl font-bold">
          <div className={"absolute w-full h-full rounded-l-md z-1" + ( " bg-" + color)} onClick={onClick}>
            <div className="relative w-full h-full flex text-sm lg:max-xl:text-base xl:max-2xl:text-lg 2xl:text-xl justify-center items-center">{accidental}</div>
          </div>
        </div>);
  }
  return (
        <div className="relative flex basis-1/2 h-[100%] items-center justify-center text-xl font-bold">
          <div className={"absolute w-full h-full rounded-r-md z-1" + ( " bg-" + color)} onClick={onClick}>
            <div className="relative w-full h-full flex text-sm lg:max-xl:text-base xl:max-2xl:text-lg 2xl:text-xl justify-center items-center">{accidental}</div>
          </div>
        </div> 
  );
}

export function NoteRep(items){
  // Determine the className based on the noteRep prop.
  const className = items.noteRep
    ? "bg-blue-700" // Active state
    : "bg-[#727777]"; // Inactive state with gray background

  const handleClick = () => {
    items.changeRep(); // Call the function passed from the parent to change the representation
    items.chRepNotes();
    console.log("Note representation changed to ..")
  };

  return (
    <div className="relative flex flex-row items-center h-full w-full cursor-pointer" onClick={handleClick}>
      <div className="flex justify-center items-center relative basis-4/5 h-full text-black font-semibold text-xs lg:max-xl:text-lg xl:text-xl">
        {items.text}
      </div>
      <div className="relative basis-2/5 h-full flex justify-center items-center">
        <div className={`relative rounded-full w-5 h-5 ${className} flex justify-center items-center`}>
          {!items.noteRep && (
            <React.Fragment>
              {/* These elements are only shown when noteRep is false (inactive) */}
              <div className="absolute rounded-full w-4 h-4 xl:w-5 xl:h-5  bg-[#727777]"></div>
              <div className="absolute rounded-full w-3 h-3 xl:w-3 xl:h-3  bg-[#3D3D3D]"></div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Key(items){

  const [pressedKeys, setPressedKeys] = useState([false, false, false, false, false, false, false]);

  const [pressedAccs, setAccidentals] = useState([false, false]);

  const keyChange = (index) => {
    // Create a new array to update the pressed keys
    const updatedKeys = [...pressedKeys];

    if( updatedKeys[index] === true ){
      // Reset all keys to false (not pressed)
      for (let i = 0; i < updatedKeys.length; i++) {
        updatedKeys[i] = false;
      }

    } else{
      // Reset all keys to false (not pressed)
      for (let i = 0; i < updatedKeys.length; i++) {
        updatedKeys[i] = false;
      }

      // Set the currently pressed key to true
      updatedKeys[index] = true;
    }

    const Keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    items.changeKey(Keys[index])
    
    // Update the state with the new array
    setPressedKeys(updatedKeys);
  };

  const accidentalsChange = (idx) => {
    // Create a new array to update the pressed keys
    const updatedAccs = [...pressedAccs];

    if( updatedAccs[idx] === true ){
      // Reset all keys to false (not pressed)
      for (let i = 0; i < updatedAccs.length; i++) {
        updatedAccs[i] = false;
      }
      items.changeAccidental('')
    } else{
      
      const Accs = ['#', 'b']

      // Reset all keys to false (not pressed)
      for (let i = 0; i < updatedAccs.length; i++) {
        updatedAccs[i] = false;
      }

      // Set the currently pressed key to true
      updatedAccs[idx] = true;
      items.changeAccidental(Accs[idx])
    }
    
    

    // Update the state with the new array
    setAccidentals(updatedAccs);
  }

  // if one is switched, transmit switch to parent so that the switch is implemented in the sibing
  const [noteRep, changeNoteRep] = useState([false, false])

  const changeNotesRep = (idx) => {
    // Create a new state array where all values are set to false
    const updatedNoteReps = noteRep.map(() => false);

    // Set the clicked button to true, toggling it on, and ensuring the other is off
    updatedNoteReps[idx] = !noteRep[idx];

    // Update the state with the new array
    changeNoteRep(updatedNoteReps);
  }


  return (
    <div className="relative left-0 top-[10%] w-full h-[80%] flex flex-col">
      <Keys pressedKeys={pressedKeys} pressedAccs={pressedAccs} keyChange={keyChange} accidentalsChange={accidentalsChange}></Keys>
      <div className="relative flex flex-col basis-1/2 items-center justify-center w-full md:h-auto ">
        <div className="flex h-1/2 items-center justify-center w-full text-black text-base md:max-lg:text-base lg:max-2xl:text-xl 2xl:text-2xl font-semibold">Note representation</div>
        <div className="flex flex-row left-[10%] w-[80%] h-1/2">
          <NoteRep text="Intervals" changeRep={() => changeNotesRep(0)} noteRep={noteRep[0]} chRepNotes={() => items.changeNoteRepres(0)}></NoteRep>
          <NoteRep text="Note name" changeRep={() => changeNotesRep(1)} noteRep={noteRep[1]} chRepNotes={() => items.changeNoteRepres(1)}></NoteRep>
        </div>
      </div>
    </div>
  );
}



