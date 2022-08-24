import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarr } from '@fortawesome/free-regular-svg-icons'

const Rating = ({value, text}) => {
  return (
    <div className='rating'>
        <span>
            <FontAwesomeIcon 
                icon={
                    value >= 1 
                    ? faStar
                    : value >= 0.5 
                    ? faStarHalfStroke
                    : faStarr
                }
            ></FontAwesomeIcon>
        </span>
        <span>
            <FontAwesomeIcon 
                icon={
                    value >= 2 
                        ? faStar
                        : value >= 1.5 
                        ? faStarHalfStroke
                        : faStarr
                }
            ></FontAwesomeIcon>
        </span>
        <span>
            <FontAwesomeIcon 
                icon={
                    value >= 3
                        ? faStar
                        : value >= 2.5 
                        ? faStarHalfStroke
                        : faStarr
                }
            ></FontAwesomeIcon>
        </span>
        <span>
            <FontAwesomeIcon 
                icon={
                    value >= 4
                        ? faStar
                        : value >= 3.5 
                        ? faStarHalfStroke
                        : faStarr
                }
            ></FontAwesomeIcon>
        </span>
        <span>
            <FontAwesomeIcon 
                icon={
                    value >= 5
                        ? faStar
                        : value >= 4.5 
                        ? faStarHalfStroke
                        : faStarr
                }
            ></FontAwesomeIcon>
        </span>


        
        
        <span>{text && text}</span>
    </div>
  )
}

export default Rating