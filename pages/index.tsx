import type { NextPage } from 'next'
import ComparaPage from '../components/compara-page.component'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Home: NextPage = (props) => {
    const {resp} = props
    return (
        <ComparaPage data={resp}/>
    )
}

export async function getServerSideProps(){
    const r = await prisma.coinoscope.findMany({
        select:{
            key:true,
            fecha:true,
            nombreOriginal:true,
            remainingQueryCount:true,
            items:true,
            localization:true
        }
    })
    const resp=JSON.parse(JSON.stringify(r))
    return {props:{resp}}
}

export default Home
