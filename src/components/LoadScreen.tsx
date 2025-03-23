import { JSXElement } from "solid-js";
import "./LoadScreen.scss"

export default function LoadScreen(): JSXElement {
  return (
    <div class="load-screen-container">
      <div class="load-screen">
        <h1>
          Loading...
        </h1>
      </div>
    </div>
  )
}