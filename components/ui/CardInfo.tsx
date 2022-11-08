import React  from 'react';
import CardInfo from '../card-info'
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

export type types = VariantProps<typeof cardStyles>;

export const Card: React.FC<types> = ({
    intent,
    ...props
})=>{
return (
        <CardInfo intent={cardStyles({intent})} {...props} />
    )
}
