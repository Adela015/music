import React from 'react';
import Player from "@madzadev/audio-player";

const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];

  const colors = `html {
    --tagsBackground: #1ABC9C;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #1ABC9C;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #1ABC9C;
    --progressSlider: #1ABC9C;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #1ABC9C;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
}`;

function Player1() {
  return (
    <div>
        <Player
            trackList={tracks}
            customColorScheme={colors}
        />
    </div>
  )
}

export default Player1