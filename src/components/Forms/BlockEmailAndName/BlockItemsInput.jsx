import React from 'react'


const BlockItemsInput = ({
    left,
    right
}) => {
    return (
        <div className="gap-7 flex flex-col sm:flex-row">
            <div className=" w-full sm:w-1/2">
                {left}
            </div>
            <div className="w-full sm:w-1/2">
                {right}
            </div>
        </div>
    )
}

export default BlockItemsInput