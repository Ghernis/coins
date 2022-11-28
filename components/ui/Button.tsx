import {cva,VariantProps} from 'cva';

const buttonStyles = cva(
  '',
  {
    variants: {
      colorBG: {
        gray: `
          bg-gray-300
          hover:bg-gray-400
          dark:bg-gray-700
          dark:hover:bg-gray-600
          text-gray-900
          dark:text-white
          ring-gray-400
        `,
        violet: `
          bg-violet-500
          hover:bg-violet-400
          dark:bg-violet-700
          dark:hover:bg-violet-600
          text-white
          dark:text-white
          ring-violet-400
        `,
      },
      size: {
        xs: 'px-1.5 py-0.5 rounded text-xs',
        sm: 'px-2 py-1 rounded-md text-sm',
        base: 'px-3 py-2 rounded-md text-base',
        md: 'px-4 py-3 rounded-md text-lg',
        lg: 'px-5 py-4 rounded-lg text-lg',
        xl: 'px-6 py-5 rounded-lg text-xl',
      },
    },
    defaultVariants: {
      size: 'base',
      colorBG:'violet'
    },
  }
);
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles>{}

export const Button: React.FC<ButtonProps> =({
    className,
    colorBG,
    size,
    ...props
})=>(
<button className={buttonStyles({colorBG,size,class:className})} {...props}></button>
);
