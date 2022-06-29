import axios from 'axios';

const getEpisodes = async (season) => {
  return await axios.get(
    `https://rickandmortyapi.com/api/episode?episode=s0${season}`,
  );
};

export {getEpisodes};
