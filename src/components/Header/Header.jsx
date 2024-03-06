import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-section">
        <div className="image-container">
          <img
            src="src/assets/headshot-min.jpeg"
            alt="Anh Tien taking a photo"
          />
        </div>
        <div className="text-and-contact">
          <div className="header-text">
            <h1>Freelance Photographer and Visual Storyteller</h1>
          </div>
          <div className="subtext">
            <h4>
              Hi, I am Tien Anh Nguyen, a freelance photographer based in Ho Chi
              Minh city, Vietnam. Whether I&apos;m documenting my personal life
              or working for my clients, I&apos;m striving to create the best
              photos possible. I believe that photos can make people&apos;s
              lives better.
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
