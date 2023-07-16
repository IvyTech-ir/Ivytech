import React from 'react';
import { getCurrentUser } from '../utils/helpers/localStorage';
export type user = {
    fullname?: string;
};
export type theme = 'light' | 'dark';

 //samples: React-Context
export const AuthContext = React.createContext<user>(null);
export const ThemeContext = React.createContext<theme>('light');

export default function Context(props: any) {
    console.log("aaaa renderContext",getCurrentUser())
    const [currentUser, setCurrentUser] = React.useState(getCurrentUser());
    return (
        <AuthContext.Provider value={currentUser}>
            <ThemeContext.Provider value="light">{props.children}</ThemeContext.Provider>
        </AuthContext.Provider>
    );
}
