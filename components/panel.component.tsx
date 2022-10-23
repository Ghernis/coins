import Image from 'next/image'
import LinkCard from './link-card.component'

const Panel =(props:any)=>{
    const {registro} = props
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
                    <Image
                        alt='Imagen'
                        src={`/originales/${registro?.nombreOriginal.replace("A","B")}.jpg`}
                        width={400}
                        height={400}
                        />
                </div>
                <div>
                    <>
                    {
                        registro.items.lenght!=0
                        ? <LinkCard links={registro.items}/>
                        : <p>No hay items</p>
                    }

                        </>
                </div>
            </div>
            </>
    )
}

export default Panel
