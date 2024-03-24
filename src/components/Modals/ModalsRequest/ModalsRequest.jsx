import InputName from "components/Forms/InputName/InputName"
import InputTel from "components/Forms/InputTel/InputTel"
import ModalsParent from "../ModalsParent/ModalsParent"


const ModalsRequest = () => {
    return (
        <ModalsParent buttonText={"Перезвоните мне"} title={"Заказать обратный звонок"} >
            <InputName/>
            <InputTel/>
        </ModalsParent>
        
    )
}

export default ModalsRequest