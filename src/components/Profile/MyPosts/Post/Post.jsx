import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>

            <img src=""/>
            Post {props.message} like{props.likesCount}

        </div>

    )
}

export default Post;