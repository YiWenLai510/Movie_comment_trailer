import React from "react";
import PropTypes from "prop-types";
import ScrollToTop from "react-scroll-up";

import Spinner from "./../Pages/Spinner/Spinner";
import Navigation from "./../Pages/Navigation/Navigation";
import MovieInfo from "./../Pages/MovieInfo/MovieInfo";
import MovieInfoBar from "./../Pages/MovieInfoBar/MovieInfoBar";
import FourGrid_Collapse from "./../Pages/FourGrid/FourGrid-Collapse";
import Actor from "./../Pages/Actor/Actor";
import Youtube from "./../Pages/Youtube/Youtube"
import "./Movie.css";

const Movie = ({ movie, videos,directors, actors, loading }) => {
    if (movie && directors && actors && videos) {
        return (
            <React.Fragment>
                <Navigation movie={movie.title} />
                <MovieInfo movie={movie} directors={directors} />
                <MovieInfoBar
                    time={movie.runtime}
                    budget={movie.budget}
                    revenue={movie.revenue}
                />
                <Youtube videos={videos}></Youtube>
                <FourGrid_Collapse header="Actors">
                    {actors.map(actor => (
                        <Actor key={actor.id} actor={actor} />
                    ))}
                </FourGrid_Collapse>
                <FourGrid_Collapse header="Comments">
                    {actors.map(actor => (
                        <Actor key={actor.id} actor={actor} />
                    ))}
                </FourGrid_Collapse>
                <ScrollToTop showUnder={160}>
                    <span>
                        <i className="fas fa-arrow-circle-up fa-3x movie-top" />
                    </span>
                </ScrollToTop>
                {!actors && !loading ? <h1>No Movie Found</h1> : null}
            </React.Fragment>
        );
    } else {
        return <Spinner />;
    }
};

Movie.propTypes = {
    actors: PropTypes.array,
    directors: PropTypes.array,
    loading: PropTypes.bool,
    videos: PropTypes.object,
    movie: PropTypes.object
};

export default Movie;
