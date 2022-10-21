import Image from 'next/image'
import LinkCard from './link-card.component'

const Carta =(props:any)=>{
    const {registro} = props
    console.log(registro)
    return (
        <>
            <div className='p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
                <div className='shrink-0'>
                    <Image
                        src={`/originales/${registro.nombreOriginal}.jpg`}
                        width={200}
                        height={200}
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
