import Image from 'next/image'
import LinkCard from './link-card.component'
import CardInfo from './card-info';

const Panel =(props:any)=>{
    const {registro} = props
    const items = registro.items
    return (
        <>
            <div className='p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
                <div className='shrink-0'>
                    <Image
                        alt='Imagen'
                        src={`/originales/${registro?.nombreOriginal}.jpg`}
                        width={400}
                        height={400}
                        />
                    {/*<Image
                        alt='Imagen'
                        src={`/originales/${registro?.nombreOriginal.replace("A","B")}.jpg`}
                        width={400}
                        height={400}
                        />*/}
                </div>
                <div>
                    <div className='grid grid-col-2'>
                        {
                                registro.items.map((l:any)=>{
                            return (
                            <CardInfo   
                                    key={l.key}
                                isCorrecto={l.isCorrecto}
                                titulo={l.title}
                                size='md'
                                pais={l.countryName}
                                valor={l.nominal}
                                moneda={l.currencyName}
                                anio={l.yearInterval}
                                />
                            )
                            })
                    }

                        </div>
                </div>
            </div>
            </>
    )
}

export default Panel
