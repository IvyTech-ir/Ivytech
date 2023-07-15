import React from 'react';
import Navbar from './navbar';
import type { Meta, StoryObj } from '@storybook/react';
import SampleItems from './data';
import StoryDecorator from './../../config/StoryDecorator';
const meta: Meta<typeof Navbar> = {
    component: Navbar,
    decorators: [StoryDecorator],
};

export default meta;
export const Default: StoryObj<typeof Navbar> = {
    args: {
        items: SampleItems,
    },
};
