// #region Imports

/* SPNNR */
import type { Theme } from '@/models';

// #endregion Imports

const HalloweenTheme : Theme = {
  appBackgroundStartColor:  '#ff6d00',
  inputBackgroundColor:     '#A8A292',
  appBackgroundEndColor:    '#9d4edd',
  panelBackgroundColor:     '#beb7a4',
  mediaPaneHeaderColor:     '#ff7600',
  todoPaneHeaderColor:      '#941b0c',
  twitchPaneHeaderColor:    '#7b2cbf',
  recordSpinAudioPath:      '/themes/halloween/dracula.mp3',
  twitchScreenShotPath:     '/themes/halloween/stream.jpg',
  coverPaths:               [
    '/themes/halloween/covers/cover_1.png',
    '/themes/halloween/covers/cover_2.png',
    '/themes/halloween/covers/cover_3.png',
    '/themes/halloween/covers/cover_4.png'
  ]
}

export { HalloweenTheme };