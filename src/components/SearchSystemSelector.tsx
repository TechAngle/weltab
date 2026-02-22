import { SearchSystem } from "../types/SearchSystem";
import { Accessor, createSignal, Setter } from "solid-js";
import { Show } from "solid-js";
import { FaBrandsGoogle } from "solid-icons/fa";
import { SiDuckduckgo } from "solid-icons/si";
import { For } from "solid-js";
import AvailableSearchSystems from "./AvailableSearchSystems";
import "./SearchSystemSelector.scss";

interface SystemSelectorProps {
  setSearchSystem: Setter<SearchSystem>;
  getSearchSystem: Accessor<SearchSystem>;
  searchSystemsList: SearchSystem[];
}

export default function SearchSystemSelector(props: SystemSelectorProps) {
  const [isSelectorOpen, setSelectorOpen] = createSignal(false);
  const toggleDropdown = () => {
    setSelectorOpen(!isSelectorOpen());
  };

  const selectSystem = (system: SearchSystem) => {
    props.setSearchSystem(system);
    setSelectorOpen(false); // Close the dropdown after selection
  };

  return (
    <div class="search-system-selector">
      <span onClick={toggleDropdown}>
        {(() => {
          const IconComponent = props.getSearchSystem().icon;
          return <IconComponent size={20} />;
        })()}
      </span>
      <Show when={isSelectorOpen()}>
        <div class={`search-system-list ${isSelectorOpen() ? "active" : ""}`}>
          <AvailableSearchSystems
            systemsList={props.searchSystemsList}
            selectSystem={selectSystem}
          />
        </div>
      </Show>
    </div>
  );
}
