import { useState } from 'react'
import InputBox from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

import bgImage from '/home/classic/Pictures/pexels-fotios-photos-861090.jpg';

function App() {
  const [amount,setAmount] = useState(0);
  const [fromAmount,setFromAmount] = useState("eur");
  const [toAmount, setToAmount] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo =  useCurrencyInfo(fromAmount); 
  const options = Object.keys(currencyInfo || {});
  
  const swap = ()=>{
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[toAmount]);
  }
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 items-right">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setFromAmount(currency);
                                }}
                                selectCurrency={fromAmount}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                    className="outline-none w-full bg-transparent py-1.5 text-green-600 font-semibold" // Add text color

                                label="To"
                                amount = {convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{
                                  setToAmount(currency)
                                }}
                                selectCurrency={toAmount}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert {fromAmount} to {toAmount}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
