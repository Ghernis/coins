import type { NextPage } from 'next'
import ComparaPage from '../components/compara-page.component'
import { trpc } from '../utils/trpc'


const ControlCoins: NextPage<any> = () => {
    //const coins=  trpc.coins.useQuery();
    const coinsAll = trpc.getIds.useQuery();
    return (
        <>
            {
            coinsAll.isLoading
                ? <div>Cargando...</div>
                : <ComparaPage data={coinsAll}/>
            }
        </>
    )
}

//export async function getServerSideProps(){
//    const r = await prisma.coinoscope.findMany({
//        select:{
//            key:true,
//            fecha:true,
//            nombreOriginal:true,
//            remainingQueryCount:true,
//            items:true,
//            localization:true
//        }
//    })
//    const resp=JSON.parse(JSON.stringify(r))
//    return {props:{resp}}
//}

export default ControlCoins
