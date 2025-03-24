import { createSignal, For } from "solid-js";
import {
  SiBrave,
  SiOpera,
  SiGooglechrome,
  SiMicrosoftedge,
} from "solid-icons/si";
import "../App.scss";
import "./UnsupportedBrowser.scss";
import { useNavigate } from "@solidjs/router";
import { RiLogosOperaLine } from "solid-icons/ri";

interface SupportedBrowser {
  name: string;
  url: string;
  icon: any;
}

const supportedBrowsers: SupportedBrowser[] = [
  {
    name: "Google Chrome",
    url: "https://www.google.com/intl/en_uk/chrome/",
    icon: SiGooglechrome,
  },
  { name: "Opera", url: "https://www.opera.com/ru/download", icon: SiOpera },
  {
    name: "Opera GX",
    url: "https://www.opera.com/ru/gx",
    icon: RiLogosOperaLine,
  },
  { name: "Brave", url: "https://brave.com/download/", icon: SiBrave },
  {
    name: "Microsoft Edge",
    url: "https://www.microsoft.com/uk-ua/edge/download",
    icon: SiMicrosoftedge,
  },
];

export default function UnsupportedBrowser() {
  const navigate = useNavigate();
  const isFirefox = /Firefox/i.test(navigator.userAgent);
  if (!isFirefox) navigate("/");

  return (
    <div class="container">
      <h3 class="error-text">
        Unsupported browser. Please download one of these browsers for use
        Weltab:
      </h3>
      <div class="browsers-list">
        <For each={supportedBrowsers}>
          {(browser) => (
            <div
              class="browser"
              onclick={() => (window.location.href = browser.url)}
            >
              <browser.icon size={64} />
              <span>{browser.name}</span>
            </div>
          )}
        </For>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <span
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            opacity: 0.3,
            display: "flex",
            "justify-content": "flex-end",
            "align-items": "flex-end",
            padding: "10px", // Добавляем padding, чтобы элемент не прилипал к краю
          }}
        >
          Download normal browser bro
        </span>
      </div>
    </div>
  );
}
