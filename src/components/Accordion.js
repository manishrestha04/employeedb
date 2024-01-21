
/*
import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion ({items}) {
    
    const handleClick = (nextIndex)=> {
        setExpandedIndex((currentExpandedIndex)=> {
            if (currentExpandedIndex === nextIndex) {
            return -1;
        }
        else {return nextIndex;
        }
    });
};

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderedItems = items.map((item, index)=> {
        const isExpanded = index === expandedIndex;

        const icon = <span className ="text 2xl" >
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>



        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={ (()=> handleClick(index))}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
})
    return<div className="border-x border-t rounded"> {renderedItems}</div>    
}

export default Accordion; */

import { useState } from "react";
import {GoChevronLeft, GoChevronDown} from "react-icons/go";

function Accordion ({items}) {

    

    const [expandedList, setExpandedList] = useState(-1);

    const handleClick = (nextList) => {
        setExpandedList((currentExpandedList)=> {
            if (currentExpandedList === nextList) {
                return -1;
            }
            else {return nextList}
        })
    }
        

    const renderedItems = items.map((item, list)=> {
        const isExpanded = list === expandedList;

        const icon = <span className="text 2x1" >
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                 onClick={ (()=> handleClick(list))}>
                    {item.label}
                    {icon}
                </div>

                {isExpanded && <div className="border-b p-5">{item.content}</div> }
            </div>
        )
        
    })
    return <div className="border-x border-t rounded"> {renderedItems}</div>
}

export default Accordion;