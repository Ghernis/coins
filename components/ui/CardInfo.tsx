import React  from 'react';
import {cva,VariantProps} from 'cva';

const cardStyles = cva(
    'grid rounded-md justifi-around items-center max-w-prose drop-shadow-lg',
    {
        variants:{
            intent:{
                true:'bg-gradient-to-r from-green-500 to-cyan-500/50 border border-green-700',
                false:'bg-gradient-to-r from-pink-500 to-yellow-500/50 border border-pink-700'
            },

        },
        defaultVariants:{
            intent:false
        }
    }
)

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardStyles> {}

export const Card: React.FC<CardProps> = ({
    intent,
    ...props
})=>{
    const {} = props
return (
        <div className={cardStyles({intent})} {...props}>
            <div className='items-center'>Titulo</div>
           {/* <p>Valor: {valor} {moneda}</p>
            <p>Anio: {anio}</p>
            <p>Pais: {pais}</p>
            <p>correcto</p>*/}
        </div>
    )
}
