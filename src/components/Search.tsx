import { createMemo, createSignal, For, Show } from "solid-js";
import "./Search.scss";
import { IconTypes } from "solid-icons";
import { FaBrandsGoogle } from "solid-icons/fa";
import { SiDuckduckgo, SiMicrosoftbing } from "solid-icons/si";
import { Transition } from "solid-transition-group";
import SearchSystemSelector from "./SearchSystemSelector";
import { SearchSystem } from "../types/SearchSystem";

const availableSearchSystems: SearchSystem[] = [
  {
    name: "Google",
    searchPattern: "https://www.google.com/search?q={{request}}",
    icon: FaBrandsGoogle,
  },
  // {
  //   name: "Bing",
  //   searchPattern: "https://www.bing.com/search?q={{request}}",
  //   icon: SiMicrosoftbing,
  // },
  {
    name: "DDG",
    searchPattern: "https://duckduckgo.com/?t=h_&q={{request}}",
    icon: SiDuckduckgo,
  },
];

export default function Search() {
  const [queryText, setQueryText] = createSignal("");
  const [searchSystem, setSearchSystem] = createSignal(
    availableSearchSystems[0],
  );

  const goToSearch = () => {
    if (!queryText().trim())
      // if no text provided
      return;

    const system = searchSystem();

    window.location.href = system.searchPattern.replace(
      "{{request}}",
      encodeURI(queryText()),
    );
  };

  return (
    <>
      <div class="search">
        <SearchSystemSelector
          setSearchSystem={setSearchSystem}
          getSearchSystem={searchSystem}
          searchSystemsList={availableSearchSystems}
        />
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
