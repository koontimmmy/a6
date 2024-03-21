'use client'
import { useReducer } from 'react'
import InteractiveCard from './InteractiveCard';
import { useState } from "react"
import Card from '@/components/Card'
import { Rating } from '@mui/material'



export default function (){
   

    const compareReducer = (compareList:Map<string,number>, action: {type:string, hospitalName:string,rating:number})=>{

        switch(action.type){
            case 'add': {
                return new Map(compareList.set(action.hospitalName,action.rating));
            }
            case 'remove':{
                compareList.delete(action.hospitalName);
                return new Map(compareList)
            }
            default: return compareList
        }
    }

    const [compareList,dispatchCompare] = useReducer(compareReducer
        ,new Map([
            ['Chulalongkorn Hospital', 5],
            ['Rajavithi Hospital', 5],
            ['Thammasat University Hospital', 5],
            ]));


    return (
        <div>
            <div style={{margin:"20px" , display:"flex", flexDirection:"row",flexWrap:"wrap" ,justifyContent:"space-around", alignContent:"space-around"}}>
            <Card hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'  
             onCompare={(hospital:string,rating:number)=>dispatchCompare({type:'add',hospitalName:hospital,rating:rating})}
            />
          
            <Card hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' 
             onCompare={(hospital:string,rating:number)=>dispatchCompare({type:'add',hospitalName:hospital,rating:rating})}
            />
            <Card hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' 
             onCompare={(hospital:string,rating:number)=>dispatchCompare({type:'add',hospitalName:hospital,rating:rating})}
            />
             </div>

            {Array.from(compareList).map(([hospital, rating])=>( 
                <div key={hospital} onClick={()=> {dispatchCompare({type:'remove', hospitalName:hospital, rating: rating})} } data-testid ={hospital}>
                {hospital} : {rating}</div>
                
            ))}


            



            

        </div>
        
    )
}
