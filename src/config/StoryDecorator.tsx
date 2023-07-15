import React from 'react';
import ThemeProvider from '../views/masterLayout/providers/themeProvider';
export default function StoryDecorator(Story: any) {
    return (
        <>
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        </>
    );
}
