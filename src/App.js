import { useEffect, useState } from 'react';
import './App.css';
import AppTitle from './AppTitle.js';
import Search from './Search.js';
import ListOfMovies from './ListOfMovies.js';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = (title) => {
        fetch(`${API_URL}&s=${title}`).then(response => response.json()).then(data => setMovies(data.Search))
    };

    useEffect( () => {
        searchMovies('Spiderman');
    }, []);

    return (
    <div className="app"> 
        <AppTitle></AppTitle> 
        <Search searchMovies = {searchMovies} /> 
        <ListOfMovies movies={movies} /> 
    </div>
    );
}

export default App;