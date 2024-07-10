import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton';
import BlockItemsInput from 'components/Forms/BlockEmailAndName/BlockItemsInput'
import CustomInput from 'components/Forms/CustomInput'
import { useState } from 'react'



const AdressEdit = () => {


    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [company, setCompany] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [flatNumber, setFlatNumber] = useState("");
    
    return (
        <form className='p-10 w-full  rounded-lg flex flex-col gap-5 border  border-[#EDF0F2]'>
            <BlockItemsInput
                left={
                    <CustomInput
                        setValue={setName}
                        value={name}
                        placeholder={"Как вас зовут"}
                        label={"Ваше имя *:"}
                    />
                }
                right={
                    <CustomInput
                        setValue={setSurname}
                        value={surname}
                        label={"Фамилия *:"}
                        placeholder={"Введите вашу фамилию"}
                    />
                }
            />
            <CustomInput
                setValue={setCompany}
                value={company}
                label={"Название компании:"}
                placeholder={"Введите название вашей компании"}
            />

            <BlockItemsInput
                left={
                    <CustomInput
                        value={region}
                        setValue={setRegion}
                        placeholder={"Область"}
                        label={"Область \ Регион *:"}
                    />
                }
                right={
                    <CustomInput
                        value={city}
                        setValue={setCity}
                        label={"Город *:"}
                        placeholder={"Введите название вашего города"}
                    />
                }
            />
            <BlockItemsInput
                left={
                    <CustomInput
                        value={street}
                        setValue={setStreet}
                        placeholder={"Введите название вашей улицы"}
                        label={"Улица *:"}
                    />
                }
                right={
                    <BlockItemsInput
                        left={
                            <CustomInput
                                value={houseNumber}
                                setValue={setHouseNumber}
                                placeholder={"Номер дома"}
                                label={"Номер дома *:"}
                            />
                        }
                        right={
                            <CustomInput
                                value={flatNumber}
                                setValue={setFlatNumber}
                                label={"Квартира:"}
                                placeholder={"Номер квартиры"}
                            />
                        }
                    />
                }
            />
            <div className="w-1/5">
                <BigBluebutton text={"Сохранить изменения"}/>
            </div>
        </form>
    )
}

export default AdressEdit