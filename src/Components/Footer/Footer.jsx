import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const handleShareW = () => {
    window.open(
      "whatsapp://send?text=Подарок! 🎉%0Ahttps://maxkoltugin.github.io/gift-for-aidar/"
    );
  };
  const handleShareTg = () => {
    window.open(
      "https://t.me/share/url?url=https://maxkoltugin.github.io/gift-for-aidar/&text=Подарок! 🎉"
    );
  };

  return (
    <div className="footer">
      <div className="footer-logo-wrapper">
        <NavLink to="https://github.com/MaxKoltugin">
          <img
            className="footer-logo"
            src={"https://maxkoltugin.github.io/gift-for-aidar/logo-big.png"}
            alt=""
          />
        </NavLink>
      </div>
      <div className="author-wrapper"></div>
      <div className="date-wrapper">
        <p className="date">
          <strong>16.11.25</strong>
        </p>
      </div>
      <div className="share-wrapper">
        <p className="share-text">Поделиться:</p>
        <div className="share-buttons">
          <button
            className="wpbtn"
            title="share to whatsapp"
            onClick={handleShareW}
          >
            <img
              className="wp"
              src="https://maxkoltugin.github.io/gift-for-aidar/w.svg"
              alt=""
            />
          </button>
          <button
            className="wpbtn"
            title="share to telegram"
            onClick={handleShareTg}
          >
            <img
              className="tg"
              src="https://maxkoltugin.github.io/gift-for-aidar/tg.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
