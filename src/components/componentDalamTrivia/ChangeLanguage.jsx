// LanguageContext.js
import React from 'react';

const ChangeLanguage = React.createContext({ language: 'EN', handleLanguageChange: () => {} });

export default ChangeLanguage;