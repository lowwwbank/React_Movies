import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {

    state = {
        films: null,
        loading: true
    };

    updateSearch = (searchTerm,category) => {
        this.setState({ loading: true, films: null }); 
        this.makeSearch(searchTerm,category)
            .then(data => {
                this.setState({ films: data, loading: false });
            });
    };

    makeSearch = (title, category) => {
        if (!category) category = ''
        let link = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${category}`
        return fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data['Search'] || [];
            });
    };

    componentDidMount() {
        this.setState({ loading: true });
        this.makeSearch('batman')
            .then(data => {
                this.setState({ films: data, loading: false });
            });
    }

    render() {
        const { films, loading } = this.state;

        return (
            <main className="content container">
                <Search search={this.updateSearch} /> 
                {
                    loading ? <Preloader /> : (films.length ? <Movies movies={films} /> : <h4>Ничего не найдено.</h4>)
                }
            </main>
        );
    }
}

export default Main;