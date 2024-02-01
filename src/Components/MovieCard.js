import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const MovieCard = (props) => {
    const { movie } = props;
    console.log("MovieCard Component:-", movie);

    const navigate = useNavigate();

    function handleClick() {

        let movieId = movie.show.id;
        navigate(`/bookmovie/${movieId}`, { state: { movie } });
    }


    const imageUrl = movie.show.image ? movie.show.image.original : '';

    return (
        <>
            <Card style={{ width: '18rem' }}>
               
                {imageUrl && <Card.Img variant="top" src={imageUrl} />}
                <Card.Body>
                    <Card.Title>{movie.show.name}</Card.Title>
                    <Card.Text>
                        Language: {movie.show.language}
                        <br />
                        Status: {movie.show.status}
                    </Card.Text>
                    <Button class="btn btn-warning" onClick={handleClick} >
                        Show More
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default MovieCard;
