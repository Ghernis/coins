import {useState} from 'react'
import {PanelCarta} from '@ui/PanelCarta'
//import {PanelCarta} from '../components/ui/PanelCarta'
import {Texto} from '@ui/Texto'
import {PanelText} from '@ui/PanelTexto'
import {Button} from '@ui/Button'
//import {Texto} from '../components/ui/Texto'

const CardInfo=(props:any)=>{
    const {isCorrecto,titulo,size,pais,valor,moneda,anio,pageUrl,page,change} = props
    const [correcto, setCorrecto] = useState(isCorrecto)
    const togle=(val:boolean)=>{
        const nVal = val ? false : true
        setCorrecto(nVal)
        change()
    }
    return (
    <PanelCarta fondo={correcto ? 'primary' : 'warning'} size={size}>
            <PanelText fondo={correcto ? 'primary' : 'warning'}>
                <Texto intent='titulo'>{titulo}</Texto>
                {/*<div className='grid grid-cols-2 place-items-center place-content-center'>*/}
                <div className='flex flex-col'>
                    <Texto intent='p' colorText={correcto ? 'primary' : 'danger'}>Pais</Texto>
                    <Texto intent='p'>{pais}</Texto>
                    <Texto intent='p' colorText='warning'>Valor</Texto>
                    <Texto intent='p'>{valor} {moneda}</Texto>
                    <Texto intent='p' colorText='warning'>Anio</Texto>
                    <Texto intent='p'>{anio}</Texto>
                    <div>
                    <Button><a href={pageUrl}>{page}</a></Button>
                    </div>
                </div>
                            <label className="relative flex justify-between items-center p-2 text-xl text-blue-300">
                                {
                                correcto ? 'Correcto' : 'Incorrecto'
                                }
                                <input onClick={()=>togle(correcto)} defaultChecked={correcto} type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                                <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
                            </label>

            </PanelText>
    </PanelCarta>

    )
}

export default CardInfo;
