import React ,{ Component } from "react";
import {Query} from 'react-apollo'
import {FAVORITE_QUERY, FAVORITE_SUBSCRIPTION}from '../../../graphql'
import "./favorite.css";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import FourGrid from "../FourGrid/FourGrid";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../../configurations/config";

let unsubscribe = null

export default class Favorite extends Component {
    componentWillUnmount(){
        if(unsubscribe){
            unsubscribe()
            unsubscribe = null
        }
            
    }
    render(){
        return (
            <FourGrid
                    /*header={null}
                    loading={null}*/
            >
                <Query query={FAVORITE_QUERY} variables={{userId: this.props.userId}}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error :(((</p>       
                    const userFavorite = data.users.favorite.map( movie =>{
                        return(
                            <MovieThumbnail
                                /*key={movie}
                                clickable={true}
                                image={
                                    movie.poster_path
                                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                                            movie.poster_path
                                        }`
                                        : noImage
                                }
                                movieId={movie}
                                movieName={movie.original_title}*/
                        />
                        )
                    }
                        
                    );
                    if (!unsubscribe)
                        unsubscribe = subscribeToMore({
                        document: FAVORITE_SUBSCRIPTION,
                        variables:{userId: this.props.userId},
                        updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev
                            const newfavorite = subscriptionData.data.users.data
                            return {
                                ...prev,
                                userFavorite: [newfavorite, ...prev.userFavorite]
                            }                 
                        }
                    })
                    return <ul>{ userFavorite}</ul>
                }}
                </Query> 
            </FourGrid>
                   
            
        );
    }
    
};
