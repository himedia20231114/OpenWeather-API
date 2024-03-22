import { useState } from 'react'
import axios from 'axios'; 
import styled from 'styled-components'; 

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6bedce92f708cdeb65b084ee01b825c0`; 


  // OPEN API : 해당 지역의 날씨 정보를 출력 
  // 해당 지역
  const [location, setLocation] = useState(''); 

  // API 에서 받아온 값을 주입 : JSON 
  const [result, setResult] = useState({}); 

  const searchWeather = () => {

  }

  return (
    <>
      <div>
        <h1> Open API 를 사용 해서 axios 를 사용해서 날씨데이터 출력</h1>
        <p /> <p /> 
        <input placeholder='도시명을 영문으로 입력 하세요'
              type ='text'
              value = {location}
              onChange = {(e)=> {setLocation(e.target.value)}}
              onKeyDown={searchWeather}
              /> 

       </div>
    </>
  )
}

export default App
