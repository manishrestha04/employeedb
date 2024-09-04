
import Table from "./Table";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import useSort from "../hooks/use-sort";


function SortableTable (props) {
    const {config, data} = props;    

    const {
        sortOrder, sortBy, sortedData, setSortColumn} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: ()=>(
            
            <th className="cursor-pointer hover:bg-gray-100" 
            onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center">
                {getIcons(column.label, sortBy, sortOrder)}
                {column.label}
                </div>
                
            </th>
            )
        }
    })

    

    return <Table {...props} data={sortedData} config={updatedConfig}/>


}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
        <GoTriangleUp />
        <GoTriangleDown />
    </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoTriangleUp />
        </div>
    } else if (sortOrder === 'desc')
        return <div>
            <GoTriangleDown />
        </div>;
}

export default SortableTable;


/* import Table from "./Table";


function SortableTable (props) {
    const {config} = props;

    const handleClick = (label) =>{
        console.log(label);
    }

    const updatedConfig = config.map((column)=>{
        if (!column.sortValue) {
            return column;
        }

        return{
            ...column,
            header: () => <th onClick={() => handleClick(column.label)}>{column.label} is sortable</th>
        }
    })


    return <Table {...props} config={updatedConfig}/>
    
}


export default SortableTable; */
