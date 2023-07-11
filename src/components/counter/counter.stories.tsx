import React from 'react'
import { Counter } from './counter';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from './../../store';


const meta: Meta<typeof Counter> = {
  component: Counter,
  decorators: [
    (Story) => (
      <Provider store={store} >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type CounterStory = StoryObj<typeof Counter>;
export const Primary: CounterStory = {
  
};
