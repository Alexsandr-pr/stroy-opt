


const Counter = ({text, onChangeCurrent, current}) => {

    

    return (
        <div className="flex items-center gap-2 justify-between">
            {text}
            <CounterButton disabled={current === 1 } cb={() => onChangeCurrent(-1)} text={"-"}/>
            <span className="text-main-title text-lg ">{current}</span>
            <CounterButton cb={() => onChangeCurrent(1)} text={"+"}/>
        </div>
    )
}

const CounterButton = ({text, cb, disabled}) => {
    return (
        <button disabled={disabled} onClick={() => cb()} className="bg-[#F3F4F5] text-lg text-[#4A5056] rounded-full w-[61px] h-[43px]">
            {text}
        </button>
    )
}



export default Counter