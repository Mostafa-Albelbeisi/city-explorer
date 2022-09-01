import React from "react";
import { Card, Col } from "react-bootstrap";

class Movie extends React.Component{
    render(){
        return(
            <>
            <h3>Movie data:</h3>
            {this.props.movieData.map(item => {
                return(
                    <div>
                        <Col>
                        <Card style={{ width: '18rem',height:"55rem"}}>
                            <Card.Img variant="top" src={item.poster_path} alt="poster" />
                            <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Text>
                            Release date: {item.release_date}
                            <br></br>
                            Rate : {item.vote_average}
                            <br></br>
                            Overview: {item.overview}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </div>
                )
            })}


            </>
        )
    }
}
export default Movie;