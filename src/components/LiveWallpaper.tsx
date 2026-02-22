import { createSignal, onCleanup, onMount, Switch } from "solid-js";
import "./LiveWallpaper.scss";

const DEFAULT_WALLPAPERS = "/static/dark-galaxy.mp4";

function getVideoLink(): string {
  const video = localStorage.getItem("videoLink");
  if (video == null) {
    // setting default wallpaper
    localStorage.setItem("videoLink", DEFAULT_WALLPAPERS);
  }

  return video || DEFAULT_WALLPAPERS;
}

export default function LiveWallpaper() {
  const [videoLink, setVideoLink] = createSignal("");
  setVideoLink(getVideoLink);

  // extracting video storage
  const storageVideoLinkUpdate = (event: StorageEvent) => {
    if (event.key === "videoLink") setVideoLink(getVideoLink);
  };

  onMount(() => {
    // If link changed
    const listener = window.addEventListener("storage", storageVideoLinkUpdate);
  });

  onCleanup(() => {
    window.removeEventListener("storage", storageVideoLinkUpdate);
  });

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
          <source src={videoLink()} type="video/mp4" />
        </video>
      </div>
      <div class="wp-wrapper"></div>
    </>
  );
}
