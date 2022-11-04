import React  from 'react';
import {cva,VariantProps} from 'cva';

const cardStyles = cva(
    'text-lg',
    {
        variants:{
            intent:{
                true:'text-green-500',
                false:'text-red-400'
            }
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
})=>(
        <div className={cardStyles({intent})} {...props}>
            texto prueba
            <p >texto</p>
        </div>
    )
