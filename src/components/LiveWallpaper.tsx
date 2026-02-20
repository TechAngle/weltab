import { Switch } from "solid-js";
import "./LiveWallpaper.scss";

export default function LiveWallpaper() {
  return (
    <>
      <div>
        <video
          class="live-wallpaper"
          disablepictureinpicture
          autoplay={true}
          loop={true}
          muted={true}
        >
          <source src="/static/dark-galaxy.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="wp-wrapper"></div>
    </>
  );
}
