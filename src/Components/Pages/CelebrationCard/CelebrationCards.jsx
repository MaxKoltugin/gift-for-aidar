// CelebrationCards.jsx
import { useRef, useState } from "react";
import "./celebrationCards.css";

const CelebrationCards = () => {
  const videoList = [
    "https://maxkoltugin.github.io/gift-for-aidar/1stV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/2ndV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/3rdV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/4thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/5thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/6thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/7thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/8thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/9thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/10thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/11thV.mp4",
    "https://maxkoltugin.github.io/gift-for-aidar/12thV.mp4",
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];

    // Если кликнули на активное видео - пауза
    if (activeIndex === index) {
      video.pause();
      setActiveIndex(null);
      return;
    }

    // Пауза для предыдущего видео
    if (activeIndex !== null) {
      const prevVideo = videoRefs.current[activeIndex];
      prevVideo.pause();
      prevVideo.currentTime = 0;
    }

    // Запуск нового видео
    video.currentTime = 0;
    video.muted = false;
    video
      .play()
      .then(() => setActiveIndex(index))
      .catch((e) => console.error("Play error:", e));
  };

  const handleVideoEnd = (index) => {
    setActiveIndex(null);
    videoRefs.current[index].currentTime = 0;
  };

  return (
    <div className="cards-list-wrapper">
      <ul className="card-list">
        {videoList.map((src, i) => (
          <li className={`card ${activeIndex === i ? "active" : ""}`} key={i}>
            <div className="video-wrapper">
              <video
                className="card-video"
                src={src}
                ref={(el) => (videoRefs.current[i] = el)}
                onClick={() => handleVideoClick(i)}
                onEnded={() => handleVideoEnd(i)}
                playsInline
                webkit-playsinline="true"
                muted
                preload="auto"
                poster="https://maxkoltugin.github.io/gift-for-aidar/gift.png"
                disablePictureInPicture
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CelebrationCards;
