import Spam from 'components/Spam/Spam'
import React from 'react'
import RybricBlock from '../Rybric/RybricBlock'

const NewsPageContentRight = () => {
    return (
        <>
            <div className="hidden lg:block mb-5">
                <RybricBlock/>
            </div>
            <Spam/>
        </>
    )
}

export default NewsPageContentRight