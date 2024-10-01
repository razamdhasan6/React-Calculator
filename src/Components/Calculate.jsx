import React,{ useEffect, useRef, useState } from "react"
const Calculate = () => {
  const [displayValue, setDisplayValue] = useState("0")
  const inputRef=useRef(null)
  
  const operators = ["+", "-", "*", "/", "%", "."];
    
  useEffect(() => {
    setDisplayValue("0");
  },[]);

  const btnValue = (el) => {
    const value = el.target.value;

    if (displayValue === "0" && value !== ".") {
      setDisplayValue(value);
    } else {

      if (operators.includes(value)) {
        const lastChar = displayValue[displayValue.length - 1];
        if (operators.includes(lastChar)) {
          setDisplayValue(displayValue.slice(0, -1) + value);
        }
        else if (value === ".") {
          const lastNumber = displayValue.split(/[\+\-\*\/\%]/).pop();
          if (!lastNumber.includes(".")) {
            setDisplayValue(displayValue.concat(value));
          }
        } else if (value === "%") {
          setDisplayValue((parseFloat(displayValue) / 100).toString());
        } else {
          setDisplayValue(displayValue.concat(value));
          }
      
      } else {
        const lastNumber = displayValue.split(/[\+\-\*\/\%]/).pop();
        if (lastNumber.includes(".")) {
          const [integerPart, decimalPart] = lastNumber.split(".");
          if (decimalPart.length < 3) {
            setDisplayValue(displayValue.concat(value));
          }
        }
        else {
          setDisplayValue(displayValue.concat(value));
        }
      }
    }
  };
  
  const clearDisplay = () => {
    setDisplayValue("0")
  }
  const deleteDisplayValue = () => {
    if (displayValue) {
      setDisplayValue(displayValue.slice(0, -1))
    } else if (displayValue === "") {
      setDisplayValue("0");
    }
  }
 
  const equalValue = () => {
    try {
      setDisplayValue(eval(displayValue).toString())
    }
    catch (error) {
      setDisplayValue("Error")
    }
    }
    

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, [displayValue]);

  return (
    <div className="flex flex-col justify-end items-center pb-5 w-full h-[100svh]">
      <div className="grid grid-cols-1">
        <input ref={inputRef} className="outline-none text-[4rem] text-right w-auto max-w-[500px] bg-white px-[2rem]" type="text" readOnly value={displayValue} />
      </div>

      <div className="max-w-[500px] flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-4 gap-5 px-[2rem] py-5">
        <button onClick={clearDisplay} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem] sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="AC">AC</button>
        <button onClick={btnValue} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="%">%</button>
        <button onClick={deleteDisplayValue} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="☒">☒</button>
        <button onClick={btnValue} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="/">/</button >

        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="7">7</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="8">8</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="9">9</button>
        <button onClick={btnValue} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="*">x</button >

        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="4">4</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="5">5</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="6">6</button>
        <button onClick={btnValue} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="-">-</button >

        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="1">1</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="2">2</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="3">3</button>
        <button onClick={btnValue} className="p-5 bg-gray-200 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="+">+</button >

        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="00">00</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="0">0</button>
        <button onClick={btnValue} className="p-5 bg-white shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value=".">.</button>
        <button onClick={equalValue} className="p-5 bg-orange-500 shadow-2xl rounded-[50%] h-[3.5rem] w-[3.5rem]  sm:h-[5rem] sm:w-[5rem] text-[2rem] flex items-center justify-center  " value="=">=</button>
    
        </div>
      </div>
        
    </div>
  )
}

export default Calculate
