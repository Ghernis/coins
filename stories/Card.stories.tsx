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
    fondo:'primary',
    titulo:'Titulo ejemplo',
    descr:'Descripcion ejemlo',
    size:{
        values:['sm','md','lg','prose']
    }
}

export const Warning = Template.bind({});

Warning.args={
    fondo:'warning',
    titulo:'Titulo ejemplo',
    descr:'Descripcion ejemlo',
    size:{
        values:['sm','md','lg','prose']
    }
}
