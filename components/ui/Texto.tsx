import {cva,VariantProps} from 'cva';

const textoStyles = cva('rounded-md max-w-prose drop-shadow-lg',
    {
        variants:{
            intent:{
                titulo:'font-semibold tracking-wide text-center text-zinc-200',
                p:'font-normal text-pink-500'
            }
        },
        defaultVariants:{
            intent:'p'
        }
    }
)

export interface TextoProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textoStyles>{}

export const Texto: React.FC<TextoProps> =({
    className,
    intent,
    ...props
})=>(
<div className={textoStyles({intent, class:className})} {...props} />
);
