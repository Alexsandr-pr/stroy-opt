
import InputBlock from "../Input"
import Parent from "../Parent"


const InputEmail = ({setValue, value}) => {

    return (
        <Parent 
            htmlFor={"inputEmail"}
            label={"Email *:"}
        >
            <InputBlock 
                value={value}
                setValue={setValue}
                id={"inputEmail"}
                type={"email"} 
                name={"email"} 
                placeholder={"Введите ваш email"}
            />
        </Parent>
    )
}

export default InputEmail