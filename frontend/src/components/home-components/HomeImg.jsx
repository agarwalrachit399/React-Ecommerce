import React from 'react'
import {Link} from 'react-router-dom'


const HomeImg = (props) => {
    return (
        <div>
            <img className='sample-product' src={props.image} alt=''/>
            <Link to={props.link}>
            <p className='py-3'>{props.name}</p></Link>
        </div>
    )
}

export default HomeImg
