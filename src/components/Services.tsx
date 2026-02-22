import { For, JSX, mapArray } from "solid-js";
import "./Services.scss";
import { FaBrandsGoogle, FaBrandsYoutube, FaSolidDog } from "solid-icons/fa";
import { SiDuckduckgo, SiYoutubemusic } from "solid-icons/si";
import { ImSoundcloud } from "solid-icons/im";
import { IconTemplate, IconTypes } from "solid-icons";
import { OcSparklefill2 } from "solid-icons/oc";
import { CustomIcon } from "solid-icons";
import IconGrok from "../custom-icons/IconGrok";
import { useNavigate } from "@solidjs/router";

interface Site {
  name: string;
  address: string;
  icon: IconTypes;
}

// Websites list
const servicesList: Site[] = [
  { name: "Google", address: "https://google.com", icon: FaBrandsGoogle },
  { name: "Youtube", address: "https://youtube.com", icon: FaBrandsYoutube },
  {
    name: "Youtube Music",
    address: "https://music.youtube.com",
    icon: SiYoutubemusic,
  },
  { name: "DuckDuckGo", address: "https://duckduckgo.com", icon: SiDuckduckgo },
  { name: "SoundCloud", address: "https://soundcloud.com", icon: ImSoundcloud },
  {
    name: "Gemini",
    address: "https://gemini.google.com/app",
    icon: OcSparklefill2,
  },
  { name: "Grok", address: "https://grok.com", icon: IconGrok },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <div class="services">
        <h3 class="services-text">Often visited websites </h3>
        <hr class="services-separator" />
        <div class="services-list">
          <For each={servicesList}>
            {(site) => {
              return (
                <div
                  class="service"
                  onclick={() => (window.location.href = site.address)}
                >
                  <site.icon size={32} />
                  <span class="service-name">{site.name}</span>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </>
  );
}
