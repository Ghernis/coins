import type { NextPage } from 'next'
import {trpc} from '../utils/trpc'


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
        </>
    )
}

export default Home
