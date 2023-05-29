
import React from 'react'

import Banner from"../Navbar/img/cloud1.png"

import {
    DescriptionContainer,
    DescriptionImage,
    SetImage,
    TablePlan,
    ThPlan,
    ThPlanTitle,
    TrPlan
     } from '../global/style/index'


import {BsXLg,BsCheckLg} from 'react-icons/bs'

    
function Description(){ 
    return (
        <>
        <DescriptionContainer id="suport">
            <TablePlan> 
               <TrPlan>
                     <ThPlanTitle></ThPlanTitle>
                     <ThPlanTitle>Starter</ThPlanTitle>
                    <ThPlanTitle>Business</ThPlanTitle>
                    <ThPlanTitle>Enterprise</ThPlanTitle>
                   
               </TrPlan>
               <TrPlan>
                    <ThPlan>Unlimited storage</ThPlan>
                    <ThPlan><BsXLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>
               <TrPlan>
                    <ThPlan>Root accesse</ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>
               <TrPlan>
                    <ThPlan>Personalized service</ThPlan>
                    <ThPlan><BsXLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>
               <TrPlan>
                    <ThPlan>Virtualization</ThPlan>
                    <ThPlan><BsXLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>
               <TrPlan>
                    <ThPlan>Cloud Storage</ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>
               <TrPlan>
                    <ThPlan>Cloud migration</ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>

               <TrPlan>
                    <ThPlan>Multi-cloud</ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>

               <TrPlan>
                    <ThPlan>Public cloud</ThPlan>
                    <ThPlan><BsXLg/></ThPlan>
                    <ThPlan><BsXLg/></ThPlan>
                    <ThPlan><BsCheckLg/></ThPlan>
               </TrPlan>

               
            </TablePlan>
          
               <SetImage>
                    <DescriptionImage src={Banner}/>
               </SetImage>

        </DescriptionContainer>
            
        </>
    )
}
export default Description