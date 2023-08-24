import Carosal from './component/Carosal';
import Navbar from './component/Navb';
import data from './component/data';
import ImgCard from './component/ImgCard';
import './App.css'
import FillForm from './component/FillForm';

function App() {
  return (
     <>
      <Navbar/>
      <Carosal />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',marginTop:'50px'}}>
         <h3 style={{backgroundColor:"#0D6EFD",padding:"10px",borderRadius:'10px',color:'white'}}>Photographers of the Year</h3>
      </div>
      <div className='cardu'>
      {
         data.map(ImgCard)      
      }
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw'}}>
         <h3 style={{backgroundColor:"#0D6EFD",padding:"10px",borderRadius:'10px',color:'white'}}>Get feaured</h3>
      </div>
      <div style={{margin:"50px"}}>
        <FillForm/>
      </div>
     </>
  );
}

export default App;