import { useState } from 'react';

const videos = {
  deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail:
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  spider:
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
};

export default function App() {
  const [choice, setChoice] = useState('cat');
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);
  const [shouldLoop, setShouldLoop] = useState(true);

  function handleSelectVideo(e) {
    const pickedVideo = e.target.value;
    setChoice(pickedVideo);
  }

  function toggleLoop() {
    setShouldLoop((l) => !l);
  }

  function toggleAutoPlay() {
    setShouldAutoPlay((ap) => !ap);
  }

  return (
    <>
      <h1>Project 6 - Video player</h1>
      <Menu
        choice={choice}
        onSelectVideo={handleSelectVideo}
        onLoop={toggleLoop}
        onAutoPlay={toggleAutoPlay}
      />
      {/* Buttons to toggle loop/autoplay settings */}
      <button
        style={{ backgroundColor: shouldLoop ? 'green' : 'red' }}
        onClick={toggleLoop}
      >
        loop
      </button>
      <button
        style={{ backgroundColor: shouldAutoPlay ? 'green' : 'red' }}
        onClick={toggleAutoPlay}
      >
        autoplay
      </button>
      <br></br>

      <Player
        choice={choice}
        shouldAutoPlay={shouldAutoPlay}
        shouldLoop={shouldLoop}
      />
    </>
  );
}

function Menu({ choice, onSelectVideo }) {
  // Generates the radio button menu
  return (
    <>
      <form>
        {Object.keys(videos).map((videoName, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                name="video"
                value={videoName}
                checked={choice === videoName}
                onChange={(e) => onSelectVideo(e)}
              ></input>
              {videoName}
            </label>
          );
        })}
      </form>
      <br></br>
    </>
  );
}

function Player({ choice, shouldLoop, shouldAutoPlay }) {
  return (
    <>
      <video
        loop={shouldLoop}
        autoPlay={shouldAutoPlay}
        width="640"
        height="480"
        controls
        src={videos[choice]}
      ></video>
    </>
  );
}
