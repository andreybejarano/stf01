import React from "react";
import Genre from "./Genre";

class GenresInDb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genresList: [],
            titleMouseOver: false
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3001/api/genres')
            .then(res => res.json())
            .then(genres => {
                this.setState({ genresList: genres.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleMouseOverTitle = () => {
        this.setState({ titleMouseOver: !this.state.titleMouseOver });
    };

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.handleMouseOverTitle}>Genres in Data Base</h5>
                    </div>
                    <div className={`card-body ${this.state.titleMouseOver ? 'bg-secondary' : ''}`}>
                        <div className="row">
                            {this.state.genresList.map((genre, index) =>
                                <Genre name={genre.name} key={index} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GenresInDb;
