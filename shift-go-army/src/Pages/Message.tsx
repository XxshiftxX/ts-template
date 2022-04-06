import axios from 'axios';
import { useState } from 'react';
import './Message.scss';

export const Message = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const url = `${process.env.REACT_APP_API_URL}/messages`;
    axios.post(url, { author, content });
  };

  return (
    <div className="MessageApp">
      <h1>
        인편쓰기
      </h1>

      <div className="author">
        <span>작성자</span>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div className="message">
        <textarea name="message-form" id="message-form" value={content} onChange={(e) => setContent(e.target.value)} maxLength={1200} />
        <div className="overlay">
          엄마의 품에서 국가를 품으러
        </div>
        <div className="background"></div>
      </div>

      <div className="align-right">
        <button onClick={handleSubmit}>
          전송
        </button>
      </div>
    </div>
  )
};
