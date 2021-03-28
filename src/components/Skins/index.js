import { useEffect, useState } from "react";
import styled from "styled-components";

const Base = ({ className, name, skins }) => {
  const [skinActive, setSkinActive] = useState(0);
  const [currentCampeao, setCurrentCampeao] = useState("");
  const [skinsCampeoes, setSkinsCampeoes] = useState([]);

  const activeSection = (evento) => {
    const targetSkin = Number(evento.target.dataset.numberSkin);
    setSkinActive(targetSkin);
  };

  useEffect(() => {
    skins && setSkinsCampeoes(skins);
    name && setCurrentCampeao(name);
  }, [skins, name]);

  return (
    <article className={className}>
      <div className="wrapper">
        <h1>Skins</h1>

        <div className="toggle-icon">
          {skinsCampeoes &&
            skinsCampeoes.map((skin, index) => (
              <img
                key={index}
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentCampeao}_${skin.num}.jpg`}
                alt={`${index + 1}ª Skin`}
                data-number-skin={skin.num}
                className={skinActive === skin.num ? "activeSpell" : undefined}
                onClick={activeSection}
              />
            ))}
        </div>
      </div>
      <div className="current-skin">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentCampeao}_${skinActive}.jpg`}
          alt="Nada"
        />
      </div>
    </article>
  );
};

const Skins = styled(Base)`
  max-width: 100%;
  margin: 4rem 0;
  color: ${({ theme }) => theme.colors.textoCinza};

  h1 {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }

  .wrapper {
      max-width: 600px;
      margin: 0 auto;
  }

  .toggle-icon {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
      display: inline-block;
      width: 70px;
      height: 70px;
      object-fit: cover;
      background-position: center;
      border-radius: 50%;
      cursor: pointer;

      &.activeSpell {
        transition: 0.3s ease-out;
        box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.preto},
          0 0 0 8px ${({ theme }) => theme.colors.textoCinza};
      }
    }
  }

  .current-skin {
      margin-top: 2rem;

      img {
          display: block;
          width: 100%;
          height: 70vh;
          object-fit: cover;
          background-position: center;
      }
  }
`;

export default Skins;
