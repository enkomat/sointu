import { transpose , note } from '@tonaljs/tonal';
import { chord } from '@tonaljs/chord';
import { entries } from '@tonaljs/chord-dictionary';
import { Howler, howl } from 'howler';
import 'custom-piano-keys'

const browserFs = require('browser-fs-access');

const MidiWriter = require('midi-writer-js');

var pianokeys = document.createElement("custom-piano-keys")
pianokeys.setAttribute("oct-count", "5")
pianokeys.setAttribute("height", "101.25")
pianokeys.setAttribute("stroke-w", "1")
pianokeys.setAttribute("mark-color", "black")
pianokeys.setAttribute("mark-diameter", "75")
pianokeys.setAttribute("b-key-h", "50")
pianokeys.setAttribute("mark-shape", "rect")
element = document.getElementById("div1");
element.insertBefore(pianokeys, element.firstChild);

let track = new MidiWriter.Track();

let write = new MidiWriter.Writer(track);

/*
const MidiWriter = require('midi-writer-js');

// Start with a new track
const track = new MidiWriter.Track();

// Define an instrument (optional):
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}));

// Add some notes:
const note = new MidiWriter.NoteEvent({pitch: ['C4', 'D4', 'E4'], duration: '4'});
track.addEvent(note);

// Generate a data URI
const write = new MidiWriter.Writer(track);
console.log(write.buildData());
var data = write.buildData();

const options = {
    // Suggested file name to use, defaults to `''`.
    fileName: 'Test.json',
    // Suggested file extensions (with leading '.'), defaults to `''`.
    extensions: ['.json']
  };

blob = new Blob(data);

browserFs.fileSave(blob, options);
*/

