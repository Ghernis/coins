import {PanelCarta} from '@ui/PanelCarta'
//import {PanelCarta} from '../components/ui/PanelCarta'
import {Texto} from '@ui/Texto'
//import {Texto} from '../components/ui/Texto'

const CardInfo=(props:any)=>{
    const {fondo,titulo,size,descr} = props
    return (
    <PanelCarta fondo={fondo} size={size}>
            <div className='grid-2 h-full w-full items-center rounded-md justify-center bg-gray-800 back'>
                <Texto intent='titulo'>{titulo}</Texto>
                <div className=''>
                    <Texto intent='p'>{descr}</Texto>
                    <Texto intent='p'>{descr}</Texto>
                </div>

            </div>
    </PanelCarta>

    )
}

export default CardInfo;
