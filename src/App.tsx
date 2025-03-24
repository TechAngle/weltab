import './App.scss';
import './components/fade-animations.scss';

import { Component, createSignal, Show } from 'solid-js';
import Clock from './components/Clock';
import LoadScreen from './components/LoadScreen';
import { Transition } from 'solid-transition-group';
import Services from './components/Services';
import Search from './components/Search';
import LiveWallpaper from './components/LiveWallpaper';
import { useNavigate } from '@solidjs/router';

const App: Component = () => {
  const navigate = useNavigate();

  // test for Mozilla
  const isFirefox = /Firefox/i.test(navigator.userAgent);
  if (isFirefox) navigate("unsupported-browser");

  const [isLoadingScreen, setLoadScreenStatus] = createSignal(true);
  const [finishedLoading, setFinishedLoading] = createSignal(false);

  setTimeout(() => setLoadScreenStatus(false), 1500);
  setTimeout(() => setFinishedLoading(true), 100);
  
  return (
    <>
      {/* <Transition name="fade-out"  appear={true}>
        {isLoadingScreen() && <LoadScreen />}
      </Transition> */}
      <LiveWallpaper />
      <Show when={finishedLoading()}>
        <Transition name="fade-in" appear={true}>
          <div class="container">
            <Clock />
          </div>
        </Transition>
        <Search />
        <Services />
      </Show>
    </>
  );
};

export default App;
