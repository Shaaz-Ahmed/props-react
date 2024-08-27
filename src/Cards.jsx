import React from 'react';

function Cards(Props) {
    console.log(Props);
    return (
    <div className='cards'>
        <div className='card'>
            <img src={Props.imgsrc} alt='mypic' className='card__img' />  
            <div className='card_info'>
            <span className='card__category'>{Props.title} </span>
            <h3 className='card_title'> {Props.sname} </h3>
            <a href={Props.link}> 
            <button> Watch Now</button> 
            </a>
        </div>
    </div>
    </div>
    );

}
export default Cards;

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS5hMRPQ1FXsgwFb7SuVzHbRz4-lX00bjSQ&s