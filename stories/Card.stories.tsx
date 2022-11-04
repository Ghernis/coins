import { ComponentStory,ComponentMeta } from '@storybook/react';
import {Card} from '../components/ui/CardInfo';

export default {
    title: 'UI/CardInfo',
    component: Card,
    argTypes:{
        intent:{
            type: 'boolean'
        }
    }
}as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const True = Template.bind({});

True.args={
    intent:true
}

export const False = Template.bind({});

False.args={
    intent:false
}
