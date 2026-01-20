import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function Mycoffee() {
  return(
    <div>
      <h1>Hi I am a new function</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props : {
//     href :'https://www.youtube.com/watch?v=FxgM9k1rg0Q',
//     target: '_blank'
//   },
//   children : 'Go to youtube'
// }

const MyReactElement = React.createElement('a',
    { href :'https://www.youtube.com/watch?v=FxgM9k1rg0Q', target : '_blank'
}, 'Go to youtube'
);
// const MyReactElement = Vite.
// createElement('a',
//     { href :'https://www.youtube.com/watch?v=FxgM9k1rg0Q', target : '_blank'
// }, 'Go to youtube'
// );
createRoot(document.getElementById('root')).render(
  MyReactElement
    
  
)
