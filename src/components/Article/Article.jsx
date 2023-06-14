import React from 'react';
import "./Article.scss";

const Article = ({item}) => {
    const {img,index,header,content} = item;

  return (
    <div className='article-container'>
        <img src={img} alt="img" className='article-img'/>
        <div className='article-content'>
            <h1>{index}</h1>
            <h3>{header}</h3>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Article