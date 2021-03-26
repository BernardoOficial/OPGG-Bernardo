import { useEffect, useState } from "react";
import styled from "styled-components";

const limparTagsNaString = string => {
  string = string.replace(/(\.)?\s?<.*>(.*)?<.*>(\s?)/g, "$1 $2$3");
  return string;
}

// limparTagsNaString('Bernardo <div> Oi </div> Pereira');
// limparTagsNaString(
//   "Periodicamente, o próximo ataque básico de Aatrox causa <physicalDamage>Dano Físico</physicalDamage> adicional e o cura com base na Vida máxima do alvo."
// );
// limparTagsNaString(
//  "Os ataques de Ashe reduzem a velocidade do alvo e fazem com que ela cause mais dano a ele.<br><br>Os Acertos Críticos de Ashe não causam dano adicional, mas reduzem ainda mais a velocidade do alvo."
// );

const Base = ({ className, passive, fourSpells }) => {

    const [sectionActive, setSectionActive] = useState(0);
    const [spellDescription, setSpellDescription] = useState([]);

    const activeSection = evento => {
        const targetSpell = Number(evento.target.dataset.numberSpell);
        setSectionActive(targetSpell);
    }

    useEffect(() => {
      passive && fourSpells && setSpellDescription([
        {
          name: passive && passive.name,
          description: passive && passive.description,
        },
        ...fourSpells
      ]);
    }, [passive, fourSpells]) 

    return (
      <article className={className}>
        <h1>Habilidades</h1>

        <div className="toggle-icon">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${
              passive && passive.image.full
            }`}
            alt="Passiva"
            data-number-spell="0"
            className={sectionActive === 0 ? "activeSpell" : undefined}
            onClick={activeSection}
          />
          {fourSpells &&
            fourSpells.map((spell, index) => (
              <img
                key={index + 1}
                src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${spell.image.full}`}
                alt={`${index + 1}ª Spell`}
                data-number-spell={index + 1}
                className={sectionActive === index + 1 ? "activeSpell" : undefined}
                onClick={activeSection}
              />
            ))}
        </div>

        <div className="spell-description">
          <h4>
            {spellDescription[sectionActive] &&
              spellDescription[sectionActive].name}
          </h4>
          <p>
            {spellDescription[sectionActive] &&
              limparTagsNaString(spellDescription[sectionActive].description)}
          </p>
        </div>
      </article>
    );
}

const Spells = styled(Base)`
  max-width: 600px;
  margin: 4rem auto;
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

      &.activeSpell {
        transition: 0.3s ease-out;
        box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.preto},
          0 0 0 8px ${({ theme }) => theme.colors.textoCinza};
      }
    }
  }

  .spell-description {
    max-width: 500px;
    margin: 0 auto;

    h4 {
      margin-top: 3rem;
    }

    p {
      margin-top: 1rem;
    }
  }
`;



export default Spells;