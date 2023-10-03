import './App.css';
import Navbar from './Components/Navbar.js';
import Counter from './Components/Counter.js';

function App() {
  return (
    <>
   <Navbar/>
   <div className='mx-48 mt-10'>
   <h1 className='text-4xl'>All tasks (0 task)</h1>
   <div className="view flex justify-between mt-10">
    <div>
    <i className="fi fi-rr-settings-sliders m-5"></i>
    <i className="fi fi-rr-apps"></i>
    </div>
    <select className='border-none btn'>
      <option disabled>Sort by</option>
      <option value="date">Date</option>
      <option value="complete">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
   </div>
   </div>
   
   </>
  );
}

export default App;
