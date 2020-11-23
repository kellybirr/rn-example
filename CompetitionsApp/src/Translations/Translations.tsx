import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, FunctionComponent, useState } from 'react';
import LocalizedStrings from 'react-native-localization';

// https://lokalise.com/blog/react-native-localization/#Implementing_React_Native_Internationalization

//const en = require('./en.json');
const en = require('./en.json');
const DEFAULT_LANGUAGE = 'en';
const APP_LANGUAGE = 'appLanguage';
const languages = { en };
const translations = new LocalizedStrings(languages);

export const LocalizationContext = createContext({
    translations,
    setAppLanguage: (_language: string) => {},
    appLanguage: DEFAULT_LANGUAGE,
    initializeAppLanguage: () => {},
});

export const LocalizationProvider: FunctionComponent = ({ children }) => {
    const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
    const setLanguage = (language: string) => {
        translations.setLanguage(language);
        setAppLanguage(language);
        AsyncStorage.setItem(APP_LANGUAGE, language);
    };
    const initializeAppLanguage = async () => {
        const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

        if (currentLanguage) {
            setLanguage(currentLanguage);
        } else {
            let localeCode = DEFAULT_LANGUAGE;

            setLanguage(localeCode);
        }
    };

    return (
        <LocalizationContext.Provider
            value={{
                translations,
                setAppLanguage: setLanguage,
                appLanguage,
                initializeAppLanguage,
            }}>
            {children}
        </LocalizationContext.Provider>
    );
};
