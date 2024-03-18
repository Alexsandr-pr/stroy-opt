import React from 'react'
import SpollersItem from './SpollersItem'

const SpollersItems = ({data}) => {
    return (
        <div className='flex flex-col'>
            {
                data.map((item, i) => {
                    return (
                        <SpollersItem key={i} {...item} />
                    )
                })
            }
        </div>
    )
}

export default SpollersItems