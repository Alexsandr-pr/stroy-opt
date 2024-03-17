import React from 'react'
import BlockInfoNumber from './BlockInfoNumber'

const data = [
    {
        "title":"17 805,3 м²",
        "text": "торговых и складских помещений"
    },
    {
        "title":"50 000+",
        "text": "наименований товара"
    },
    {
        "title":"2 500+",
        "text": "постоянных клиентов"
    },
    {
        "title":"440",
        "text": "опытных сотрудников"
    }
]


const BlockInfoItems = ({styles}) => {
    return (
        <div className={styles}>
            {
                data.map((item, i ) => {
                    return (
                        <BlockInfoNumber key={i} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default BlockInfoItems