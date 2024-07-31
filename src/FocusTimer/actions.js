import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function reset() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.updateDisplay()
  sounds.buttonPressAudio.play()

  if(state.musicOn) {
    toggleMusic()
  }
}

export function toggleMusic() {
  state.musicOn = document.documentElement.classList.toggle('music-on')

  if(state.musicOn) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}