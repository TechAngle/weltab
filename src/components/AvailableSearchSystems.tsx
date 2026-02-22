import { For } from "solid-js";
import { SearchSystem } from "../types/SearchSystem";
import { Setter } from "solid-js";

interface ListProps {
  systemsList: SearchSystem[];
  selectSystem: (system: SearchSystem) => void;
}

export default function SearchSystemList(props: ListProps) {
  return (
    <For each={props.systemsList}>
      {(system) => (
        <div class="search-system" onClick={() => props.selectSystem(system)}>
          <system.icon size={20} />
          <span class="search-system-name">{system.name}</span>
        </div>
      )}
    </For>
  );
}
