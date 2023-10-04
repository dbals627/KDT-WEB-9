import React from 'react';
import Mycontext from './store/lang-context';
import { useContext } from 'react';

export default function LanguageSelector() {
  // 두번째 방법
  const value = useContext(Mycontext);

  return (
    <div>
      <h2>현재 선택된 언어: {value.language}</h2>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        <option value='ko'>한국어</option>
        <option value='en'>영어</option>
      </select>

      <h2>현재 선택된 테마: {value.theme}</h2>
      <select
        value={value.theme}
        onChange={(e) => value.setTheme(e.target.value)}
      >
        <option value='light'>라이트모드</option>
        <option value='dark'>다크모드</option>
      </select>
    </div>
  );

  // 첫번째 방법
  //   return (
  //     <Mycontext.Consumer>
  //       {(value) => {
  //         return (
  //           <div>
  //             <h2>현재 선택된 언어: {value.language}</h2>
  //             <select
  //               value={value.language}
  //               onChange={(e) => value.setLanguage(e.target.value)}
  //             >
  //               <option value='ko'>한국어</option>
  //               <option value='en'>영어</option>
  //               <option value='jp'>일본어</option>
  //             </select>
  //           </div>
  //         );
  //       }}
  //     </Mycontext.Consumer>
  //   );
}
