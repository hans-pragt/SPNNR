export interface Theme {

  // #region Properties

  /**
   * The background color of the application.
   */
  appBackgroundStartColor : string;
  appBackgroundEndColor : string;

  /**
   * The background color of the panels.
   */
  panelBackgroundColor : string;

  /**
   * The background color for the inputs.
   */
  inputBackgroundColor : string;

  /**
   * The header color of the media player pane.
   */
  mediaPaneHeaderColor : string;

  /**
   * The header color of the to-do pane.
   */
  todoPaneHeaderColor : string;

  /**
   * The header color of the twitch pane.
   */
  twitchPaneHeaderColor : string;

  /**
   * Path to the image in the Twitch pane.
   */
  twitchScreenShotPath : string;

  /**
   * Path to the audio file that plays when the record spins.  
   */
  recordSpinAudioPath : string;

  /**
   * Which album cover art to pick from.
   */
  coverPaths : Array<string>;

  // #endregion Properties

}