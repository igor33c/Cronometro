
import { SetTimer } from './Components/SetTimer';
import Title from './Components/Title';
import './styles/global.css'

export function App() {
  return (
    <div className='flex justify-center bg-gradient-to-r from-gray-500 to-gray-700 mx-10 my-5 text-center '>
      <h1 className="text-white">
        <Title />        
        <SetTimer /> 
        
      </h1>
        
    </div>
  );
}


