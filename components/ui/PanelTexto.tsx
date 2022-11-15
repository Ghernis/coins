import {cva, VariantProps} from 'cva';
const panelStyles = cva(
    'grid grid-2h-full w-full rounded-md justify-center items-center',
    {
        variants:{
            fondo:{
                primary:'bg-gray-800',
                warning:'bg-zinc-400'
            }
        },
        defaultVariants:{
            fondo:'primary'
        }
    }
)

export interface PanelTextProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelStyles>{}

export const PanelText: React.FC<PanelTextProps> =({
    className,
    fondo,
    ...props
})=>(
<div className={panelStyles({fondo, class:className})} {...props}></div>
)
