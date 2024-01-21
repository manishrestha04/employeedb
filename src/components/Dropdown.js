 import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown ({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState (false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // close the dropdown
        setIsOpen(false);
        // what option did the user select
        onChange(option);
    }

    const renderedOptions = options.map((option)=> {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=> handleOptionClick(option)} key= {option.value}>
            {option.label}
        </div>
    });

   /* let content= 'Select...';
    if (selection) { 
        content = selection.label;
    } */


    return ( 
      <div className="w-48 relative">
         <Panel 
        className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg"/>
        </Panel>
    {isOpen && <Panel className="absolute top-full" >{renderedOptions}</Panel>}
    </div>
    );
}

export default Dropdown; /*

import { useState } from "react";

function Dropdown ({options}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const renderedOptions = options.map((option)=> {
        return (
            <div key={option.value} >
                <div onClick = {handleClick} >
                    {option.label}
                </div>
            </div>
        )
    })
        return <div>{renderedOptions} </div>
}

export default Dropdown ; */

