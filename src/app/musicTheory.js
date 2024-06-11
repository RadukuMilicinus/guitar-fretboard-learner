import {Scale, Interval, Note, Chord, transpose} from "tonal";

var fretboard = [['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'E'], 
                 ['A', 'A#', 'B', 'C', 'C#', 'D', 'E', 'F', 'F#', 'G', 'G#', 'A'], 
                 ['D', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'], 
                 ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'E', 'F', 'F#', 'G'], 
                 ['B', 'C', 'C#', 'D', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'], 
                 ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'E']]


var Cmaj = Scale.get("C major").notes;
var Ddim = Scale.get("D diminished").notes
console.log(Cmaj);
console.log(Ddim);


  
var notesString = fretboard[2]
console.log(notesString)

var DbMaj = Scale.get("Db major").notes
console.log(DbMaj)

var s = "D"
console.log(s.split("/"))

var CmajPent = Scale.get("C major pentatonic").notes
console.log(CmajPent)

console.log("Major Pentatonic".toLowerCase())

var CmajSeven = Chord.get("C maj7").notes
console.log("Cmaj7: %s", CmajSeven)

var Csus2 = Chord.get("C sus2").notes
console.log("Csus2: %s", Csus2)


// P - perfect interval (root, 4th, 5th, 6th)
// G - G = 1P
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
var root = "G"
var note = "Bb"
console.log("Distance between note %s and root %s: %s", note, root, Interval.distance(root, note));

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
  } 

  return interval
}

console.log("The interval between %s and %s is %s", note, root, getInterval(root, note))

var key = "C"
var interval = Interval.fromSemitones(6)
var newNote = transpose(key, interval)
console.log("newNote = %s", newNote)


console.log("\n\n\n")

// Chord.get(keyChosen + accidental + " " +  changeName(chordType.toLowerCase())).notes 

console.log(Chord.get('A#' + " minor").notes)
console.log(Scale.get('B' + " Ionian").notes)

function isInScaleOrChordOrInterval(note, chosenNotes, keyChosen, accidental, scale, chordType) {
  console.log("checking if is in scale or chord or interval %s", note);
  console.log("Note is = " + note + ", chosenNotes = " + chosenNotes + ", keyChosen " + keyChosen + accidental + ", scale = " + scale + ", chordType = " + chordType);

  if (chosenNotes.length > 0) {
    console.log("chosenNotes = " + chosenNotes);
    return chosenNotes.some((chosenNote) => {
      console.log(note + " is from the scale");
      if (note === chosenNote) {
        console.log(note + " is from the chosen notes");
        return true;
      }
      return false;
    });
  } else if (scale !== '') {
    const sc = Scale.get(keyChosen + accidental + " " + scale.toLowerCase()).notes;
    console.log("scale = " + sc);
    return sc.some((scNote) => {
      console.log("Looking in scale");
      if (scNote === note) {
        console.log(note + " is from the scale");
        return true;
      }
      return false;
    });
  } else if (chordType !== '') {
    const ch = Chord.get(keyChosen + accidental + " " + chordType.toLowerCase()).notes;
    console.log("chord = " + ch);
    return ch.some((chNote) => {
      console.log("Looking in chord");
      if (chNote === note) {
        console.log(note + " is from the chord");
        return true;
      }
      return false;
    });
  }
  return false;
}

console.log("is G from C major = " + isInScaleOrChordOrInterval('G', '', 'C', '', '', 'major'))

console.log("C major 7 notes = " + Chord.chord('C maj7').notes)
console.log("C major 9 notes = " + Chord.chord('C maj7').notes)



console.log("C7 notes = " + Chord.chord('C7').notes)
console.log("Cm7b5 notes = " + Chord.chord('Cm7b5').notes)
console.log("Cmaj7#11 notes = " + Chord.chord('Cmaj7#11').notes)

console.log("Cmin9 notes = " + Chord.chord('Cmin9').notes)