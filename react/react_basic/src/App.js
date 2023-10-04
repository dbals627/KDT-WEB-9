import LanguageSelector from './14Context/LangSelector';
import Mycontext from './14Context/store/lang-context';

import { useState } from 'react';

function App() {
  // const [language, setLanguage] = useState('ko');
  // const [theme, setTheme] = useState('light');

  return (
    <>
      <Mycontext.Provider>
        <LanguageSelector />
      </Mycontext.Provider>
    </>
  );
}

export default App;
