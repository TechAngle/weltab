import { createSignal } from "solid-js"
import "./Search.scss"

export default function Search() {
  const [queryText, setQueryText] = createSignal("");
  const [searchSystem, setSearchSystem] = createSignal("");

  const goToSearch = (text: string) => {

  }

  return (
    <>
      <div class="search">
        <div class="search-field bottom-border">
          <input class="search-input-field" placeholder="Enter your query here" onInput={(e) => setQueryText(e.target.value)} />
        </div>
        <div>
          <div class="search-button">
            <span class="search-button-text">
              Search
            </span>
          </div>
        </div>
      </div>
    </>
  )
}