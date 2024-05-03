import './toggle-mode.js'
import * as FocusTimer from './FocusTimer/index.js'
import State from './FocusTimer/state.js'

FocusTimer.start(State.minutes, State.seconds)