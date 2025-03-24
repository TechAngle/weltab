import { createMemo, createSignal, For, Show } from "solid-js";
import "./Search.scss";
import { IconTypes } from "solid-icons";
import { FaBrandsGoogle } from "solid-icons/fa";
import { SiDuckduckgo, SiMicrosoftbing } from "solid-icons/si";
import { Transition } from "solid-transition-group";

interface SearchSystem {
  name: string;
  searchPattern: string; // replace {{request}} with query
  icon: IconTypes;
}

const availableSearchSystems: SearchSystem[] = [
  {
    name: "Google",
    searchPattern: "https://www.google.com/search?q={{request}}",
    icon: FaBrandsGoogle,
  },
  {
    name: "Bing",
    searchPattern: "https://www.bing.com/search?q={{request}}",
    icon: SiMicrosoftbing,
  },
  {
    name: "DDG",
    searchPattern: "https://duckduckgo.com/?t=h_&q={{request}}",
    icon: SiDuckduckgo,
  },
];

export default function Search() {
  const [queryText, setQueryText] = createSignal("");
  const [searchSystem, setSearchSystem] = createSignal(
    availableSearchSystems[0]
  );
  const [isSelectorOpen, setSelectorOpen] = createSignal(false);

  const goToSearch = () => {
    if (!queryText().trim())
      // if no text provided
      return;

    const system = searchSystem();

    window.location.href = system.searchPattern.replace(
      "{{request}}",
      encodeURI(queryText())
    );
  };

  const toggleDropdown = () => {
    setSelectorOpen(!isSelectorOpen());
  };

  const selectSystem = (system: SearchSystem) => {
    setSearchSystem(system);
    setSelectorOpen(false); // Close the dropdown after selection
  };

  return (
    <>
      <div class="search">
        <div class="search-system-selector">
          <span onClick={toggleDropdown}>
            {(() => {
              const IconComponent = searchSystem().icon;
              return <IconComponent size={20} />;
            })()}
          </span>
          <Show when={isSelectorOpen()}>
            <div
              class={`search-system-list ${isSelectorOpen() ? "active" : ""}`}
            >
              <For each={availableSearchSystems}>
                {(system) => (
                  <div
                    class="search-system"
                    onClick={() => selectSystem(system)}
                  >
                    <system.icon size={20} />
                    <span class="search-system-name">{system.name}</span>
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>
        <div class="search-field">
          <div>
            <input
              class="search-input-field"
              placeholder="Enter your query here"
              onInput={(e) => setQueryText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter")
                  // enter
                  goToSearch();
              }}
            />
          </div>
          <div class="search-button" onclick={() => goToSearch()}>
            <span class="search-button-text">Search</span>
          </div>
        </div>
      </div>
    </>
  );
}
