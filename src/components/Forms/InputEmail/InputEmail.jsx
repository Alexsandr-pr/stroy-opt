
import InputBlock from "../Input"
import Parent from "../Parent"


const InputEmail = () => {

    return (
        <Parent 
            htmlFor={"inputEmail"}
            label={"Email *:"}
        >
            <InputBlock 
                id={"inputEmail"}
                type={"email"} 
                name={"email"} 
                placeholder={"Введите ваш электронный адрес"}
            />
        </Parent>
    )
}

export default InputEmail