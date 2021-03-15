import styled from "styled-components";

const Item = ({ className, idName, name, tags, resumehistory }) => {
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
      <p>{resumehistory}</p>
    </li>
  );
};

const ItemCampeao = styled(Item)`
  list-style: none;

  width: 100%;

  figure {
    position: relative;
    height: 180px;

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

  & > p {
    padding: 20px 15px;
    background-color: #222222;
    color: #777;
    height: 240px;
  }
`;

export default ItemCampeao;