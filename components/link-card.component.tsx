const LinkCard=(props:any)=>{
    const {links} = props
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
    return (
        <div>
            {
            links.map((l:any)=>{
                return (
                    <div key={l.id} className='bg-blue-200 rounded-xl' >
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