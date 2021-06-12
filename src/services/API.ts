import axios from 'axios';


export const RickAndMortyAPI = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
});
