import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import { ValueOf } from 'next/dist/shared/lib/constants';

export default function Card({ hospitalName, imgSrc, onCompare}: { hospitalName: string, imgSrc: string, onCompare: Function}) {
    let [rating, setValue] = React.useState<number | null>(5);



    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Product Picture' fill={true} className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[15%] p-[10px]'>{hospitalName} </div>
            
            <Rating
            id={hospitalName}
            value={rating}
            onChange={(event, newValue) => {
                setValue(newValue);
                onCompare(hospitalName, newValue);
            }}
            onClick={(e)=>{e.stopPropagation(); onCompare(hospitalName,rating)}}
            data-testid={hospitalName + ' Rating'}
            >
                
            </Rating>


        </InteractiveCard>
    );

    };



