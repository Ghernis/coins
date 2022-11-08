import { ComponentStory,ComponentMeta } from '@storybook/react';
import CardInfo from '../components/card-info';

export default {
    title: 'UI/CardInfo',
    component: CardInfo,
    argTypes:{
        size:{
            options:['sm','md','lg','prose']
        }
    }

}as ComponentMeta<typeof CardInfo>;

const Template: ComponentStory<typeof CardInfo> = (args) => <CardInfo {...args} />;

export const Primary = Template.bind({});

Primary.args={
    isCorrecto:true,
    titulo:'Poland, 2 Zlote 2008, 1994-2017 Issue - 2 ZÅote',
    pais:'Poland',
    size:'md',
    valor:'5',
    moneda:'$',
    anio:'1988'
    
}

export const Warning = Template.bind({});

Warning.args={
    fondo:'warning',
    titulo:'Poland, 2 Zlote 2008, 1994-2017 Issue - 2 ZÅote',
    descr:'Descripcion ejemlo',
    size:{
        values:['sm','md','lg','prose']
    }
}
