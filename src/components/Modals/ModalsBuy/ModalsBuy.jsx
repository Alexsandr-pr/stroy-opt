import InputName from "components/Forms/InputName/InputName"
import ModalsParent from "../ModalsParent/ModalsParent"
import InputEmail from "components/Forms/InputEmail/InputEmail"
import InputTel from "components/Forms/InputTel/InputTel"
import Title22 from "components/BlockText/Title22/Title22"

const ModalsBuy = () => {
    return (
        <ModalsParent title={"Заказать в 1 клик"} buttonText={"Купить"}>
            <div className="text-center">
            <Title22 title={"Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч"}/>
            </div>
            <InputName/>
            <InputEmail/>
            <InputTel/>
        </ModalsParent>
    )
}

export default ModalsBuy