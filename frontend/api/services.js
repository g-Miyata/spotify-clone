import api from './api.js';

const responseArtists = await api.get('/artists');
const responseSongs = await api.get('/songs');

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
