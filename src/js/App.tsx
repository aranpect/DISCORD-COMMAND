import React, { FormEvent, useState } from 'react';
import Swal from 'sweetalert2'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleHKClick = () =>{
    let element = (document.getElementById('sentaku') as HTMLSelectElement);
    const mchange = (document.getElementById("input") as HTMLInputElement).value;
    if (element.value==="1"){
      navigator.clipboard.writeText("*"+mchange+"*")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="2"){
      navigator.clipboard.writeText("**"+mchange+"**")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="3"){
      navigator.clipboard.writeText("***"+mchange+"***")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="4"){
      navigator.clipboard.writeText("__"+mchange+"__")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="5"){
      navigator.clipboard.writeText("~~"+mchange+"~~")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="6"){
      navigator.clipboard.writeText("||"+mchange+"||")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="7"){
      navigator.clipboard.writeText("'"+mchange+"'")
      Swal.fire("文字をコピーしました");
    }
    else if (element.value==="8"){
      navigator.clipboard.writeText("> "+mchange)
      Swal.fire("文字をコピーしました");
    }
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
          <select name="sentaku" id="sentaku">
            <option value="1">文字が斜体になる【英数字のみ】</option>
            <option value="2">太字になる</option>
            <option value="3">文字が太字＆斜体になる</option>
            <option value="4">下線が引かれる</option>
            <option value="5">取り消し線を入れられる</option>
            <option value="6">テキストを隠せる（クリックすると出てくる）</option>
            <option value="7">黒の背景色が出る</option>
            <option value="8">| 左に引用の線画でます</option>
          </select>
          </label>
        </div>
        <div>
        <input id="input" type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleHKClick}>変換する</button>
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