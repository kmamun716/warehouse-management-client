import React from 'react';

const Blog = ({blog}) => {
    const {id, title, image, description, difference} = blog;
    return (
        <div className='row my-5'>
            <div className={id%2!==0?"col-md-6 d-flex align-items-center":'col-md-6 d-flex order-last align-items-center'}>
                <img className='img-fluid w-100' src={image} alt={title} />
            </div>
            <div className={id%2!==0?"col-md-6 order-last":'col-md-6'}>
                <h4>{title}</h4>
                {
                    difference ? <div><p>{description.part_1}</p> <p>{description.part_2}</p></div> : <div>{description}</div>
                }
            </div>
        </div>
    );
};

export default Blog;