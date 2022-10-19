import React from "react";
import PropTypes from 'prop-types';
import '../Style/style.css';

PostList.propTypes = {
    posts: PropTypes.array
};

PostList.defaultProps = {
    posts: null
};

function PostList(props) {
    const { posts } = props;

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <div className="container">
                        <img className="meme-img" src={post.url}></img>
                    </div>
                    <h3 className="meme-name">{post.name}</h3>
                </div>
            ))}
        
        </div>
    );
}

export default PostList;