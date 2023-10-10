import state from './state.js'
import * as  timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sound.js'
import { updateDisplay } from './timer.js'
import { minutesElement, secondsElement } from './elements.js'


export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function addMinutes() {
    const currentMinutes = parseInt(minutesElement.textContent, 10);
    const newMinutes = currentMinutes + 5;

    const finalMinutes = Math.min(newMinutes, 60);

    state.minutes = finalMinutes;

    minutesElement.textContent = String(finalMinutes).padStart(2, '0');
    secondsElement.textContent = '00';

    updateDisplay(finalMinutes, 0);
}

export function subtractMinutes() {
    const currentMinutes = parseInt(minutesElement.textContent, 10);
    const newMinutes = currentMinutes - 5;

    const finalMinutes = Math.max(newMinutes, 0);

    state.minutes = finalMinutes;


    minutesElement.textContent = String(finalMinutes).padStart(2, '0');
    secondsElement.textContent = '00';

    updateDisplay(finalMinutes, 0);
}

export function toggleForestMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    console.log(state.isMute)

    if(state.isMute) {
        sounds.forestAudio.play()
        return
    }
    
    sounds.forestAudio.pause()
}

export function toggleRainMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    console.log(state.isMute)

    if(state.isMute) {
        sounds.rainAudio.play()
        return
    }
    
    sounds.rainAudio.pause()
}

export function toggleStoreMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    console.log(state.isMute)

    if(state.isMute) {
        sounds.storeAudio.play()
        return
    }
    
    sounds.storeAudio.pause()
}

export function toggleFireMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    console.log(state.isMute)

    if(state.isMute) {
        sounds.fireAudio.play()
        return
    }
    
    sounds.fireAudio.pause()
}

