
import SearchIcon from "components/Icon/SearchIcon"
import useMediaQuery from "hooks/useMediaQuery";

const HeaderSearch = () => {

    const query = useMediaQuery('(max-width:640px)');

    return (
        <label htmlFor="search" className="bg-blue w-full flex items-center rounded-md py-[3px] pl-[3px] pr-[3px]">
            <input 
                name="search"
                type="search" 
                className="py-[13px] w-full px-2 sm:px-4  text-brown border-input-border  focus:outline-blue2 rounded-md text-sm placeholder:text-sm  placeholder:text-[#A0A3A5] "  
                placeholder={query ? "Поиск..." :  "Найти среди 50000 товаров. Например: Дрель Bosch"}/>

            <button className="flex w-[56px] h-[46px] mx-auto justify-center  items-center">
                <SearchIcon/>
            </button>
        </label>
    )
}

export default HeaderSearch