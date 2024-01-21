import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App () {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value:'green' },
        {label: 'Yellow', value:'yellow'},
        {label: 'Blue', value:'blue'},
    ];

    return( 
    <div className="flex">
    <Dropdown options={options} value={selection} onChange={handleSelect} />
    <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div> )
};
export default App; /*

import Dropdown from "./components/Dropdown";

function App () {

    const options = [

        { label: 'Red', value:'red'},
        { label: 'Blue', value:'blue'},
        { label: 'Yellow', value:'yellow'}
    ]

    return (
    <Dropdown options={options}/>)
}

export default App; */
