import React from 'react'
import NavbarGroup from './navbarGroup';
import ThemeProvider from '../../views/masterLayout/providers/themeProvider';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Navbar from '../navbar/navbar';

const meta: Meta<typeof NavbarGroup> = {
  component: NavbarGroup,
  decorators: [
    (Story) => (
      <ThemeProvider  >
        <Navbar>
          <Story  />
        </Navbar>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type CounterStory = StoryObj<typeof NavbarGroup>;
export const Default: CounterStory = {
     args:{
       Items:[{Caption:"test",Link:"test"}]
    }
};
