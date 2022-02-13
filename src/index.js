import { transpose , note } from '@tonaljs/tonal';
import { chord } from '@tonaljs/chord';
import { entries } from '@tonaljs/chord-dictionary';
import { Howler, howl } from 'howler';
import * as fs from 'fs';


const sound = new Howl({
    src: ['assets/GlassSprite.mp3'],
    onload() {
        console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror(e, msg) {
        console.log('Error', e, msg);
    }
});

console.log()

let startTime;

const startNotes = [-24, -23, -22, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
const startChords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
const startTypes = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]; 

const startNoteSelector = document.querySelector('#start-note');
const firstChordSelector = document.querySelector('#first-chord');
const secondChordSelector = document.querySelector('#second-chord');
const thirdChordSelector = document.querySelector('#third-chord');
const fourthChordSelector = document.querySelector('#fourth-chord');
const firstTypeSelector = document.querySelector('#first-type');
const secondTypeSelector = document.querySelector('#second-type');
const thirdTypeSelector = document.querySelector('#third-type');
const fourthTypeSelector = document.querySelector('#fourth-type');
const buttons = document.querySelector('.buttons');
const intervalsInChord = document.querySelector('.intervals-in-chord');
const notesInChord = document.querySelector('.notes-in-chord');

const doubleUpwards1Selector = document.querySelector('#upwards-1-1');
const doubleUpwards2Selector = document.querySelector('#upwards-1-2');
const doubleUpwards3Selector = document.querySelector('#upwards-1-3');
const doubleUpwards4Selector = document.querySelector('#upwards-1-4');
const doubleUpwards5Selector = document.querySelector('#upwards-1-5');
const doubleUpwards6Selector = document.querySelector('#upwards-1-6');
const doubleUpwards7Selector = document.querySelector('#upwards-1-7');
const doubleUpwards8Selector = document.querySelector('#upwards-1-8');

const octaveMultiplier1Selector = document.querySelector('#mult-1');
const octaveMultiplier2Selector = document.querySelector('#mult-2');
const octaveMultiplier3Selector = document.querySelector('#mult-3');
const octaveMultiplier4Selector = document.querySelector('#mult-4');
const octaveMultiplier5Selector = document.querySelector('#mult-5');
const octaveMultiplier6Selector = document.querySelector('#mult-6');
const octaveMultiplier7Selector = document.querySelector('#mult-7');
const octaveMultiplier8Selector = document.querySelector('#mult-8');

const octaveMultiplier9Selector = document.querySelector('#mult-9');
const octaveMultiplier10Selector = document.querySelector('#mult-10');
const octaveMultiplier11Selector = document.querySelector('#mult-11');
const octaveMultiplier12Selector = document.querySelector('#mult-12');
const octaveMultiplier13Selector = document.querySelector('#mult-13');
const octaveMultiplier14Selector = document.querySelector('#mult-14');
const octaveMultiplier15Selector = document.querySelector('#mult-15');
const octaveMultiplier16Selector = document.querySelector('#mult-16');

const octaveMultiplier17Selector = document.querySelector('#mult-17');
const octaveMultiplier18Selector = document.querySelector('#mult-18');
const octaveMultiplier19Selector = document.querySelector('#mult-19');
const octaveMultiplier20Selector = document.querySelector('#mult-20');
const octaveMultiplier21Selector = document.querySelector('#mult-21');
const octaveMultiplier22Selector = document.querySelector('#mult-22');
const octaveMultiplier23Selector = document.querySelector('#mult-23');
const octaveMultiplier24Selector = document.querySelector('#mult-24');

const octaveMultiplier25Selector = document.querySelector('#mult-25');
const octaveMultiplier26Selector = document.querySelector('#mult-26');
const octaveMultiplier27Selector = document.querySelector('#mult-27');
const octaveMultiplier28Selector = document.querySelector('#mult-28');
const octaveMultiplier29Selector = document.querySelector('#mult-29');
const octaveMultiplier30Selector = document.querySelector('#mult-30');
const octaveMultiplier31Selector = document.querySelector('#mult-31');
const octaveMultiplier32Selector = document.querySelector('#mult-32');

const semitoneOffset9Selector = document.querySelector('#offset-9');
const semitoneOffset10Selector = document.querySelector('#offset-10');
const semitoneOffset11Selector = document.querySelector('#offset-11');
const semitoneOffset12Selector = document.querySelector('#offset-12');
const semitoneOffset13Selector = document.querySelector('#offset-13');
const semitoneOffset14Selector = document.querySelector('#offset-14');
const semitoneOffset15Selector = document.querySelector('#offset-15');
const semitoneOffset16Selector = document.querySelector('#offset-16');

const semitoneOffset17Selector = document.querySelector('#offset-17');
const semitoneOffset18Selector = document.querySelector('#offset-18');
const semitoneOffset19Selector = document.querySelector('#offset-19');
const semitoneOffset20Selector = document.querySelector('#offset-20');
const semitoneOffset21Selector = document.querySelector('#offset-21');
const semitoneOffset22Selector = document.querySelector('#offset-22');
const semitoneOffset23Selector = document.querySelector('#offset-23');
const semitoneOffset24Selector = document.querySelector('#offset-24');

let selectedStartNote = 'C';
let selectedOctave = '1';
let selectedChord;

let key = 0;
let zeroChordRoot = 0;
let firstChordRoot = 0;
let secondChordRoot = 0;
let thirdChordRoot = 0;

let rootDoubler1 = 0;
let doubler12 = 0;
let doubler13 = 0;
let doubler14 = 0;
let doubler15 = 0;
let doubler16 = 0;
let doubler17 = 0;
let doubler18 = 0;

let doubleUpwards1 = false;
let doubleUpwards2 = false;
let doubleUpwards3 = false;
let doubleUpwards4 = false;
let doubleUpwards5 = false;
let doubleUpwards6 = false;
let doubleUpwards7 = false;
let doubleUpwards8 = false;


let rootDoubler2 = 0;
let rootDoubler3 = 0;
let rootDoubler4 = 0;

let octaveMultiplier1 = 0;
let octaveMultiplier2 = 0;
let octaveMultiplier3 = 0;
let octaveMultiplier4 = 0;
let octaveMultiplier5 = 0;
let octaveMultiplier6 = 0;
let octaveMultiplier7 = 0;
let octaveMultiplier8 = 0;

let octaveMultiplier9 = 0;
let octaveMultiplier10 = 0;
let octaveMultiplier11 = 0;
let octaveMultiplier12 = 0;
let octaveMultiplier13 = 0;
let octaveMultiplier14 = 0;
let octaveMultiplier15 = 0;
let octaveMultiplier16 = 0;

let octaveMultiplier17 = 0;
let octaveMultiplier18 = 0;
let octaveMultiplier19 = 0;
let octaveMultiplier20 = 0;
let octaveMultiplier21 = 0;
let octaveMultiplier22 = 0;
let octaveMultiplier23 = 0;
let octaveMultiplier24 = 0;

let octaveMultiplier25 = 0;
let octaveMultiplier26 = 0;
let octaveMultiplier27 = 0;
let octaveMultiplier28 = 0;
let octaveMultiplier29 = 0;
let octaveMultiplier30 = 0;
let octaveMultiplier31 = 0;
let octaveMultiplier32 = 0;

let semitoneOffset9 = 0;
let semitoneOffset10 = 0;
let semitoneOffset11 = 0;
let semitoneOffset12 = 0;
let semitoneOffset13 = 0;
let semitoneOffset14 = 0;
let semitoneOffset15 = 0;
let semitoneOffset16 = 0;

let semitoneOffset17 = 0;
let semitoneOffset18 = 0;
let semitoneOffset19 = 0;
let semitoneOffset20 = 0;
let semitoneOffset21 = 0;
let semitoneOffset22 = 0;
let semitoneOffset23 = 0;
let semitoneOffset24 = 0;

let zeroChordMinorOffset = 0;
let firstChordMinorOffset = 0;
let secondChordMinorOffset = 0;
let thirdChordMinorOffset = 0;

const rootOctaveOffsetSelector = document.querySelector('#root-pitch');
let rootOctaveOffset = 0;

const noteIds = [];

const app = {
    init() {
        /*
        var JZZ = require('jzz');
        require('jzz-midi-smf')(JZZ);
        var smf = new JZZ.MIDI.SMF(0, 96); // type 0, 96 ticks per quarter note
        var trk = new JZZ.MIDI.SMF.MTrk();
        smf.push(trk);
        // add contents:
        trk.add(0, JZZ.MIDI.smfSeqName('This is a sequence name'))
        .add(0, JZZ.MIDI.smfBPM(90)) // tempo 90 bpm
        .add(96, JZZ.MIDI.noteOn(0, 'C6', 127))
        .add(96, JZZ.MIDI.noteOn(0, 'Eb6', 127))
        .add(96, JZZ.MIDI.noteOn(0, 'G6', 127))
        .add(192, JZZ.MIDI.noteOff(0, 'C6'))
        .add(192, JZZ.MIDI.noteOff(0, 'Eb6'))
        .add(192, JZZ.MIDI.noteOff(0, 'G6'))
        .add(288, JZZ.MIDI.smfEndOfTrack());
        // or an alternative way:
        trk.smfSeqName('This is a sequence name').smfBPM(90).tick(96)
        .noteOn(0, 'C6', 127).noteOn(0, 'Eb6', 127).noteOn(0, 'G6', 127)
        .tick(96).noteOff(0, 'C6').noteOff(0, 'Eb6').noteOff(0, 'G6')
        .tick(96).smfEndOfTrack();
        // or even shorter:
        trk.smfSeqName('This is a sequence name').smfBPM(90).tick(96)
        .ch(0).note('C6', 127, 96).note('Eb6', 127, 96).note('G6', 127, 96)
        .tick(192).smfEndOfTrack();

        try {
            fs.writeFileSync('out.mid', smf.dump(), 'binary');
        } catch (err) {
            console.log('Error writing Metadata.json:' + err.message)
        }
        */
        /*
        const fs = require('fs');
  
        let data = "This is a file containing a collection"
                + " of programming languages.\n"
        + "1. C\n2. C++\n3. Python";
        
        fs.writeFileSync("programming.txt", data);
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("programming.txt", "utf8"));
        */
        this.setupStartNotes();
        this.setupEventListeners();
        startTime = Date.now();
    },
    setupStartNotes() {
        startNotes.forEach(noteName => {
            let noteNameOption = this.createElement('option', noteName);
            startNoteSelector.appendChild(noteNameOption);
        });

        startChords.forEach(chordName => {
            let chordNameOption = this.createElement('option', chordName);
            secondChordSelector.appendChild(chordNameOption);
        });

        startChords.forEach(chordName => {
            let chordNameOption = this.createElement('option', chordName);
            thirdChordSelector.appendChild(chordNameOption);
        });

        startChords.forEach(chordName => {
            let chordNameOption = this.createElement('option', chordName);
            fourthChordSelector.appendChild(chordNameOption);
        });

        startTypes.forEach(typeName => {
            let typeNameOption = this.createElement('option', typeName);
            firstTypeSelector.appendChild(typeNameOption);
        });

        startTypes.forEach(typeName => {
            let typeNameOption = this.createElement('option', typeName);
            secondTypeSelector.appendChild(typeNameOption);
        });

        startTypes.forEach(typeName => {
            let typeNameOption = this.createElement('option', typeName);
            thirdTypeSelector.appendChild(typeNameOption);
        });

        startTypes.forEach(typeName => {
            let typeNameOption = this.createElement('option', typeName);
            fourthTypeSelector.appendChild(typeNameOption);
        });
    },
    setupEventListeners() {
        startNoteSelector.addEventListener('change', () => {
            key = parseInt(startNoteSelector.value);
            zeroChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(firstChordSelector.value));
            firstChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(firstChordRoot));
            secondChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(secondChordRoot));
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(thirdChordRoot));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
        });
        secondChordSelector.addEventListener('change', () => {
            firstChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(secondChordSelector.value));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
        });
        thirdChordSelector.addEventListener('change', () => {
            secondChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(thirdChordSelector.value));
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
        });
        fourthChordSelector.addEventListener('change', () => {
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(fourthChordSelector.value));
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
        });
        firstTypeSelector.addEventListener('change', () => {
            zeroChordMinorOffset = parseInt(firstTypeSelector.value);
            firstChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(firstChordRoot));
            secondChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(secondChordRoot));
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(thirdChordRoot));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
        });
        secondTypeSelector.addEventListener('click', () => {
            if(firstChordMinorOffset == 0) firstChordMinorOffset = -1;
            else if(firstChordMinorOffset == -1) firstChordMinorOffset = 0;
        });
        thirdTypeSelector.addEventListener('click', () => {
            if(secondChordMinorOffset == 0) secondChordMinorOffset = -1;
            else if(secondChordMinorOffset == -1) secondChordMinorOffset = 0;
        });
        fourthTypeSelector.addEventListener('click', () => {
            if(thirdChordMinorOffset == 0) thirdChordMinorOffset = -1;
            else if(thirdChordMinorOffset == -1) thirdChordMinorOffset = 0;
        });

        rootOctaveOffsetSelector.addEventListener('change', () => { 
            rootOctaveOffset = parseInt(rootOctaveOffsetSelector.value);
        })

        octaveMultiplier1Selector.addEventListener('change', () => { 
            octaveMultiplier1 = parseInt(octaveMultiplier1Selector.value); 
            console.log("octave multiplier works");
        })
        octaveMultiplier2Selector.addEventListener('change', () => { 
            octaveMultiplier2 = parseInt(octaveMultiplier2Selector.value); 
        })
        octaveMultiplier3Selector.addEventListener('change', () => { 
            octaveMultiplier3 = parseInt(octaveMultiplier3Selector.value); 
        })
        octaveMultiplier4Selector.addEventListener('change', () => { 
            octaveMultiplier4 = parseInt(octaveMultiplier4Selector.value); 
        })
        octaveMultiplier5Selector.addEventListener('change', () => { 
            octaveMultiplier5 = parseInt(octaveMultiplier5Selector.value); 
        })
        octaveMultiplier6Selector.addEventListener('change', () => { 
            octaveMultiplier6 = parseInt(octaveMultiplier6Selector.value); 
        })
        octaveMultiplier7Selector.addEventListener('change', () => { 
            octaveMultiplier7 = parseInt(octaveMultiplier7Selector.value); 
        })
        octaveMultiplier8Selector.addEventListener('change', () => { 
            octaveMultiplier8 = parseInt(octaveMultiplier8Selector.value); 
        })

        octaveMultiplier9Selector.addEventListener('change', () => { 
            octaveMultiplier9 = parseInt(octaveMultiplier9Selector.value); 
        })
        octaveMultiplier10Selector.addEventListener('change', () => { 
            octaveMultiplier10 = parseInt(octaveMultiplier10Selector.value); 
        })
        octaveMultiplier11Selector.addEventListener('change', () => { 
            octaveMultiplier11 = parseInt(octaveMultiplier11Selector.value); 
        })
        octaveMultiplier12Selector.addEventListener('change', () => { 
            octaveMultiplier12 = parseInt(octaveMultiplier12Selector.value); 
        })
        octaveMultiplier13Selector.addEventListener('change', () => { 
            octaveMultiplier13 = parseInt(octaveMultiplier13Selector.value); 
        })
        octaveMultiplier14Selector.addEventListener('change', () => { 
            octaveMultiplier14 = parseInt(octaveMultiplier14Selector.value); 
        })
        octaveMultiplier15Selector.addEventListener('change', () => { 
            octaveMultiplier15 = parseInt(octaveMultiplier15Selector.value); 
        })
        octaveMultiplier16Selector.addEventListener('change', () => { 
            octaveMultiplier16 = parseInt(octaveMultiplier16Selector.value); 
        })

        octaveMultiplier17Selector.addEventListener('change', () => { 
            octaveMultiplier17 = parseInt(octaveMultiplier17Selector.value); 
        })
        octaveMultiplier18Selector.addEventListener('change', () => { 
            octaveMultiplier18 = parseInt(octaveMultiplier18Selector.value); 
        })
        octaveMultiplier19Selector.addEventListener('change', () => { 
            octaveMultiplier19 = parseInt(octaveMultiplier19Selector.value); 
        })
        octaveMultiplier20Selector.addEventListener('change', () => { 
            octaveMultiplier20 = parseInt(octaveMultiplier20Selector.value); 
        })
        octaveMultiplier21Selector.addEventListener('change', () => { 
            octaveMultiplier21 = parseInt(octaveMultiplier21Selector.value); 
        })
        octaveMultiplier22Selector.addEventListener('change', () => { 
            octaveMultiplier22 = parseInt(octaveMultiplier22Selector.value); 
        })
        octaveMultiplier23Selector.addEventListener('change', () => { 
            octaveMultiplier23 = parseInt(octaveMultiplier23Selector.value); 
        })
        octaveMultiplier24Selector.addEventListener('change', () => { 
            octaveMultiplier24 = parseInt(octaveMultiplier24Selector.value); 
        })

        octaveMultiplier25Selector.addEventListener('change', () => { 
            octaveMultiplier25 = parseInt(octaveMultiplier25Selector.value); 
        })
        octaveMultiplier26Selector.addEventListener('change', () => { 
            octaveMultiplier26 = parseInt(octaveMultiplier26Selector.value); 
        })
        octaveMultiplier27Selector.addEventListener('change', () => { 
            octaveMultiplier27 = parseInt(octaveMultiplier27Selector.value); 
        })
        octaveMultiplier28Selector.addEventListener('change', () => { 
            octaveMultiplier28 = parseInt(octaveMultiplier28Selector.value); 
        })
        octaveMultiplier29Selector.addEventListener('change', () => { 
            octaveMultiplier29 = parseInt(octaveMultiplier29Selector.value); 
        })
        octaveMultiplier30Selector.addEventListener('change', () => { 
            octaveMultiplier30 = parseInt(octaveMultiplier30Selector.value); 
        })
        octaveMultiplier31Selector.addEventListener('change', () => { 
            octaveMultiplier31 = parseInt(octaveMultiplier31Selector.value); 
        })
        octaveMultiplier32Selector.addEventListener('change', () => { 
            octaveMultiplier32 = parseInt(octaveMultiplier32Selector.value); 
        })

        document.addEventListener('keydown', (event) => {
            if (event.key === '1') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                
                //soundEngine.playNote(16+zeroChordRoot+key);
                soundEngine.playNote(24+0+(12*octaveMultiplier1)+zeroChordRoot+key+(rootOctaveOffset*12));
                console.log(rootOctaveOffset);
                console.log(24+0+(12*octaveMultiplier1)+zeroChordRoot+key+(rootOctaveOffset*12));
                //soundEngine.playNote(24+12+zeroChordRoot+key);
                //soundEngine.playNote(24+24+zeroChordRoot+key);
            }
            if (event.key === '2') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+4+(12*octaveMultiplier2)+zeroChordRoot+zeroChordMinorOffset+key);
                //this.doubleNote(24+4+zeroChordRoot+zeroChordMinorOffset+key, doubler12);
            }
            if (event.key === '3') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(12*octaveMultiplier3)+zeroChordRoot+key);
            }
            if (event.key === '4') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier4)+zeroChordRoot+zeroChordMinorOffset+key);
            }
            if (event.key === '5') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                
                soundEngine.playNote(24+14+(12*octaveMultiplier5)+zeroChordRoot+key);
                //soundEngine.playNote(8+0+key);
            }
            if (event.key === '6') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+16+(12*octaveMultiplier6)+zeroChordRoot+zeroChordMinorOffset+key);
                //soundEngine.playNote(8+4+key);
            }
            if (event.key === '7') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(12*octaveMultiplier7)+zeroChordRoot+key);
                //soundEngine.playNote(8+7+key);
            }
            if (event.key === '8') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+0+(12*octaveMultiplier8)+zeroChordRoot+key);
                //soundEngine.playNote(8+11+key+zeroChordRoot);
            }
            
            if (event.key === 'q') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+firstChordRoot+key);
                soundEngine.playNote(24+0+(12*octaveMultiplier9)+semitoneOffset9+firstChordRoot+key+(rootOctaveOffset*12));
                //soundEngine.playNote(24+12+firstChordRoot+key);
            }
            if (event.key === 'w') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+4+(12*octaveMultiplier10)+semitoneOffset10+firstChordRoot+firstChordMinorOffset+key);
            }
            if (event.key === 'e') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(12*octaveMultiplier11)+semitoneOffset11+firstChordRoot+key);
            }
            if (event.key === 'r') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier12)+semitoneOffset12+firstChordRoot+firstChordMinorOffset+key);
            }
            if (event.key === 't') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                
                soundEngine.playNote(24+14+(12*octaveMultiplier13)+semitoneOffset13+firstChordRoot+key);
                //soundEngine.playNote(8+0+key+firstChordRoot);
            }
            if (event.key === 'y') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+16+(12*octaveMultiplier14)+semitoneOffset14+firstChordRoot+firstChordMinorOffset+key);
                //soundEngine.playNote(8+4+key+firstChordRoot);
            }
            if (event.key === 'u') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(12*octaveMultiplier15)+semitoneOffset15+firstChordRoot+key);
                //soundEngine.playNote(8+7+key+firstChordRoot);
            }
            if (event.key === 'i') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier16)+semitoneOffset16+firstChordRoot+firstChordMinorOffset+key);
                //soundEngine.playNote(8+11+key+firstChordRoot);
            }

            if (event.key === 'a') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+secondChordRoot+key);
                soundEngine.playNote(24+0+(12*octaveMultiplier17)+semitoneOffset17+secondChordRoot+key+(rootOctaveOffset*12));
            }
            if (event.key === 's') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+4+(12*octaveMultiplier18)+semitoneOffset18+secondChordRoot+secondChordMinorOffset+key);
                console.log("oct mult: " + octaveMultiplier18);
            }
            if (event.key === 'd') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(12*octaveMultiplier19)+semitoneOffset19+secondChordRoot+key);
            }
            if (event.key === 'f') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier20)+semitoneOffset20+secondChordRoot+secondChordMinorOffset+key);
            }
            if (event.key === 'g') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+14+(12*octaveMultiplier21)+semitoneOffset21+secondChordRoot+key);
                //soundEngine.playNote(8+0+key+secondChordRoot);
            }
            if (event.key === 'h') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+16+(12*octaveMultiplier22)+semitoneOffset22+secondChordRoot+secondChordMinorOffset+key);
                //soundEngine.playNote(8+4+key+secondChordRoot);
            }
            if (event.key === 'j') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(12*octaveMultiplier23)+semitoneOffset23+secondChordRoot+key);
                //soundEngine.playNote(8+7+key+secondChordRoot);
            }
            if (event.key === 'k') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier24)+semitoneOffset24+secondChordRoot+secondChordMinorOffset+key);
            }
            
            if (event.key === 'z') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+thirdChordRoot+key);
                soundEngine.playNote(24+0+(12*octaveMultiplier25)+thirdChordRoot+key+(rootOctaveOffset*12));
                //soundEngine.playNote(24+12+0+thirdChordRoot+key);
            }
            if (event.key === 'x') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+4+(12*octaveMultiplier26)+thirdChordRoot+thirdChordMinorOffset+key);
            }
            if (event.key === 'c') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(12*octaveMultiplier27)+thirdChordRoot+key);
            }
            if (event.key === 'v') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier28)+thirdChordRoot+thirdChordMinorOffset+key);
            }
            if (event.key === 'b') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+14+(12*octaveMultiplier29)+thirdChordRoot+key);
                //soundEngine.playNote(8+0+key+thirdChordRoot);
            }
            if (event.key === 'n') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+16+(12*octaveMultiplier30)+thirdChordRoot+thirdChordMinorOffset+key);
                //soundEngine.playNote(8+4+key+thirdChordRoot);
            }
            if (event.key === 'm') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(12*octaveMultiplier31)+thirdChordRoot+key);
                //soundEngine.playNote(8+7+key+thirdChordRoot);
            }
            if (event.key === ',') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(12*octaveMultiplier32)+thirdChordRoot+thirdChordMinorOffset+key);
                //soundEngine.playNote(8+11+key+thirdChordRoot);
            }
            
            //console.log(event.keyCode);
        });
    },
    displayAndPlayChord(selectedChord) {
        let chordIntervals = chord(selectedChord).intervals;
        intervalsInChord.innerText = chordIntervals.join(' - ');
        
        const startNoteWithOctave = selectedStartNote + selectedOctave;
        let chordNotes = chordIntervals.map(val => {
            return transpose(startNoteWithOctave, val);
        });
        notesInChord.innerText = chordNotes.join(' - ');
        soundEngine.play(chordNotes);
    },
    changeToMinorOrMajor(note) {
        var offset = 0;
        if(zeroChordMinorOffset == 0)
        {
            if(note == 0) offset = 0;
            else if(note == 2) offset = -1;
            else if(note == 4) offset = -1;
            else if(note == 5) offset = 0;
            else if(note == 7) offset = 0;
            else if(note == 9) offset = -1;
            else if(note == 11) offset = -1;
        }
        else if(zeroChordMinorOffset == -1)
        {
            if(note == 0) offset = -1;
            else if(note == 2) offset = 0;
            else if(note == 3) offset = 0;
            else if(note == 5) offset = -1;
            else if(note == 7) offset = -1;
            else if(note == 8) offset = 0;
            else if(note == 10) offset = 0;
        }
        return offset;
    },
    getCorrectMinorAndMajorRoot(note) {
        var semitone = 0;
        if(zeroChordMinorOffset == 0)
        {
            if(note == 0) semitone = 0;
            else if(note == 1) semitone = 2;
            else if(note == 2) semitone = 4;
            else if(note == 3) semitone = 5;
            else if(note == 4) semitone = 7;
            else if(note == 5) semitone = 9;
            else if(note == 6) semitone = 11;
        }
        else if(zeroChordMinorOffset == -1)
        {
            if(note == 0) semitone = 0;
            else if(note == 1) semitone = 2;
            else if(note == 2) semitone = 3;
            else if(note == 3) semitone = 5;
            else if(note == 4) semitone = 7;
            else if(note == 5) semitone = 8;
            else if(note == 6) semitone = 10;
        }
        return semitone;
    },
    getCorrectMinorAndMajorRootFromSemitone(semitone) {
        var note = 0;
        if(semitone == 0) note = 0;
        else if(semitone == 2) note = 1;
        else if(semitone == 3 || semitone == 4) note = 2;
        else if(semitone == 5) note = 3;
        else if(semitone == 7) note = 4;
        else if(semitone == 8 || semitone == 9) note = 5;
        else if(semitone == 10 || semitone == 11) note = 6;
        return note;
    },
    //you could make this able to double notes upwards as well
    doubleNote(noteRoot, doubleAmt, doubleUpwards) {
        //for(i = 1; i <= doubleAmt; i++)
        //{
            //octave multiplier is not included by design
            if(doubleUpwards) soundEngine.playNote(noteRoot+(12*doubleAmt));
            else soundEngine.playNote(noteRoot+(12*-doubleAmt));
        //}
    },
    createElement(elementName, content) {
        let element = document.createElement(elementName);
        element.innerHTML = content;
        return element;
    }
}

const soundEngine = {
    init() {
        const lengthOfNote = 2400;
        let timeIndex = 0;
        for (let i = 0; i <= 96; i++) {
            sound['_sprite'][i] = [timeIndex, lengthOfNote];
            timeIndex += lengthOfNote;
        }
        
    },
    playNote(noteNumber) {
        sound.play(noteNumber.toString());
        console.log((Date.now() - startTime) + " " + noteNumber);
    },
    play(soundSequence) {

        const chordMidiNumbers = soundSequence.map(noteName => {
            return note(noteName).midi;
        });
        sound.volume(1);
        chordMidiNumbers.forEach(noteMidiNumber => {
            
            sound.play(noteMidiNumber.toString());
        });
    }
}

app.init();
