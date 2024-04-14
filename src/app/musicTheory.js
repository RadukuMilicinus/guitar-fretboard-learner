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