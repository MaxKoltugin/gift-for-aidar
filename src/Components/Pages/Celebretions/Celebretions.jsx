import "./celebretions.css";
import MusicButton from "../../MusicButton/MusicButton";
import CelebrationCards from "../CelebrationCard/CelebrationCards";

const Celebretions = () => {
  return (
    <div className="celebretions-wrapper">
      <div className="music-wrapper">
        <MusicButton />
      </div>
      <div className="main-celebretion">
        <div className="image-wrapper">
          <img
            alt="celebretion-img"
            src="https://maxkoltugin.github.io/gift-for-aidar/birthday-image1.png"
            className="celebration-img"
          />
        </div>
        <div className="text-celebration-wrapper">
          <p className="title-celebration">
            <strong>Поздравление </strong>
          </p>
          <p className="text-celebration">
            Ты не из тех кто шумит о себе.
            <br />
            Ты тот кого чувствуют, даже когда молчишь.
            <br />
            Ты умеешь видеть суть, где другие видят маску.
            <br />
            Идти до конца, когда все сдались.
            <br />
            Хранить верность, даже если тебя предали.
            <br />
            Твоя сила не в громких словах, а в тихой уверенности.
            <br />
            Твоя глубина пугает слабых и притягивает сильных.
            <br />
            Ты не ищешь одобрения, ты задаешь стандарт.
            <br />
            Пусть рядом будут только те, кто достоин твоего внимания.
            <br />
            Пусть каждый твой шаг ведёт к тому чтобы зажигать твой огонь.
            <br />
            А мир продолжает восхищаться твоей силой, даже не зная на сколько ты
            настоящий.
            <br />
            Будь собой, мир и так не забудет тебя.
            <br />
            <br />С Днем рождения, холодный скорпион!
          </p>
        </div>
      </div>
      <CelebrationCards />
    </div>
  );
};

export default Celebretions;
