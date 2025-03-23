import { createSignal, For } from 'solid-js';
import { SiBrave, SiOpera, SiGooglechrome } from 'solid-icons/si';
import '../App.scss';
import './UnsupportedBrowser.scss';

interface SupportedBrowser {
  name: string;
  url: string;
  icon: any;
}

const supportedBrowsers: SupportedBrowser[] = [
  { name: 'Google Chrome', url: 'https://www.google.com/intl/en_uk/chrome/', icon: SiGooglechrome },
  { name: 'Opera', url: 'https://www.opera.com/ru/download', icon: SiOpera },
  { name: 'Brave', url: 'https://brave.com/download/', icon: SiBrave }
];

export default function UnsupportedBrowser() {
  const isFirefox = /Firefox/i.test(navigator.userAgent);
  if (!isFirefox) 
    document.location = "/";

  return (
    <div class="container">
      <h3 class="error-text">Unsupported browser. Please download one of these browsers for use Weltab:</h3>
      <div class="browsers-list">
        <For each={supportedBrowsers}>
          {(browser) => (
            <div
              class="browser"
            >
              <browser.icon size={64} />
              <span>{browser.name}</span>
            </div>
          )}
        </For>
      </div>
      <div>
        <span>
          Download normal browser bro
        </span>
      </div>
    </div>
  );
}
