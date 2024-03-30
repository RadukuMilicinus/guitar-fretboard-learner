import {Scale, Interval, Note, Chord} from "tonal";

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