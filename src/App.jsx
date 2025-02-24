import { useState } from "react";


function App() {

     const[count, setCount]  = useState(0)
   

     function start(){
       //   alert("Value updated")
          //count++;
          setCount(count=>count+1)
         // setCount(count=>count+1)
         // setCount(count=>count+1)
          console.log(count=>count+1)
     }

     function stop(){
      setCount(count-1)
      console.log(count)
     }
   
     return <div className="flex  flex-col">
       <p className="bg-red-700 p-5 text-center text-white font-bold">  Hello , Welcome to Softcrayons </p>
       <div  className="bg-red-700 p-5 text-center text-white font-bold">  {count} </div> 
        
         <button className="bg-green-600 pl-5 pr-5 pt-1 pb-1 text-white font-bold mt-10  rounded-sm   hover:bg-green-400 " onClick={start}> start </button>
         <button className="bg-red-600 pl-5 pr-5 pt-1 pb-1 text-white font-bold mt-10  rounded-sm  ml-12 hover:bg-red-400"  onClick={stop}> stop </button>
     </div>
  
}

export default App
