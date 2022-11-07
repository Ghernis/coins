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
"usmint.gov"
]
*/
    //6.25 asiertos por moneda
    return (
        <>
            <div>home</div>
            <CardInfo
                fondo='warning'
                size='prose'
                titulo='Moneda 10 peso'
                descr='esta es una descripcion de la moneda'
             />

        </>

    )
}

export default Home
