import React ,{ Component } from "react";
import {Query} from 'react-apollo'

import {
    COMMENTS_QUERY,
    COMMENTS_SUBSCRIPTION
  }from '../../../graphql'

import "./Comments.css";


let unsubscribe = null

export default class Comments extends Component {
    
    render(){
        return (
            <div className="rmdb-grid">
                <input type="checkbox" id={this.props.header} className="collapsegrid-input"></input>
                <label htmlFor={this.props.header} id="collapse_label"><h1>{this.props.header}</h1></label>
                <ul className="four-col-grid">
                    <Query query={COMMENTS_QUERY} variables={{movieid: this.props.movieId}}>
                    {({ loading, error, data, subscribeToMore }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(((</p>                       
                        /*const posts = data.users.map( (people,id) =>
                            <Author_post data={people} key ={id}/>
                        );*/
                        if (!unsubscribe)
                            unsubscribe = subscribeToMore({
                            document: COMMENTS_SUBSCRIPTION,
                            variables:{movieid: this.props.movieId},
                            updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev
                            const newPost = subscriptionData.data.post.data
                            let index = data.users.findIndex( (user)=>{
                                return (newPost.author.name === user.name)
                            })
                            data.users[index].posts.push(newPost)
                            return {
                                users:data.users
                            }                      
                            }
                        })
                        console.log(data)
                        return <div></div>
                    }}
                    </Query>    
                </ul>
            </div>
        );
    }
    
};


