import React, {useState, useEffect} from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {

    const [films, setFilms] = useState(null)
    const [loading, setLoading] = useState(true)

    const updateSearch = (searchTerm,category) => {
        setLoading(true)
        setFilms(null)
        makeSearch(searchTerm,category)
            .then(data => {
                setFilms(data)
                setLoading(false)
            });
    };

    const makeSearch = async (title, category='') => {
        const link = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${category}`
        const response = await fetch(link)
        const data = await response.json()
        return data['Search'] || []

    };

    useEffect(() => {
        setLoading(true)
        makeSearch('batman')
            .then(data => {
                setFilms(data)
                setLoading(false)
            })

    },[])


    return (
        <main className="content container">
            <Search find={updateSearch} /> 
            {
                loading ? <Preloader /> : (films.length ? <Movies movies={films} /> : <h4>Ничего не найдено.</h4>)
            }
        </main>
    );
}

export default Main;