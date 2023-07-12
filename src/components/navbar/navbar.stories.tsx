import React from 'react'
import Navbar from './navbar';
import ThemeProvider from './../../views/masterLayout/providers/themeProvider';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  decorators: [
    (Story) => (
      <ThemeProvider  >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type CounterStory = StoryObj<typeof Navbar>;
export const Default: CounterStory = {
  args: {
    Items:
      [
        {
          Link: "",
          Caption: "Interface",
          Items:[
            {
              Caption:"test",
              Fa:"cog"
            }
          ]
        }
      ]
  }
};
