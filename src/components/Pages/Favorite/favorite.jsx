import React ,{ Component } from "react";
import {Query} from 'react-apollo'
import {FAVORITE_QUERY, FAVORITE_SUBSCRIPTION}from '../../../graphql'
import "./favorite.css";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import FourGrid from "../FourGrid/FourGrid";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../../configurations/config";
import noImage from "./../../../no_image.jpg";

let unsubscribe = null

export default class Favorite extends Component {
    componentWillUnmount(){
        if(unsubscribe){
            unsubscribe()
            unsubscribe = null
        }
            
    }
    render(){ 
        console.log(this.props.id)
        if(this.props.id !== null)
        return (                
                <Query query={FAVORITE_QUERY} variables={{userId:this.props.id}}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error :(((</p>  
                    const userFavorite = data.favorites.favorite.map( movie =>{
                        return(
                            <MovieThumbnail
                                key={movie}
                                clickable={true}
                                image={
                                    movie.movie_poster
                                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                                            movie.movie_poster
                                        }`
                                        : noImage
                                }
                                movieId={movie.movieid}
                                movieName={movie.movie_title}
                        />
                        )
                    }                        
                    );
                    if (!unsubscribe)
                        unsubscribe = subscribeToMore({
                        document: FAVORITE_SUBSCRIPTION,
                        variables:{userId:this.props.id},
                        updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev
                            const newfavorite = {
                                movie_poster:subscriptionData.data.users.data.movie_poster,
                                movie_title :subscriptionData.data.users.data.movie_title,
                                movieid: subscriptionData.data.users.data.movieid
                            }   
                            console.log(prev)
                            return {
                                favorites:{
                                    ...prev.favorite,
                                    favorite:[newfavorite ,...prev.favorites.favorite]
                                }
                            }                 
                        }
                    })
                    return (
                        <FourGrid
                        header={null}
                        loading={null}
                        >{userFavorite}</FourGrid>
                    )
                }}
                </Query> 
        );
        else return (
            <div>null</div>
        )
    }
    
};
