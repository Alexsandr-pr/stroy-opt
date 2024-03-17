import React from 'react'
import RybricItem from './RybricItem'


const data = [
	{
		"title": "все публикации",
		"number":"123",
		"active": false
	},
	{
		"title": "Новости",
		"number":"34",
		"active": false
	},
	{
		"title": "Статьи",
		"number":"99",
		"active": true
	},
	{
		"title": "Советы",
		"number":"14",
		"active": false
	},
	{
		"title": "Обзоры",
		"number":"2",
		"active": false
	},
]





const RybricBlock = () => {
    return (
		<div className='py-5 px-6 border bg-white border-white3 rounded-lg'>
			<h3 className='font-medium leading-7 text-2xl  text-title-news mb-8'>Рубрики</h3>
			<div className="flex flex-col">
				{
					data.map((item, i) => {
						return (
							<RybricItem key={i} {...item} />
						)
					})
				}
			</div>
		</div>
		
    )
}

export default RybricBlock