import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import { Text, useColorScheme } from "react-native";
import { mystyles } from "../styles/styles";

const videoSource = "https://download.blender.org/demo/movies/ToS/tearsofsteel_4k.mov";

export default function MyVideoView() {
  const colorSheme = useColorScheme();
  const style = mystyles(colorSheme);
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });
  console.log("Status: " + isPlaying);
  return (
    <VideoView
      style={style.video}
      player={player}
      fullscreenOptions={{ enable: true }}
      allowsPictureInPicture={true}
    ><Text>Hello</Text></VideoView>
  );
}
