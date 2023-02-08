import './App.css';

function App() {
  let styles = {
    marginTop: '1000px' ,
    color: 'white' ,
    textAlign: 'center' ,
    opacity: '1',
    transition: 'all 0.5s'
  }

  let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
      box.target.style.color = 'black';
    })
  })
  
  let div = document.querySelectorAll('div');
  
  observer.observe(div[0]);


  return (
    <>
      <div style={styles}>새로운 리액트 연습 시작</div>
      <div style={styles}>이 페이지는 스크롤 애니메이션 구현</div>
      <div style={styles}>구현 시작</div>
      <div style={styles}>구현 끝</div>
    </>
  )
}

export default App;
