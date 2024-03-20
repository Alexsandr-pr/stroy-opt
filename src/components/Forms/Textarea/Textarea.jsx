import React from 'react'
import Parent from '../Parent'

const Textarea = ({label}) => {
    return (
        <Parent htmlFor={"textReview"} label={label}>

            <textarea className='w-full h-24 placeholder:text-input-text text-brown w-full text-base font-normal py-4 px-6 rounded-lg resize-none bg-white border border-input-border  focus:outline-blue2' name="" id="textReview" cols="30" rows="10"></textarea>
        </Parent>
    )
}

export default Textarea