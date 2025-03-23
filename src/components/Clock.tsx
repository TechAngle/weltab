import { Component, createSignal, JSXElement, onCleanup } from "solid-js";
import "./Clock.scss"

interface ICurrentTime {
  hours: number,
  minutes: number,
  seconds: number
}

function getTime(): ICurrentTime {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes(); 
  const hours = now.getHours();

  return {
    hours,
    minutes,
    seconds
  }
}

export default function Clock(): JSXElement {
  const [hours, setHours] = createSignal(0);
  const [minutes, setMinutes] = createSignal(0);
  const [seconds, setSeconds] = createSignal(0);

  const interval = setInterval(() => {
    const time = getTime();
    setHours(time.hours);
    setMinutes(time.minutes);
    setSeconds(time.seconds);
  }, 1000);

  const time = getTime();
  setHours(time.hours);
  setMinutes(time.minutes);
  setSeconds(time.seconds);

  onCleanup(() => clearInterval(interval));

  return (
    <>
      <div class="clock">
        <span>
          <span class="time-element hours">{String(hours()).padStart(2, '0')}</span>
          :
          <span class="time-element minutes">{String(minutes()).padStart(2, '0')}</span>
          :
          <span class="time-element seconds">{String(seconds()).padStart(2, '0')}</span>
        </span>
      </div>
    </>
  )
}