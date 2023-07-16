import React from 'react';
export type user = {
    fullname?: string;
};
export type theme = 'light' | 'dark';

 //samples: React-Context
export const AuthContext = React.createContext<user>({fullname:"asd"});
export const ThemeContext = React.createContext<theme>('light');

export default function Context(props: any) {
    return (
        <AuthContext.Provider value={null}>
            <ThemeContext.Provider value="light">{props.children}</ThemeContext.Provider>
        </AuthContext.Provider>
    );
}
