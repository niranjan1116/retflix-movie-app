import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";

const url = "https://api.tvmaze.com/search/shows?q=all";

const getMovies = async () => {
    try {
        const response = await axios.get(url);
        console.log('response:-', response);
        return response.data;
    } catch (error) {
        console.log('error while getting movies:-', error);
        throw error; 
    }
};

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    console.log("MoviesPage Component:-", movies);

    return (
        <Container>
            <Row>
                {error ? (
                    <Col>
                        <h3>An error occurred: {error.message}</h3>
                    </Col>
                ) : (
                    movies.map((movie) => (
                        <Col className="mt-4" key={movie.show.id}>
                            <MovieCard movie={movie} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default MoviesPage;