const sound = new Howl({
    src: ['assets/WurliSprite3.mp3'],
    onload() {
        console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror(e, msg) {
        console.log('Error', e, msg);
    }
});

const metronome = new Howl({
    src: ['assets/loMetro.mp3']
});

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
const recordButtonSelector = document.querySelector('#record-button');
const downloadButtonSelector = document.querySelector('#download-button');

const doubleUpwards1Selector = document.querySelector('#upwards-1-1');
const doubleUpwards2Selector = document.querySelector('#upwards-1-2');
const doubleUpwards3Selector = document.querySelector('#upwards-1-3');
const doubleUpwards4Selector = document.querySelector('#upwards-1-4');
const doubleUpwards5Selector = document.querySelector('#upwards-1-5');
const doubleUpwards6Selector = document.querySelector('#upwards-1-6');
const doubleUpwards7Selector = document.querySelector('#upwards-1-7');
const doubleUpwards8Selector = document.querySelector('#upwards-1-8');

const octaveTranspose1Selector = document.querySelector('#oct-1');
const octaveTranspose2Selector = document.querySelector('#oct-2');
const octaveTranspose3Selector = document.querySelector('#oct-3');
const octaveTranspose4Selector = document.querySelector('#oct-4');

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

const semitoneOffset1Selector = document.querySelector('#offset-1');
const semitoneOffset2Selector = document.querySelector('#offset-2');
const semitoneOffset3Selector = document.querySelector('#offset-3');
const semitoneOffset4Selector = document.querySelector('#offset-4');
const semitoneOffset5Selector = document.querySelector('#offset-5');
const semitoneOffset6Selector = document.querySelector('#offset-6');
const semitoneOffset7Selector = document.querySelector('#offset-7');
const semitoneOffset8Selector = document.querySelector('#offset-8');

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

const semitoneOffset25Selector = document.querySelector('#offset-25');
const semitoneOffset26Selector = document.querySelector('#offset-26');
const semitoneOffset27Selector = document.querySelector('#offset-27');
const semitoneOffset28Selector = document.querySelector('#offset-28');
const semitoneOffset29Selector = document.querySelector('#offset-29');
const semitoneOffset30Selector = document.querySelector('#offset-30');
const semitoneOffset31Selector = document.querySelector('#offset-31');
const semitoneOffset32Selector = document.querySelector('#offset-32');

const rootDoublerSelector1 = document.querySelector('#doubler-1');
const rootDoublerSelector2 = document.querySelector('#doubler-2');
const rootDoublerSelector3 = document.querySelector('#doubler-3');
const rootDoublerSelector4 = document.querySelector('#doubler-4');

let selectedStartNote = 'C';
let selectedOctave = '1';
let selectedChord;

let key = 0;
let zeroChordRoot = 0;
let firstChordRoot = 0;
let secondChordRoot = 0;
let thirdChordRoot = 0;

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

let rootDoubler1 = 0;
let rootDoubler2 = 0;
let rootDoubler3 = 0;
let rootDoubler4 = 0;

let octaveTranspose1 = 0;
let octaveTranspose2 = 0;
let octaveTranspose3 = 0;
let octaveTranspose4 = 0;

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

let semitoneOffset1 = 0;
let semitoneOffset2 = 0;
let semitoneOffset3 = 0;
let semitoneOffset4 = 0;
let semitoneOffset5 = 0;
let semitoneOffset6 = 0;
let semitoneOffset7 = 0;
let semitoneOffset8 = 0;

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

let recording = false;

var tickInterval;
var metronomeInterval;
var waitTime = 0;
var writableNotes = [];
var lastNoteString;
let counter = 0;
let tickAmt = 0;
let pressedFirstNote = false;

let markedKeys = [];

let noteIds = new Array(100);
let pressedNotes = [];
for(i = 0; i < 100; i++) pressedNotes.push(false);

const include1Selector = document.querySelector('#inc-1');
const include2Selector  = document.querySelector('#inc-2');
const include3Selector  = document.querySelector('#inc-3');
const include4Selector  = document.querySelector('#inc-4');
const include5Selector  = document.querySelector('#inc-5');
const include6Selector  = document.querySelector('#inc-6');
const include7Selector  = document.querySelector('#inc-7');
const include8Selector  = document.querySelector('#inc-8');

const include9Selector = document.querySelector('#inc-9');
const include10Selector  = document.querySelector('#inc-10');
const include11Selector  = document.querySelector('#inc-11');
const include12Selector  = document.querySelector('#inc-12');
const include13Selector  = document.querySelector('#inc-13');
const include14Selector  = document.querySelector('#inc-14');
const include15Selector  = document.querySelector('#inc-15');
const include16Selector  = document.querySelector('#inc-16');

const include17Selector = document.querySelector('#inc-17');
const include18Selector  = document.querySelector('#inc-18');
const include19Selector  = document.querySelector('#inc-19');
const include20Selector  = document.querySelector('#inc-20');
const include21Selector  = document.querySelector('#inc-21');
const include22Selector  = document.querySelector('#inc-22');
const include23Selector  = document.querySelector('#inc-23');
const include24Selector  = document.querySelector('#inc-24');

let include1 = true;
let include2 = true;
let include3 = true;
let include4 = true;
let include5 = false;
let include6 = false;
let include7 = false;
let include8 = false;

let include9 = true;
let include10 = true;
let include11 = true;
let include12 = true;
let include13 = false;
let include14 = false;
let include15 = false;
let include16 = false;

let include17 = true;
let include18 = true;
let include19 = true;
let include20 = true;
let include21 = false;
let include22 = false;
let include23 = false;
let include24 = false;

let include25 = true;
let include26 = true;
let include27 = true;
let include28 = true;
let include29 = true;
let include30 = true;
let include31 = true;
let include32 = true;

const sustainSelector = document.querySelector('#sustain');
const tempoSelector = document.querySelector('#tempo');
let sustainOn = true;
let dataUri;
let tempo = 90;

const app = {
    init() {
        /*
        var track = [];
        var write = new MidiWriter.Writer(track);
        var buffer = new Buffer(write.buildFile());
        fs.writeFile('my-midi-file.mid', buffer, function (err) {
            if(err) throw err;
        });
        */
        firstChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(secondChordSelector.value));
        firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
        secondChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(thirdChordSelector.value));
        secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
        thirdChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(fourthChordSelector.value));
        this.setupEventListeners();
        startTime = Date.now();
    },
    setupEventListeners() {
        recordButtonSelector.addEventListener('click', () => {
            recording = !recording;
            if(recording) 
            {
                recordButtonSelector.value = "■";
                this.startRecording();
            }
            else
            {
                recordButtonSelector.value = "●";
                this.stopRecording();
            }
        });
        downloadButtonSelector.addEventListener('click', () => {
            window.open(dataUri);
        });
        /*
        include1Selector.addEventListener('change', () => {
            include1 = !include1;
        });
        include2Selector.addEventListener('change', () => {
            include2 = !include2;
        });
        include3Selector.addEventListener('change', () => {
            include3 = !include3;
        });
        include4Selector.addEventListener('change', () => {
            include4 = !include4;
        });
        include5Selector.addEventListener('change', () => {
            include5 = !include5;
        });
        include6Selector.addEventListener('change', () => {
            include6 = !include6;
        });
        include7Selector.addEventListener('change', () => {
            include7 = !include7;
        });
        include8Selector.addEventListener('change', () => {
            include8 = !include8;
        });
        include9Selector.addEventListener('change', () => {
            include9 = !include9;
        });
        include10Selector.addEventListener('change', () => {
            include10 = !include10;
        });
        include11Selector.addEventListener('change', () => {
            include11 = !include11;
        });
        include12Selector.addEventListener('change', () => {
            include12 = !include12;
        });
        include13Selector.addEventListener('change', () => {
            include13 = !include13;
        });
        include14Selector.addEventListener('change', () => {
            include14 = !include14;
        });
        include15Selector.addEventListener('change', () => {
            include15 = !include15;
        });
        include16Selector.addEventListener('change', () => {
            include16 = !include16;
        });
        include17Selector.addEventListener('change', () => {
            include17 = !include17;
        });
        include18Selector.addEventListener('change', () => {
            include18 = !include18;
        });
        include19Selector.addEventListener('change', () => {
            include19 = !include19;
        });
        include20Selector.addEventListener('change', () => {
            include20 = !include20;
        });
        include21Selector.addEventListener('change', () => {
            include21 = !include21;
        });
        include22Selector.addEventListener('change', () => {
            include22 = !include22;
        });
        include23Selector.addEventListener('change', () => {
            include23 = !include23;
        });
        include24Selector.addEventListener('change', () => {
            include24 = !include24;
        });
        */
        sustainSelector.addEventListener('change', () => {
            sustainOn = !sustainOn;
        });
        tempoSelector.addEventListener('change', () => {
            tempo = parseInt(tempoSelector.value);
            console.log(tempo);
        });
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
        firstTypeSelector.addEventListener('click', () => {
            if(zeroChordMinorOffset == 0) zeroChordMinorOffset = -1;
            else if(zeroChordMinorOffset == -1) zeroChordMinorOffset = 0;
            firstChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(firstChordRoot));
            secondChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(secondChordRoot));
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(thirdChordRoot));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
            console.log(zeroChordMinorOffset);
        });
        secondTypeSelector.addEventListener('click', () => {
            if(firstChordMinorOffset == 0) firstChordMinorOffset = -1;
            else if(firstChordMinorOffset == -1) firstChordMinorOffset = 0;
            console.log(firstChordMinorOffset);
        });
        thirdTypeSelector.addEventListener('click', () => {
            if(secondChordMinorOffset == 0) secondChordMinorOffset = -1;
            else if(secondChordMinorOffset == -1) secondChordMinorOffset = 0;
            console.log(secondChordMinorOffset);
        });
        fourthTypeSelector.addEventListener('click', () => {
            if(thirdChordMinorOffset == 0) thirdChordMinorOffset = -1;
            else if(thirdChordMinorOffset == -1) thirdChordMinorOffset = 0;
        });

        /*
        octaveTranspose2Selector.addEventListener('change', () => { 
            octaveTranspose2 = parseInt(octaveTranspose2Selector.value); 
        })

        octaveTranspose3Selector.addEventListener('change', () => { 
            octaveTranspose3 = parseInt(octaveTranspose3Selector.value); 
        })

        octaveTranspose4Selector.addEventListener('change', () => { 
            octaveTranspose4 = parseInt(octaveTranspose4Selector.value); 
        })
        */

        octaveMultiplier1Selector.addEventListener('change', () => { 
            octaveMultiplier1 = parseInt(octaveMultiplier1Selector.value);
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
        
        semitoneOffset1Selector.addEventListener('change', () => { 
            semitoneOffset1 = parseInt(semitoneOffset1Selector.value); 
        })
        semitoneOffset2Selector.addEventListener('change', () => { 
            semitoneOffset2 = parseInt(semitoneOffset2Selector.value); 
        })
        semitoneOffset3Selector.addEventListener('change', () => { 
            semitoneOffset3 = parseInt(semitoneOffset3Selector.value); 
        })
        semitoneOffset4Selector.addEventListener('change', () => { 
            semitoneOffset4 = parseInt(semitoneOffset4Selector.value); 
        })
        semitoneOffset5Selector.addEventListener('change', () => { 
            semitoneOffset5 = parseInt(semitoneOffset5Selector.value); 
        })
        semitoneOffset6Selector.addEventListener('change', () => { 
            semitoneOffset6 = parseInt(semitoneOffset6Selector.value); 
        })
        semitoneOffset7Selector.addEventListener('change', () => { 
            semitoneOffset7 = parseInt(semitoneOffset7Selector.value); 
        })
        semitoneOffset8Selector.addEventListener('change', () => { 
            semitoneOffset8 = parseInt(semitoneOffset8Selector.value); 
        })
        semitoneOffset9Selector.addEventListener('change', () => { 
            semitoneOffset9 = parseInt(semitoneOffset9Selector.value); 
        })
        semitoneOffset10Selector.addEventListener('change', () => { 
            semitoneOffset10 = parseInt(semitoneOffset10Selector.value); 
        })
        semitoneOffset11Selector.addEventListener('change', () => { 
            semitoneOffset11 = parseInt(semitoneOffset11Selector.value); 
        })
        semitoneOffset12Selector.addEventListener('change', () => { 
            semitoneOffset12 = parseInt(semitoneOffset12Selector.value); 
        })
        semitoneOffset13Selector.addEventListener('change', () => { 
            semitoneOffset13 = parseInt(semitoneOffset13Selector.value); 
        })
        semitoneOffset14Selector.addEventListener('change', () => { 
            semitoneOffset14 = parseInt(semitoneOffset14Selector.value); 
        })
        semitoneOffset15Selector.addEventListener('change', () => { 
            semitoneOffset15 = parseInt(semitoneOffset15Selector.value); 
        })
        semitoneOffset16Selector.addEventListener('change', () => { 
            semitoneOffset16 = parseInt(semitoneOffset16Selector.value); 
        })
        semitoneOffset17Selector.addEventListener('change', () => { 
            semitoneOffset17 = parseInt(semitoneOffset17Selector.value); 
        })
        semitoneOffset18Selector.addEventListener('change', () => { 
            semitoneOffset18 = parseInt(semitoneOffset18Selector.value); 
        })
        semitoneOffset19Selector.addEventListener('change', () => { 
            semitoneOffset19 = parseInt(semitoneOffset19Selector.value); 
        })
        semitoneOffset20Selector.addEventListener('change', () => { 
            semitoneOffset20 = parseInt(semitoneOffset20Selector.value); 
        })
        semitoneOffset21Selector.addEventListener('change', () => { 
            semitoneOffset21 = parseInt(semitoneOffset21Selector.value); 
        })
        semitoneOffset22Selector.addEventListener('change', () => { 
            semitoneOffset22 = parseInt(semitoneOffset22Selector.value); 
        })
        semitoneOffset23Selector.addEventListener('change', () => { 
            semitoneOffset23 = parseInt(semitoneOffset23Selector.value); 
        })
        semitoneOffset24Selector.addEventListener('change', () => { 
            semitoneOffset24 = parseInt(semitoneOffset24Selector.value); 
        })
        semitoneOffset25Selector.addEventListener('change', () => { 
            semitoneOffset25 = parseInt(semitoneOffset25Selector.value); 
        })
        semitoneOffset26Selector.addEventListener('change', () => { 
            semitoneOffset26 = parseInt(semitoneOffset26Selector.value); 
        })
        semitoneOffset27Selector.addEventListener('change', () => { 
            semitoneOffset27 = parseInt(semitoneOffset27Selector.value); 
        })
        semitoneOffset28Selector.addEventListener('change', () => { 
            semitoneOffset28 = parseInt(semitoneOffset28Selector.value); 
        })
        semitoneOffset29Selector.addEventListener('change', () => { 
            semitoneOffset29 = parseInt(semitoneOffset29Selector.value); 
        })
        semitoneOffset30Selector.addEventListener('change', () => { 
            semitoneOffset30 = parseInt(semitoneOffset30Selector.value); 
        })
        semitoneOffset31Selector.addEventListener('change', () => { 
            semitoneOffset31 = parseInt(semitoneOffset31Selector.value); 
        })
        semitoneOffset32Selector.addEventListener('change', () => { 
            semitoneOffset32 = parseInt(semitoneOffset32Selector.value); 
        })

        document.addEventListener('keydown', (event) => {
            if(event.key === ' ') {

            }
            if(event.key === 'Enter')
            {
                
            }

            if (event.key === '1') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+zeroChordRoot+key);
                
                soundEngine.playNote(24+0+(octaveMultiplier1*12)+semitoneOffset1+zeroChordRoot+key);
                if(rootDoubler1 > 0) soundEngine.playNote(24+12+(octaveMultiplier1)+zeroChordRoot+key);
                if(rootDoubler1 > 1) soundEngine.playNote(24+24+(octaveMultiplier1)+zeroChordRoot+key);
                //soundEngine.playNote(24+12+zeroChordRoot+key);
                //soundEngine.playNote(24+24+zeroChordRoot+key);
                this.changeFaderColor(octaveMultiplier1Selector.parentElement, false); 
            }
            if (event.key === '2') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+4+(octaveMultiplier2*12)+semitoneOffset2+zeroChordRoot+zeroChordMinorOffset+key);
                //this.doubleNote(24+4+zeroChordRoot+zeroChordMinorOffset+key, doubler12);
                this.changeFaderColor(octaveMultiplier2Selector.parentElement, false);   
            }
            if (event.key === '3') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(octaveMultiplier3*12)+semitoneOffset3+zeroChordRoot+key);
                this.changeFaderColor(octaveMultiplier3Selector.parentElement, false);   
            }
            if (event.key === '4') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier4*12)+semitoneOffset4+zeroChordRoot+zeroChordMinorOffset+key);
                this.changeFaderColor(octaveMultiplier4Selector.parentElement, false);
            }
            if (event.key === '5') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                
                soundEngine.playNote(24+14+(octaveMultiplier5*12)+semitoneOffset5+zeroChordRoot+key);
                //soundEngine.playNote(8+0+key);
                this.changeFaderColor(octaveMultiplier5Selector.parentElement, false);   
            }
            if (event.key === '6') {
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+16+(octaveMultiplier6*12)+semitoneOffset6+zeroChordRoot+zeroChordMinorOffset+key);
                //soundEngine.playNote(8+4+key);
                this.changeFaderColor(octaveMultiplier6Selector.parentElement, false);   
            }
            if (event.key === '7') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(octaveMultiplier7*12)+semitoneOffset7+zeroChordRoot+key);
                //soundEngine.playNote(8+7+key);
                this.changeFaderColor(octaveMultiplier7Selector.parentElement, false);   
            }
            if (event.key === '8') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+23+(octaveMultiplier8*12)+semitoneOffset8+zeroChordRoot+key+zeroChordMinorOffset);
                //soundEngine.playNote(8+11+key+zeroChordRoot);
                this.changeFaderColor(octaveMultiplier8Selector.parentElement, false);
            }
            
            if (event.key === 'q') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+firstChordRoot+key);
                let mult = 0
                if(include1) mult = 12;
                soundEngine.playNote(24+0+(octaveMultiplier9*12)+semitoneOffset9+firstChordRoot+key+(octaveTranspose2*mult));
                //soundEngine.playNote(24+12+firstChordRoot+key);
                this.changeFaderColor(octaveMultiplier9Selector.parentElement, false);  
            }
            if (event.key === 'w') {
                //this.displayAndPlayChord('maj7');
                let mult = 0
                if(include2) mult = 12;
                this.changeFaderColor(octaveMultiplier10Selector.parentElement, false);  
                soundEngine.playNote(24+4+(octaveMultiplier10*12)+semitoneOffset10+firstChordRoot+firstChordMinorOffset+key+(octaveTranspose2*mult));
            }
            if (event.key === 'e') {
                let mult = 0
                if(include3) mult = 12;
                this.changeFaderColor(octaveMultiplier11Selector.parentElement, false);  
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(octaveMultiplier11*12)+semitoneOffset11+firstChordRoot+key+(octaveTranspose2*mult));
            }
            if (event.key === 'r') {
                let mult = 0
                if(include4) mult = 12;
                this.changeFaderColor(octaveMultiplier12Selector.parentElement, false);  
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier12*12)+semitoneOffset12+firstChordRoot+firstChordMinorOffset+key+(octaveTranspose2*mult));
            }
            if (event.key === 't') {
                let mult = 0
                if(include5) mult = 12;
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                this.changeFaderColor(octaveMultiplier13Selector.parentElement, false);  
                soundEngine.playNote(24+14+(octaveMultiplier13*12)+semitoneOffset13+firstChordRoot+key+(octaveTranspose2*mult));
                //soundEngine.playNote(8+0+key+firstChordRoot);
            }
            if (event.key === 'y') {
                let mult = 0
                if(include6) mult = 12;
                //this.displayAndPlayChord('maj7');
                this.changeFaderColor(octaveMultiplier14Selector.parentElement, false);  
                soundEngine.playNote(24+16+(octaveMultiplier14*12)+semitoneOffset14+firstChordRoot+firstChordMinorOffset+key+(octaveTranspose2*mult));
                
                //soundEngine.playNote(8+4+key+firstChordRoot);
            }
            if (event.key === 'u') {
                let mult = 0
                if(include7) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(octaveMultiplier15*12)+semitoneOffset15+firstChordRoot+key+(octaveTranspose2*mult));
                //soundEngine.playNote(8+7+key+firstChordRoot);
                this.changeFaderColor(octaveMultiplier15Selector.parentElement, false);  
            }
            if (event.key === 'i') {
                let mult = 0
                if(include8) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier16*12)+semitoneOffset16+firstChordRoot+firstChordMinorOffset+key+12+(octaveTranspose2*mult));
                //soundEngine.playNote(8+11+key+firstChordRoot);
                this.changeFaderColor(octaveMultiplier16Selector.parentElement, false);  
            }

            if (event.key === 'a') {
                let mult = 0
                if(include9) mult = 12;
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+secondChordRoot+key);
                soundEngine.playNote(24+0+(octaveMultiplier17*12)+semitoneOffset17+secondChordRoot+key+(octaveTranspose3*mult));
                this.changeFaderColor(octaveMultiplier17Selector.parentElement, false);  
            }
            if (event.key === 's') {
                let mult = 0
                if(include10) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+4+(octaveMultiplier18*12)+semitoneOffset18+secondChordRoot+secondChordMinorOffset+key+(octaveTranspose3*mult));
                this.changeFaderColor(octaveMultiplier18Selector.parentElement, false);  
            }
            if (event.key === 'd') {
                let mult = 0
                if(include11) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(octaveMultiplier19*12)+semitoneOffset19+secondChordRoot+key+(octaveTranspose3*mult));
                this.changeFaderColor(octaveMultiplier19Selector.parentElement, false); 
            }
            if (event.key === 'f') {
                let mult = 0
                if(include12) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier20*12)+semitoneOffset20+secondChordRoot+secondChordMinorOffset+key+(octaveTranspose3*mult));
                this.changeFaderColor(octaveMultiplier20Selector.parentElement, false);  
            }
            if (event.key === 'g') {
                let mult = 0
                if(include13) mult = 12;
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+14+(octaveMultiplier21*12)+semitoneOffset21+secondChordRoot+key+(octaveTranspose3*mult));
                //soundEngine.playNote(8+0+key+secondChordRoot);
                this.changeFaderColor(octaveMultiplier21Selector.parentElement, false);  
            }
            if (event.key === 'h') {
                let mult = 0
                if(include14) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+16+(octaveMultiplier22*12)+semitoneOffset22+secondChordRoot+secondChordMinorOffset+key+(octaveTranspose3*mult));
                //soundEngine.playNote(8+4+key+secondChordRoot);
                this.changeFaderColor(octaveMultiplier22Selector.parentElement, false);  
            }
            if (event.key === 'j') {
                let mult = 0
                if(include15) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(octaveMultiplier23*12)+semitoneOffset23+secondChordRoot+key+(octaveTranspose3*mult));
                //soundEngine.playNote(8+7+key+secondChordRoot);
                this.changeFaderColor(octaveMultiplier23Selector.parentElement, false);  
            }
            if (event.key === 'k') {
                let mult = 0
                if(include16) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier24*12)+semitoneOffset24+secondChordRoot+secondChordMinorOffset+key+12+(octaveTranspose3*mult));
                this.changeFaderColor(octaveMultiplier24Selector.parentElement, false);  
            }
            
            if (event.key === 'z') {
                let mult = 0
                if(include17) mult = 12;
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+thirdChordRoot+key);
                soundEngine.playNote(24+0+(octaveMultiplier25*12)+thirdChordRoot+key+(octaveTranspose4*mult));
                //soundEngine.playNote(24+12+0+thirdChordRoot+key);
                this.changeFaderColor(octaveMultiplier25Selector.parentElement, false);  
            }
            if (event.key === 'x') {
                let mult = 0
                if(include18) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+4+(octaveMultiplier26*12)+thirdChordRoot+thirdChordMinorOffset+key+(octaveTranspose4*mult));
                this.changeFaderColor(octaveMultiplier26Selector.parentElement, false);  
            }
            if (event.key === 'c') {
                let mult = 0
                if(include19) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(octaveMultiplier27*12)+thirdChordRoot+key+(octaveTranspose4*mult));
                this.changeFaderColor(octaveMultiplier27Selector.parentElement, false);  
            }
            if (event.key === 'v') {
                let mult = 0
                if(include20) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier28*12)+thirdChordRoot+thirdChordMinorOffset+key+(octaveTranspose4*mult));
                this.changeFaderColor(octaveMultiplier28Selector.parentElement, false);  
            }
            if (event.key === 'b') {
                let mult = 0
                if(include21) mult = 12;
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+14+(octaveMultiplier29*12)+thirdChordRoot+key+(octaveTranspose4*mult));
                //soundEngine.playNote(8+0+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier29Selector.parentElement, false);  
            }
            if (event.key === 'n') {
                let mult = 0
                if(include22) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+16+(octaveMultiplier30*12)+thirdChordRoot+thirdChordMinorOffset+key+(octaveTranspose4*mult));
                //soundEngine.playNote(8+4+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier30Selector.parentElement, false);  
            }
            if (event.key === 'm') {
                let mult = 0
                if(include23) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(octaveMultiplier31*12)+thirdChordRoot+key+(octaveTranspose4*mult));
                //soundEngine.playNote(8+7+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier31Selector.parentElement, false);  
            }
            if (event.key === ',') {
                let mult = 0
                if(include24) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier32*12)+thirdChordRoot+thirdChordMinorOffset+key+12+(octaveTranspose4*mult));
                //soundEngine.playNote(8+11+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier32Selector.parentElement, false);  
            }
            
            //console.log(event.keyCode);
        });
        document.addEventListener('keyup', (event) => {
            // TODO: Find a way to check what the root was when the note was played, so that the correct note can be turned off when the key comes up.
            if(event.key === ' ') {
                
                
            }
            
            if (event.key === '1') {
                /*
                var markerIndex = markedKeys.indexOf(24+0+(octaveMultiplier1)+zeroChordRoot+key+1);
                if(markerIndex > -1) markedKeys.splice(markerIndex,1);
                pianokeys.setMarkedKeys(markedKeys);
                */
                soundEngine.playNote(24+0+(octaveMultiplier1*12)+semitoneOffset1+zeroChordRoot+key, true);
                this.changeFaderColor(octaveMultiplier1Selector.parentElement, true);
            }
            if (event.key === '2') {
                soundEngine.playNote(24+4+(octaveMultiplier2*12)+semitoneOffset2+zeroChordRoot+zeroChordMinorOffset+key, true);
                this.changeFaderColor(octaveMultiplier2Selector.parentElement, true);
            }
            if (event.key === '3') {
                soundEngine.playNote(24+7+(octaveMultiplier3*12)+semitoneOffset3+zeroChordRoot+key, true);
                this.changeFaderColor(octaveMultiplier3Selector.parentElement, true);
            }
            if (event.key === '4') {
                soundEngine.playNote(24+11+(octaveMultiplier4*12)+semitoneOffset4+zeroChordRoot+zeroChordMinorOffset+key, true);
                this.changeFaderColor(octaveMultiplier4Selector.parentElement, true);
            }
            if (event.key === '5') {
                soundEngine.playNote(24+14+(octaveMultiplier5*12)+semitoneOffset5+zeroChordRoot+key, true);
                this.changeFaderColor(octaveMultiplier5Selector.parentElement, true);
            }
            if (event.key === '6') {
                soundEngine.playNote(24+16+(octaveMultiplier6*12)+semitoneOffset6+zeroChordRoot+zeroChordMinorOffset+key, true);
                this.changeFaderColor(octaveMultiplier6Selector.parentElement, true);
            }
            if (event.key === '7') {
                soundEngine.playNote(24+19+(octaveMultiplier7*12)+semitoneOffset7+zeroChordRoot+key, true);
                this.changeFaderColor(octaveMultiplier7Selector.parentElement, true);
            }
            if (event.key === '8') {
                soundEngine.playNote(24+23+(octaveMultiplier8*12)+semitoneOffset8+zeroChordRoot+key+zeroChordMinorOffset, true);
                this.changeFaderColor(octaveMultiplier8Selector.parentElement, true);
            }
            
            if (event.key === 'q') {
                let mult = 0
                if(include1) mult = 12;
                soundEngine.playNote(24+0+(octaveMultiplier9*12)+semitoneOffset9+firstChordRoot+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier9Selector.parentElement, true);
            }
            if (event.key === 'w') {
                let mult = 0
                if(include2) mult = 12;
                soundEngine.playNote(24+4+(octaveMultiplier10*12)+semitoneOffset10+firstChordRoot+firstChordMinorOffset+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier10Selector.parentElement, true);
            }
            if (event.key === 'e') {
                let mult = 0
                if(include3) mult = 12;
                soundEngine.playNote(24+7+(octaveMultiplier11*12)+semitoneOffset11+firstChordRoot+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier11Selector.parentElement, true);
            }
            if (event.key === 'r') {
                let mult = 0
                if(include4) mult = 12;
                soundEngine.playNote(24+11+(octaveMultiplier12*12)+semitoneOffset12+firstChordRoot+firstChordMinorOffset+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier12Selector.parentElement, true);
            }
            if (event.key === 't') {
                let mult = 0
                if(include5) mult = 12;
                soundEngine.playNote(24+14+(octaveMultiplier13*12)+semitoneOffset13+firstChordRoot+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier13Selector.parentElement, true);
            }
            if (event.key === 'y') {
                let mult = 0
                if(include6) mult = 12;
                soundEngine.playNote(24+16+(octaveMultiplier14*12)+semitoneOffset14+firstChordRoot+firstChordMinorOffset+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier14Selector.parentElement, true);
            }
            if (event.key === 'u') {
                let mult = 0
                if(include7) mult = 12;
                soundEngine.playNote(24+19+(octaveMultiplier15*12)+semitoneOffset15+firstChordRoot+key+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier15Selector.parentElement, true);
            }
            if (event.key === 'i') {
                let mult = 0
                if(include8) mult = 12;
                soundEngine.playNote(24+11+(octaveMultiplier16*12)+semitoneOffset16+firstChordRoot+firstChordMinorOffset+key+12+(octaveTranspose2*mult), true);
                this.changeFaderColor(octaveMultiplier16Selector.parentElement, true);
            }

            if (event.key === 'a') {
                let mult = 0
                if(include9) mult = 12;
                /*
                var markerIndex = markedKeys.indexOf(24+0+(octaveMultiplier17)+semitoneOffset17+secondChordRoot+key+(octaveTranspose3*mult)+1);
                if(markerIndex > -1) markedKeys.splice(markerIndex,1);
                */
                soundEngine.playNote(24+0+(octaveMultiplier17*12)+semitoneOffset17+secondChordRoot+key+(octaveTranspose3*mult), true);
                this.changeFaderColor(octaveMultiplier17Selector.parentElement, true);
            }
            if (event.key === 's') {
                let mult = 0
                if(include10) mult = 12;
                soundEngine.playNote(24+4+(octaveMultiplier18*12)+semitoneOffset18+secondChordRoot+secondChordMinorOffset+key+(octaveTranspose3*mult), true);
                this.changeFaderColor(octaveMultiplier18Selector.parentElement, true);
            }
            if (event.key === 'd') {
                let mult = 0
                if(include11) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(octaveMultiplier19*12)+semitoneOffset19+secondChordRoot+key+(octaveTranspose3*mult), true);
                this.changeFaderColor(octaveMultiplier19Selector.parentElement, true);
            }
            if (event.key === 'f') {
                let mult = 0
                if(include12) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier20*12)+semitoneOffset20+secondChordRoot+secondChordMinorOffset+key+(octaveTranspose3*mult), true);
                this.changeFaderColor(octaveMultiplier20Selector.parentElement, true);
            }
            if (event.key === 'g') {
                let mult = 0
                if(include13) mult = 12;
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+14+(octaveMultiplier21*12)+semitoneOffset21+secondChordRoot+key+(octaveTranspose3*mult), true);
                //soundEngine.playNote(8+0+key+secondChordRoot);
                this.changeFaderColor(octaveMultiplier21Selector.parentElement, true);
            }
            if (event.key === 'h') {
                let mult = 0
                if(include14) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+16+(octaveMultiplier22*12)+semitoneOffset22+secondChordRoot+secondChordMinorOffset+key+(octaveTranspose3*mult), true);
                //soundEngine.playNote(8+4+key+secondChordRoot);
                this.changeFaderColor(octaveMultiplier22Selector.parentElement, true);
            }
            if (event.key === 'j') {
                let mult = 0
                if(include15) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(octaveMultiplier23*12)+semitoneOffset23+secondChordRoot+key+(octaveTranspose3*mult), true);
                //soundEngine.playNote(8+7+key+secondChordRoot);
                this.changeFaderColor(octaveMultiplier23Selector.parentElement, true);
            }
            if (event.key === 'k') {
                let mult = 0
                if(include16) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier24*12)+semitoneOffset24+secondChordRoot+secondChordMinorOffset+key+12+(octaveTranspose3*mult), true);
                this.changeFaderColor(octaveMultiplier24Selector.parentElement, true);
            }
            
            if (event.key === 'z') {
                let mult = 0
                if(include17) mult = 12;
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+thirdChordRoot+key);
                soundEngine.playNote(24+0+(octaveMultiplier25*12)+thirdChordRoot+key+(octaveTranspose4*mult), true);
                //soundEngine.playNote(24+12+0+thirdChordRoot+key);
                this.changeFaderColor(octaveMultiplier25Selector.parentElement, true);
            }
            if (event.key === 'x') {
                let mult = 0
                if(include18) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+4+(octaveMultiplier26*12)+thirdChordRoot+thirdChordMinorOffset+key+(octaveTranspose4*mult), true);
                this.changeFaderColor(octaveMultiplier26Selector.parentElement, true);
            }
            if (event.key === 'c') {
                let mult = 0
                if(include19) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+7+(octaveMultiplier27*12)+thirdChordRoot+key+(octaveTranspose4*mult), true);
                this.changeFaderColor(octaveMultiplier27Selector.parentElement, true);
            }
            if (event.key === 'v') {
                let mult = 0
                if(include20) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier28*12)+thirdChordRoot+thirdChordMinorOffset+key+(octaveTranspose4*mult), true);
                this.changeFaderColor(octaveMultiplier28Selector.parentElement, true);
            }
            if (event.key === 'b') {
                let mult = 0
                if(include21) mult = 12;
                //this.displayAndPlayChord('maj7');

                soundEngine.playNote(24+14+(octaveMultiplier29*12)+thirdChordRoot+key+(octaveTranspose4*mult), true);
                //soundEngine.playNote(8+0+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier29Selector.parentElement, true);
            }
            if (event.key === 'n') {
                let mult = 0
                if(include22) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+16+(octaveMultiplier30*12)+thirdChordRoot+thirdChordMinorOffset+key+(octaveTranspose4*mult), true);
                //soundEngine.playNote(8+4+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier30Selector.parentElement, true);
            }
            if (event.key === 'm') {
                let mult = 0
                if(include23) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+19+(octaveMultiplier31*12)+thirdChordRoot+key+(octaveTranspose4*mult), true);
                //soundEngine.playNote(8+7+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier31Selector.parentElement, true);
            }
            if (event.key === ',') {
                let mult = 0
                if(include24) mult = 12;
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(24+11+(octaveMultiplier32*12)+thirdChordRoot+thirdChordMinorOffset+key+12+(octaveTranspose4*mult), true);
                //soundEngine.playNote(8+11+key+thirdChordRoot);
                this.changeFaderColor(octaveMultiplier32Selector.parentElement, true);
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
    },
    startRecording() {
        var lastUpdate = Date.now();
        var tempoMsFourthsAmt = Math.ceil(60000/(tempo));
        var tempoMsAmt = Math.ceil(tempoMsFourthsAmt / 128);
        var accumulatedTime = 0;
        var lastTickAmt = 128;
        var lastTickAmt2 = 128;
        var wantedTickLength = 0;
        var fourthTicks = 0;
        var first = true;
        metronome.play();
        function tick() {
            var now = Date.now();
            var dt = now - lastUpdate;
            accumulatedTime += dt;
            lastTickAmt++;
            lastUpdate = now;
            if(pressedFirstNote)
            {
                tickAmt += wantedTickLength;
                lastTickAmt2 += wantedTickLength;
            }

            if(accumulatedTime >= tempoMsFourthsAmt) {
                if(lastTickAmt > 0) wantedTickLength = (128 / lastTickAmt);
                console.log("________________");
                console.log("tempoMsAmt:"+tempoMsAmt);
                console.log("tempoMsFourthsAmt:"+tempoMsFourthsAmt);
                console.log("dt:"+dt);
                console.log("tickAmt:"+Math.ceil(tickAmt));
                console.log("lastTickAmt:"+lastTickAmt);
                console.log("wantedTickLength:"+wantedTickLength);
                console.log("lastTickAmt2:"+lastTickAmt2);
                fourthTicks++;
                metronome.play();
                lastTickAmt = 0;
                dt = 0;
                accumulatedTime = 0;
                lastTickAmt2 = 0;
            }
        }
        tickInterval = setInterval(tick, 0);
    },
    stopRecording() {
        clearInterval(tickInterval);
        clearInterval(metronomeInterval);
        dataUri = write.dataUri();
        recording = false;
        track = new MidiWriter.Track();
        write = new MidiWriter.Writer(track);
        tickAmt = 0;
        pressedFirstNote = false;
    },
    changeFaderColor(e, keyUp = false) {
        console.log(e);
        if(keyUp) e.style["background-color"] = "#FFF";
        else e.style["background-color"] = "#EDEDED";
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
    playNote(noteNumber, keyUp) {
        var markerIndex = markedKeys.indexOf(noteNumber+1);
        console.log(noteNumber);
        if(markerIndex > -1 && keyUp && pressedNotes[noteNumber] === true) 
        {
            pressedNotes[noteNumber] = false;
            if(!sustainOn) sound.fade(1, 0, 750, noteIds[noteNumber]); // 750 for chords, 450 for bass
            markedKeys.splice(markerIndex,1);
            pianokeys.setMarkedKeys(markedKeys);
        }
        else if(pressedNotes[noteNumber] === false)
        {
            pressedNotes[noteNumber] = true;
            var soundId = sound.play(noteNumber.toString());
            noteIds[noteNumber] = soundId;
            markedKeys.push(noteNumber+1);
            pianokeys.setMarkedKeys(markedKeys);
            if(recording)
            {
                pressedFirstNote = true;
                var noteString = this.getNoteFromMidi(noteNumber);
                var writableNote = {pitch: noteString, startTick: Math.round(tickAmt), duration: 'T1'};
                track.addEvent([
                    new MidiWriter.NoteEvent(writableNote),
                    ], function(event, index) {
                    return {sequential: false};
                    }
                );
            }
        }
        
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
    },
    getNoteFromMidi(noteNumber) {
        var noteArray = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];
        var octave = Math.floor(((noteNumber / 12) - 1) + 2);
        var noteIndex = (noteNumber % 12);
        console.log(noteArray[noteIndex] + octave);
        return noteArray[noteIndex] + octave;
    }
}

app.init();
