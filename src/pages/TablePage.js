/* import React from 'react'
//import Table from '../components/Table'
import SortableTable from '../components/SortableTable';

function TablePage() {
    const data = [
        {name:'Hyundai', color: 'bg-orange-500', rating: 5},
        {name:'Honda', color: 'bg-red-500', rating: 3},
        {name:'Toyota', color: 'bg-yellow-500', rating: 1},
        {name:'Mahindra', color: 'bg-green-500', rating: 4},
        {name:'BYD', color: 'bg-blue-500', rating: 2}
    ];


    const config = [
        {
            label: 'Car-Brand',
            render: (carb) => carb.name,
            sortValue: (carb) => carb.name
        },
        {
            label: 'Color',
            render: (carb) => <div className={`p-3 m-2 ${carb.color}`} />,
        },
        {
            label: 'Rating',
            render: (carb) => carb.rating,
            sortValue: (carb) => carb.rating
        },

        {
            label: 'Rating Squared',
            render: (carb) => carb.rating ** 2,
            sortValue: (carb) => carb.rating
        }
    ];

    const keyFn = (juice) =>{
        return juice.name;
    } 

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  )
}

export default TablePage; */


//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";


function TablePage() {
    const data = [
        {name: 'Abhinash Chaudhary', age:25, designation:'SFA'},
        {name: 'Bishal Rai', age:27, designation:'JFA'},
        {name: 'Khem Katuwal', age:32, designation:'SFA'},
        {name: 'Paban Khadka', age:52, designation:'SFA'},
        {name: 'Yubraj Lama', age:20, designation:'ITSR'},
        {name: 'Suraj Chaudhayr', age:33, designation:'SFA'},
        {name: 'Arjun Bhujel', age:55, designation:'SFA'},
        {name: 'Manish Shrestha', age:62, designation:'Supervisor'}
    ]

    const config = [
        {
            label:'FA Name',
            render: (list) => list.name,
            sortValue: (list) => list.name
        },
        {
            label:'AGE',
            render: (list) => list.age,
            sortValue: (list) => list.age
        },
        {
            label:'Designmation',
            render: (list) => list.designation,
            sortValue: (list) => list.designation
        }
    ]

    const keyFn = (list) =>{
        return list.name
    }


    return(
        <div>
            
             <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
       
    )


}

export default TablePage;