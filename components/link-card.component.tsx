import { trpc } from '../utils/trpc';
import CardInfo from './card-info';
import {cva} from 'cva';

const LinkCard=(props:any)=>{
    let {links} = props
    const sortC=(a:any,b:any)=>{
        return a.id>b.id
    }
    links = links.sort(sortC)
    const update = trpc.updateCoin.useMutation({
        onSuccess(input){
            utils.getCoin.invalidate({key:links[0].coinoscopeId});
        }
    });
    const utils = trpc.useContext();
    const params = [
        {
            par:'countryName',
            display:'Pais'
        },
        {
            par:'nominal',
            display:'Valor'
        },
        {
            par:'currencyName',
            display:'Moneda'
        },
        {
            par:'yearInterval',
            display:'Anio'
        }]
    const togle=(l:any)=>{
        let val = l.isCorrecto ? false : true
        update.mutate( {id:l.id,isCorrecto:val})
    }
    return (
        <div className='grid grid-col-2 gap-6'>
            {

            links.map((l:any)=>{
                <CardInfo
                    isCorrecto={l.isCorrecto}
                    titulo={l.title}
                    size='md'
                    pais={l.countryName}
                    valor={l.nominal}
                    moneda={l.currencyName}
                    anio={l.yearInterval}
                    />
            })
            
            /*
            links?.map((l:any)=>{
                const styleCorrecto='bg-gradient-to-r from-green-500 to-cyan-500/50 border border-green-700'
                const styleIncorrecto='bg-gradient-to-r from-pink-500 to-yellow-500/50 border border-pink-700'
                return (
                    <div key={l.id} className={'rounded-xl items-center '+ (l.isCorrecto ? styleCorrecto : styleIncorrecto)} >
                        <div className='font-bold text-xl text-black'>{l.title}</div>
                        <div className='flex'>
                            {
                            params.map(ps=>{
                                return (
                                    <div key={ps.display}>
                                        <div className='text-pink-600'>{ps.display}</div>
                                        <div className='text-blue-600'> {l[ps.par]}</div>
                                    </div>
                                )
                            })
                        }



                            <label className="relative flex justify-between items-center p-2 text-xl">
                                Correcto
                                <input onClick={()=>togle(l)} defaultChecked={l.isCorrecto} type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                                <span className="w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
                            </label>

                        </div>
                        <a href={l.pageUrl} className='text-xl font-medium text-black'>{l.page}</a>
                    </div>
                )
            })
        */}
        </div>
    )
}
export default LinkCard;
