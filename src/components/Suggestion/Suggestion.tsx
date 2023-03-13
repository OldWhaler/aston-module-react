import { Link } from 'react-router-dom';

import { CharacterInfo } from '../../store';

import './Suggestion.scss';

const Suggestion = ({ characters }: { characters: CharacterInfo[] }) => {
  return (
    <ul className='suggestion'>

      {characters
        .slice(0, 5)
        .map(character => {

          return (
            <li key={character.id}>
              <Link
                to={`/character/${character.id}`}
                className="suggestion__link"
              >{character.name}</Link>
            </li>
          );

        })}

    </ul>
  );
};

export { Suggestion };