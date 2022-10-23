import { useState, useEffect } from 'react'
import Panel from './panel.component'

const ComparaPage= (props:any)=>{
    const {data} =  props.data
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
            <div className='container mx-auto px-4 grid grid-cols-6 gap-4'>
                <button className='col-start-1 col-end-2 rounded-lg py-2 px-4 bg-blue-500' onClick={()=>changeItem(-1)}>Anterior</button>
                <button className='col-end-7 col-span-1 rounded-lg py-2 px-4 bg-blue-500' onClick={()=>changeItem(1)}>Proxima</button>
            </div>
            <Panel registro={data[item]} />
            </>
    )
}

export default ComparaPage
