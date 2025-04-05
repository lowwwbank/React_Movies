import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            category: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleRadio = (e) => {
        this.setState({ category: e.target.value }, () => {
          this.props.search(this.state.search, this.state.category);
        });
        
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.search(this.state.search, this.state.category);
        }
    }

    render() {
        return (
          <div className="search">
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="Find movie "
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleKeyDown}
                        />
                    </div>
                </div>
            </div>
            <form action="filter" className="filter">
              <label>
                <input className="with-gap" value="" name="type" type="radio" checked={this.state.category === ''} onChange={this.handleRadio}/>
                <span>All</span>
              </label>
              <label>
                <input className="with-gap" value="movie" name="type" type="radio" checked={this.state.category === 'movie'} onChange={this.handleRadio}/>
                <span>Movies only</span>
              </label>
              <label>
                <input className="with-gap" value="series" name="type" type="radio" checked={this.state.category === 'series'} onChange={this.handleRadio}/>
                <span>Series only</span>
              </label>
            </form>
          </div>
        );
    }
}

export default Search;