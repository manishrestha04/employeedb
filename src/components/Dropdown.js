import React, { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';


function Dropdown({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect (()=> {
        const handler = (event) => {
            if (divEl.current) {
                return;
            }

            if (!divEl.current || !divEl.current.contains(event.target)) {
                setIsOpen(false);
            };
        }
        document.addEventListener('click', handler, true);
        
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []) 


    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const renderedOptions = options.map((option)=> {
        return <div key={option.value} className="hover:bg-yellow-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)}>{option.label}</div>
    })

    const handleOptionClick = (option)=> {
        setIsOpen(false);
        onChange(option);
        
    }

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown;
