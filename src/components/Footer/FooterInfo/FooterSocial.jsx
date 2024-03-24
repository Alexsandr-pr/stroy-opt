import React from 'react'


import image1 from "../img/master-card.svg";
import image2 from "../img/visa.svg";

const data = [
    {
        "image": image2,
        "imageAlt":"visa"
    },
    {
        "image": image1,
        "imageAlt":"mastercard"
    }
]


const FooterSocial = () => {
    return (
        <ul className='flex flex-wrap gap-7 items-center'>
            {
                data.map(({image, imageAlt}) => {
                    return (
                        <li  key={imageAlt}>
                            <a href="#">
                                <img src={image} alt={imageAlt} />
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FooterSocial