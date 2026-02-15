import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import { StyleSheet } from "react-native";
const videoSource =
  "https://download.blender.org/demo/movies/ToS/tearsofsteel_4k.mov";

export default function MyVideoView() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });
  console.log(isPlaying);
  return (
    <VideoView
      style={styles.video}
      player={player}
      fullscreenOptions={{ enable: true }}
      allowsPictureInPicture
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: "100%",
    height: "50%",
  },
  controlsContainer: {
    padding: 10,
  },
});
