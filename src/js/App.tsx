import React, { useState } from 'react';
import Swal from 'sweetalert2'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleHKClick = () =>{
    Swal.fire("コピーしました");
  }

  return (
    <div>
    <header>
      <h1><a href="https://aranpect.com">Aranpect</a></h1>
    </header>
    <div>
      <section>
        <h2 className="text-center">このサイトの紹介</h2>
        <p className="text-center">Discordで使えるコマンドを自動作成します</p>
      </section>
      <section>
        <div>
          <label className="selectbox-006">
          <select name="pets" id="pet-select">
            <option value="">使用したいコマンドを選択</option>
            <option value="syasen">文字が斜体になる【英数字のみ】</option>
            <option value="futozi">太字になる</option>
            <option value="sya-futo">文字が太字＆斜体になる</option>
            <option value="under">下線が引かれる</option>
            <option value="torikeshi">取り消し線を入れられる</option>
            <option value="hide">テキストを隠せる（クリックすると出てくる）</option>
          </select>
          </label>
        </div>
        <div>
        <input id="input" type="text" value={inputValue} onChange={handleInputChange} />
        <button className="m-3" onClick={handleHKClick}>変換する</button>
        </div>
      </section>
    </div>
    <footer>
      <p className="text-center">©2023 Aranpect All Right Reserved</p>
    </footer>
    </div>
  );
}

export default App;