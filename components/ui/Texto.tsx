import {cva,VariantProps} from 'cva';

const textoStyles = cva('rounded-md max-w-prose drop-shadow-lg',
    {
        variants:{
            intent:{
                titulo:'font-semibold tracking-wide text-center',
                p:'font-normal'
            },
            colorText:{
                primary:'text-blue-200',
                secondary:'text-zinc-200',
                warning:'text-orange-200',
                danger:'text-red-200',
            }
        },
        defaultVariants:{
            intent:'p',
            colorText:'primary'
        }
    }
)

export interface TextoProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof textoStyles>{}

export const Texto: React.FC<TextoProps> =({
    className,
    intent,
    colorText,
    ...props
})=>(
<div className={textoStyles({intent,colorText, class:className})} {...props} />
);
