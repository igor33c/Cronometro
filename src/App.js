import {Button} from './Components/Button';
import { Timer
 } from './Components/Timer';
import './styles/global.css'
export function App() {
  return (
    <div className='flex justify-center bg-gray-700 mx-10 my-5 text-center '>
      <h1 className="text-violet-500">
        <Timer/> 
        <Button/>
      </h1>
    </div>
  );
}


