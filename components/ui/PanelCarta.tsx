import {cva,VariantProps} from 'cva';

const panelStyles = cva('rounded-md border-solid p-1',
    {
        variants:{
            fondo:{
                primary:'bg-gradient-to-r from-sky-400 via-green-600 to-teal-500 shadow-md shadow-green-500/50',
                warning:'bg-gradient-to-r from-pink-300  via-red-500 to-purple-400 shadow-md shadow-red-500/50'
            },
            size:{
                sm:'max-w-sm',
                md:'max-w-md',
                lx:'max-w-lg',
                prose:'max-w-prose'
            }
        },
        defaultVariants:{
            fondo:'primary'
        }
    }
)

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelStyles>{}

export const PanelCarta: React.FC<PanelProps> =({
    className,
    fondo,
    size,
    ...props
})=>(
<div className={panelStyles({fondo,size, class:className})} {...props} />
);
