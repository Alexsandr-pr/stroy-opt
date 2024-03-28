


const Counter = ({text}) => {
    return (
        <div className="flex items-center gap-2 justify-between">
            {text}
            <CounterButton text={"-"}/>
            <span className="text-main-title text-lg ">1</span>
            <CounterButton text={"+"}/>
        </div>
    )
}

const CounterButton = ({text}) => {
    return (
        <button className="bg-[#F3F4F5] text-lg text-[#4A5056] rounded-full w-[61px] h-[43px]">
            {text}
        </button>
    )
}



export default Counter