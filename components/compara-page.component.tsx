import { useState, useEffect } from 'react'
import Carta from './carta.component'
const ComparaPage=(props:any)=>{
    const {data} = props
    const [item,setItem] = useState(0)
    const changeItem=(val:number)=>{
        if (item==0 && val < 0) {
        }else{
            if(item==data.length && val>0){
            }
            else{
                setItem(item+val)
            }
        }
    }
    return (
        <>
            <div>
                <button className='rounded-lg py-2 px-4 bg-blue-500' onClick={()=>changeItem(-1)}>Anterior</button>
                <button className='rounded-lg py-2 px-4 bg-blue-500' onClick={()=>changeItem(1)}>Proximo</button>
            </div>
            <Carta registro={data[item]} />
            </>
    )
}

export default ComparaPage
