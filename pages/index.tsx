import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [source, setSource] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const letters = e.target.value.toLowerCase();
    const alphabets = [..."abcdefghijklmnopqrstuvwxyz 　\n"];
    if ([...letters].every(e => alphabets.includes(e))) {
      setError("");
    }
    else {
      setError("使用できない文字が含まれています");
    }
    setSource(e.target.value);
  };

  return (
    <div className="container pt-3">
      <p className="fs-1 text-center">プリコネパイラー</p>
      <p>ローマ字からアストルム文字を生成できるよ</p>
      <label htmlFor='source' className="form-label">変換したいローマ字</label>
      <textarea className="form-control" id="source" rows={3} value={source} onChange={onChange} />
      <p className="text-danger">{ error }</p>
      <div className="mt-3">アストルム文字</div>
      {
        error === "" &&
        [...source].map((e, i) => {
          if (e === "\n") {
            return <br key={i} />;
          }
          const path = (e === " " || e === "　") ? "/space.webp" : ("/" + e + ".webp");
          return <img key={i} className="img-fluid" src={path} width="25" height="25" />
        })
      }
    </div>
  )
}

export default Home
