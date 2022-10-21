import Image from 'next/image'
import LinkCard from './link-card.component'

const Carta =(props:any)=>{
    const {registro} = props
    console.log(registro)
    return (
        <>
            <div className='p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
                <div className='shrink-0'>
                    <Image
                        alt='Imagen'
                        src={`/originales/${registro.nombreOriginal}.jpg`}
                        width={400}
                        height={400}
                        />
                </div>
                <div>
                    <LinkCard links={registro.items}/>
                </div>
            </div>
            </>
    )
}

export default Carta
