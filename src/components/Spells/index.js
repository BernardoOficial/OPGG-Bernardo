import { useState } from "react";
import styled from "styled-components";

const Base = ({ className, urlPassive, url4Spells, name, description }) => {

    const [sectionActive, setSectionActive] = useState(0);

    const activeSection = evento => {
        console.log(evento.target.dataset.numberSpell);
        const targetSpell = Number(evento.target.dataset.numberSpell);
        setSectionActive(targetSpell);
    }

    return (
      <article className={className}>
        <h1>Habilidades</h1>

        <div className="toggle-icon">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${urlPassive}`}
            alt="Passiva"
            data-number-spell="0"
            onClick={activeSection}
          />
          {url4Spells &&
            url4Spells.map((spell, index) => (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${spell.image.full}`}
                alt={`${index + 1}ª Spell`}
                data-number-spell={index + 1}
                onClick={activeSection}
              />
            ))}
        </div>

        <p>{sectionActive === 0 ? description : "Outra descrição"}</p>
      </article>
    );
}

const Spells = styled(Base)`
    max-width: 800px;
    margin: 4rem auto 0;
    color: ${({ theme }) => theme.colors.textoCinza};

    h1 {
        font-size: 1.8rem;
        line-height: 1.8rem;
    }

    .toggle-icon {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        @media (max-width: 500px) {
            flex-wrap: wrap;
        }

        img {
            display: inline-block;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            cursor: pointer;
        }
    }

    p {
        margin-top: 2rem;
    }
`

export default Spells;