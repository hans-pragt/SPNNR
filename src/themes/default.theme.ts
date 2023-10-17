// #region Imports

/* SPNNR */
import type { Theme } from '@/models';

// #endregion Imports

const DefaultTheme : Theme = {
  appBackgroundStartColor:  '#c1bcfe',
  inputBackgroundColor:     '#fbeac9',
  appBackgroundEndColor:    '#f8ceda',
  panelBackgroundColor:     '#f4ebda',
  mediaPaneHeaderColor:     '#fb9700',
  todoPaneHeaderColor:      '#03c498',
  twitchPaneHeaderColor:    '#00a8cc',
  recordSpinAudioPath:      '/themes/default/record_scratch.mp3',
  twitchScreenShotPath:     '/themes/default/stream.jpg',
  coverPaths:               [
    '/themes/default/covers/cover_1.webp',
    '/themes/default/covers/cover_2.webp',
    '/themes/default/covers/cover_3.webp',
    '/themes/default/covers/cover_4.webp',
    '/themes/default/covers/cover_5.webp',
    '/themes/default/covers/cover_6.webp',
    '/themes/default/covers/cover_7.webp',
    '/themes/default/covers/cover_8.webp'
  ]
}

export { DefaultTheme };