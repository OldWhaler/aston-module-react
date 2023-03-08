import type { CharacterInfo } from '../../store';

import './CharacterCard.scss';

const CharacterCard = ({ character }: { character: CharacterInfo }) => {
  const { name, species, image } = character;

  return (
    <li className="character-card">
      <div className="character-card__image">
        <img src={image} alt={name} />{" "}
      </div>
      <h2 className="character-card__title">{name}</h2>
      <p className="character-card__text">{species}</p>
    </li>
  )
}

export { CharacterCard }