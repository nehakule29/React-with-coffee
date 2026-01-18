import { useState , useCallback , useEffect, useRef} from 'react'


// Respond with one word: variable name
function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

   const passRef= useRef(null);
  const passGenerator = useCallback(()=>{
    let symb = "!@#$%^&*(){}";
    let nums = "1234567890";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(numAllowed) pass+= nums[ Math.floor(Math.random()*nums.length)];
    if(charAllowed) pass += symb[ Math.floor(Math.random()*symb.length)];
    for(let i = 2;i<length;i++){
      let char = (Math.random()*str.length+1);
      pass += str.charAt(char);

    }
    setPass(pass);
  },[length, numAllowed, charAllowed, setPass]);

  const copyPassToClip =useCallback(()=>{

  },[pass])

  useEffect(()=>{
    passGenerator();  
  },[length, numAllowed, charAllowed, passGenerator]);


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800' > 
    <h1 className="text-white text-center my-3"> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pass} className="outline-none w-full py-1 px-3 bg-white text-gray-800" readOnly placeholder="Password"></input>
        <button onClick={copyPassToClip} className="bg-blue-500 hover:bg-orange-600 text-white font-bold py-1 px-4" ref={passRef} >copy</button>
      </div>
      <div>
        <div>
          <input type="range" min={6} max={20} value={length} className="cursor-pointer"  onChange={(e) => {setLength(e.target.value)}}/><label> Length :{length}</label>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <input type="checkbox" id="num" defaultChecked = {numAllowed} onChange={(e) => {setNumAllowed(e.target.checked)}}/> <label>Nums</label>
          <input type="checkbox" id="char" defaultChecked = {charAllowed} onChange={(e) => {setCharAllowed(e.target.checked)}}/> <label>Characters</label>

          </div>

      </div>
    </div>
    
  )
}

export default App
