import Carosal from './component/Carosal';
import Navbar from './component/Navb';
import data from './component/data';
import ImgCard from './component/ImgCard';
import './App.css'

function App() {
  return (
     <>
      <Navbar/>
      <Carosal />
      <div className='cardu'>
      {
         data.map((item)=>{
            return  <ImgCard className='cards' title={item.title} desc={item.desc} imgUrl={item.imgUrl}/>
          })      
      }
      </div>

     </>
  );
}

export default App;
