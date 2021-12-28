import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='bg-light-green dib br3 pd3 ma2 grow shadow-5'>
            <img src = {`https://robohash.org/${id}`} alt='pic'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;