import React from 'react';
import Link, {link} from 'next/link'
const Post = ({link,image,title})=>{
    console.log("Post id is ",title)
    return(
        <div className="column">
            <Link href="posts/[_id]" as={"posts/"+link} >
            <a className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={image} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                
                <div className="media-content">
                    <p className="title is-4">{ title }</p>
                </div>
                </div>
            </div>    
            </a>
            </Link>
            
        </div>
    );
}

export default Post;