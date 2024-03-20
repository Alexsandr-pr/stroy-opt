
import NewsItems from '../NewsItems/NewsItems'
import Pagination from 'components/Pagination/Pagination';
import { v4 as uuidv4 } from 'uuid';

import image from "./img/1.webp";
import image2 from "./img/2.webp";
import image3 from "./img/3.webp";
import image4 from "./img/4.webp";
import { Link } from 'react-router-dom';


const data  = [
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image3,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image2,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image3,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image4,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    }
]


const NewsPageContentLeft = () => {
    return (
        <Link to="newsitem">
            <div className="mb-16">
                <NewsItems data={data}/>
            </div>
            <div className="flex justify-center">
            <Pagination/>
            </div>
        </Link>
    )
}

export default NewsPageContentLeft