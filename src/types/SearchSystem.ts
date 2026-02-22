import { IconTypes } from "solid-icons";

interface SearchSystem {
  name: string;
  searchPattern: string; // replace {{request}} with query
  icon: IconTypes;
}

export type { SearchSystem };
