import { ComponentStory,ComponentMeta } from '@storybook/react';
import {Card} from '../components/ui/CardInfo';

export default {
    title: 'UI/CardInfo',
    component: Card,
    argTypes:{
        intent:{
            type: 'boolean'
        },
    }
}as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const True = Template.bind({moneda:'$', valor:30,pais:'spain',anio:1988});

True.args={
    intent:true,
}

export const False = Template.bind({});

False.args={
    intent:false,
}
