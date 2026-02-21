import { mystyles } from "@/styles/styles";
import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import { Text } from "react-native";

const videoSource = "https://download.blender.org/demo/movies/ToS/tearsofsteel_4k.mov";

export default function MyVideoView() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });
  console.log("Status: " + isPlaying);
  return (
    <VideoView
      style={styles.video}
      player={player}
      fullscreenOptions={{ enable: true }}
      allowsPictureInPicture={true}
    ><Text>Hello</Text></VideoView>
  );
}

const styles = mystyles()