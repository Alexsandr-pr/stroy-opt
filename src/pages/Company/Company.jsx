import HistoryBlock from 'components/Company/History/HistoryBlock'
import WhyMeItems from 'components/Company/WhyMe/WhyMeItems'
import InfoBlockContentCompany from 'components/InfoBlock/InfoBlockContentCompany/InfoBlockContentCompany'
import InfoBlockParent from 'components/InfoBlock/InfoBlockParent/InfoBlockParent'
import News from 'components/News/News/News'
import React from 'react'

const Company = () => {
    return (
        
        <>
            <InfoBlockParent>
                <InfoBlockContentCompany/>
            </InfoBlockParent>

            <WhyMeItems/>
            <HistoryBlock/>
            <News/> 
        </>
        
    )
}

export default Company