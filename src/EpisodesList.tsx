import React from "react";
import { IEpisode } from "./interfaces";

export const EpisodesList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favorites , store } = props;
  const {state, dispatch } = store
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Rick & Morty ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season:{episode.season} - - Episode: {episode.number}
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "UnFavoritize"
              : "Favorite"}
          </button>
        </section>
      </section>
    );
  });
};
export default EpisodesList;