import styled from "styled-components";

const Item = ({ className, idName, name, tags }) => {
  const lastIndex = tags.length - 1;

  const lastTag = tags[lastIndex];
  const formatTagsEmString = tags
    .join(", ")
    .replace(`, ${lastTag}`, ` e ${lastTag}`);

  return (
    <li className={className}>
      <figure>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${idName}_0.jpg`}
          loading="lazy"
          alt={name}
        />
        <div>
          <h1>{name}</h1>
          <p>{formatTagsEmString}</p>
        </div>
      </figure>
    </li>
  );
};

const ItemCampeao = styled(Item)`
  display: inline-block;
  list-style: none;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    z-index: 1;
    transition: all 0.3s linear;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.5);
  }

  figure {
    position: relative;
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    div {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 10px;
      color: #ffffff;
    }
  }
`;

export default ItemCampeao;