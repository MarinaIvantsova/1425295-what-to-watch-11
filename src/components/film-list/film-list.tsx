import { useState } from 'react';
import { filmDescription } from '../../types/film';
import FilmsCard from '../films-card/films-card';

type FilmProps = {
  films: filmDescription[];
};

function FilmList({films}: FilmProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  // eslint-disable-next-line no-console
  console.log(activeCard);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmsCard key={film.id} film={film} setActiveCard={setActiveCard} activeCard={activeCard}/>)}
    </div>
  );
}

export default FilmList;