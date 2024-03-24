import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'
import SaleBlock from '../SaleBlock'
import QuestionLeft from './QuestionLeft'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

const Question = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'>  
            <Breadcrumbs page={"Вопрос-ответ"}/>
            <div className="mb-5">
                <HeaderBlock title={"Вопрос-ответ"}/>
            </div>
            <AsideParentPage
                left={
                    <QuestionLeft/>
                }
                right={
                    <SaleBlock/>
                }
            />
            
        </div>
    )
}

export default Question