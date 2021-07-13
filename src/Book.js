import React from 'react'

const Book = ({ img, title, author }) => {
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <article className='book'>
            <img src={img} />
            <h1 onClick={() => console.log({ title })}>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler} onMouseOver={() => {
                console.log(title);
            }}>Click here</button>
            <button type='button' onClick={() => complexExample(author)}>Click here for complex example</button>
        </article>
    );
}

export default Book
