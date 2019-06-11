import React from "react";

import "./Youtube.css";

const Youtube = ({videos}) =>{
    if(videos){
        const url = `https://www.youtube.com/embed/${videos.results[0].key}`
        return(
            <div className='youtube_container'>
                <iframe className='youtube'
                    src={url} >
                </iframe>
            </div>
            
        )
    }

}

export default Youtube;