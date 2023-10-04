import { createContext, useState } from 'react';

//Context 생성
//createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const Mycontext = createContext({
  // 선언만해둠
  language: '',
  theme: '',
  setLanguage: () => {},
  setTheme: () => {},
});

//provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');
  const [theme, setTheme] = useState('light');

  return (
    <Mycontext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </Mycontext.Provider>
  );
}

export default Mycontext;
