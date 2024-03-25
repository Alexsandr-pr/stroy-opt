

const AsideParentPage = ({left, right}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="basis-[74%]">
                {left}
            </div>
            <div className='basis-[35%] lg:basis-[30%] 2xl:basis-[25%]'>
                {right}
            </div>
        </div>
    )
}

export default AsideParentPage