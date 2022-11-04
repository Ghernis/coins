import { cva } from 'cva';
import type { VariantProps } from 'cva';

const cardInfo = cva([],{
    variants:{
        selected:{
            true:"",
            false:""
        }
    }
})

export type CardProps = VariantProps<typeof cardInfo>

export const CardInfo=({
    selected
}:CardProps={})=>(
<div>ha</div>
);
