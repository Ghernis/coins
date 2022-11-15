import type { NextPage } from 'next'
import {trpc} from '../utils/trpc'

import {PanelCarta} from '@ui/PanelCarta'
import {Texto} from '@ui/Texto'
import CardInfo from '../components/card-info';

const Home: NextPage<any> = () => {
    const correctas =trpc.getCorrectasKeys.useQuery();
    /*
[
"en.numista.com",
"colnect.com",
"allnumis.com",
"lastdodo.com",
"worldcoingallery.com",
"coin-database.com",
"ucoin.net",
"coinscatalog.net",
"uproseint.gov"
]
*/
    //6.25 asiertos por moneda
    return (
        <>
            <div>home</div>
            <div className='grid grid-cols-3 p-3 gap-3'>
                <div className='grid-col-1 row-span-5'></div>
            <CardInfo
                isCorrecto={true}
                size='prose'
                titulo='Moneda 10 dolar'
                pais='Spain'
                valor={3}
                moneda='$'
                anio={1988}
             />
            <CardInfo
                isCorrecto={false}
                size='prose'
                titulo='Moneda 10 dolar'
                pais='Spain'
                valor={3}
                moneda='$'
                anio={1988}
             />
            <CardInfo
                isCorrecto={true}
                size='prose'
                titulo='Moneda 10 dolar'
                pais='Spain'
                valor={3}
                moneda='$'
                anio={1988}
             />
            <CardInfo
                isCorrecto={false}
                size='prose'
                titulo='Moneda 10 dolar'
                pais='Spain'
                valor={3}
                moneda='$'
                anio={1988}
             />
             </div>

        </>

    )
}

export default Home
