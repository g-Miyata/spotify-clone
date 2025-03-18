import React from 'react';
import Player from '../components/Player';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';
const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter((currentSongObj) => currentSongObj._id === id)[0];

  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist);

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj._id}`}>
            <img src={artistObj.image} alt={`Imagem do artista ${artist}`} width={75} height={75} />
          </Link>
        </div>

        <Player duration={duration} randomIdFromArtist={randomIdFromArtist} audio={audio} />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
