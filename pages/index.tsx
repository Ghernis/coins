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
                fondo='primary'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='primary'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='primary'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='primary'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 dolar'
                descr='esta es una descripcion de la moneda'
             />
             </div>

        </>

    )
}

export default Home
