import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

async function postData() {
  try {
    //응답 성공 
    const response = await axios.post('127.0.0.1:5000',{
      	//보내고자 하는 데이터 
        username: "devstone",
        password: "12345"
    });
    console.log(response);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
}
postData()