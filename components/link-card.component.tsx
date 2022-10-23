import { trpc } from '../utils/trpc';

const LinkCard=(props:any)=>{
    let {links} = props
    const sortC=(a:any,b:any)=>{
        return a.id>b.id
    }
    links = links.sort(sortC)
    const update = trpc.updateCoin.useMutation({
        onSuccess(input){
            utils.coins.invalidate();
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
        <div>
            {
            links?.map((l:any)=>{
                return (
                    <div key={l.id} className={'rounded-xl items-center '+ (l.isCorrecto ? 'bg-green-200' : 'bg-blue-100')} >
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
        }
        </div>
    )
}
export default LinkCard;
