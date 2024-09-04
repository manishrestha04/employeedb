import React, { useEffect, useState } from 'react'
import FaTable from '../components/FaTable'
import axios from 'axios';
import Modal from "../components/Modal";
import Button from "../components/Button";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Dropdown from '../components/Dropdown';


function FaTablePage() {

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state
    const [deleteId, setDeleteId] = useState();
    const [editData, setEditData] = useState(null);
    const [modalAction, setModalAction] = useState('');

    let navigate = useNavigate();

    // Fetch data when component mounts
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate("/login");
            window.location.reload();
          } else{
      axios.get('http://localhost:3001/fatable') 
        .then((response) => {
          setData(response.data); 
          setLoading(false); 
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError('Failed to fetch data');
          setLoading(false); 
        });
    }
    }, []);


    const deleteFa = (id) => {
        axios.delete(`http://localhost:3001/faentry/${id}`, {
            headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
            console.log('Delete response:', response);
            setData((prevData) => prevData.filter((item) => item.id !== id)); // Update the state to reflect deletion
            setShowModal(false);
        })
        .catch((err) => {
            console.error('Error deleting data:', err.response ? err.response.data : err.message);
            setError('Failed to delete data');
        });
    };

    const updateFa = (id, updatedData) => {
        axios.put(`http://localhost:3001/faentry/${id}`, updatedData, {
            headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
            setData((prevData) =>
                prevData.map((item) => (item.id === id ? response.data : item))
            );
            setShowModal(false);
            setEditData(null);
        })
        .catch((err) => {
            console.error('Error updating data:', err.response ? err.response.data : err.message);
            setError('Failed to update data');
        });
    };

    const handleDeleteClick = (id) =>{
        setDeleteId(id);
        setShowModal(true);
        setModalAction('delete');
    }

    const handleCloseModal = () => {
        setShowModal(false); 
        setDeleteId(null);
        setEditData(null);
      };

      const handleConfirmDelete = () =>{
        if(deleteId) {
            deleteFa(deleteId)
        }
      }

      const handleEditClick = (item) => {
        setEditData(item);
        setShowModal(true);
        setModalAction('edit');
    };
    
    const handleSaveChanges = () => {
        if (editData) {
            updateFa(editData.id, editData);
        }
    };
    
    const actionBar = (
        <div>
            {editData ? (
                <Button onClick={handleSaveChanges} success>
                    Save Changes
                </Button>
            ) : (
                <Button onClick={handleConfirmDelete} success>
                    YES!
                </Button>
            )}
            <Button onClick={handleCloseModal} primary>
                NO!
            </Button>
        </div>
    );

    const options = [
        { label: "Senior FA", value: "Senior FA" },
        { label: "Junior FA", value: "Junior FA" },
        { label: "ITSR", value: "ITSR" },
        { label: "Technical Supervisor", value: "Technical Supervisor" },
        { label: "Sales Supervisor", value: "Sales Supervisor" },
        { label: "Branch Incharge", value: "Branch Incharge" },
      ];


    const modalContent = editData ? (
        <div className="space-y-4 p-4">
            <div className="flex flex-col">
                <label htmlFor="faname" className="text-sm font-medium text-gray-700 mb-2">FA Name:</label>
                <input
                    id="faname"
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={editData.faname}
                    onChange={(e) => setEditData({ ...editData, faname: e.target.value })}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="age" className="text-sm font-medium text-gray-700 mb-2">Age:</label>
                <input
                    id="age"
                    type="number"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={editData.age}
                    onChange={(e) => setEditData({ ...editData, age: e.target.value })}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="designation" className="text-sm font-medium text-gray-700 mb-2">Designation:</label>
                <Dropdown
                    id="designation"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    options={options}
                    value={options.find(option => option.value ===editData.designation)}
                    onChange={(option) => setEditData({ ...editData, designation: option.value })}
                />
            </div>
        </div>
    ) : (
        <p>Are you sure you want to delete this data?</p>
    );
    
    
      const modal = (
        <Modal onClose={handleCloseModal} actionBar={actionBar}>
          {modalContent}
        </Modal>
      );
    


      const config = [
        {
            label: 'Name',
            render: (list) => list.faname,
            sortValue: (list) => list.faname,
        },
        {
            label: 'AGE',
            render: (list) => list.age,
            sortValue: (list) => list.age,
        },
        {
            label: 'Designation',
            render: (list) => list.designation,
            sortValue: (list) => list.designation,
        },
        {
            label: 'Actions',
            render: (list) => (
                <div className="flex space-x-2">  {/* Use flexbox and add spacing between icons */}
                    <FaEdit 
                        size={22}  // Adjust the size as needed
                        onClick={() => handleEditClick(list)} 
                        className="cursor-pointer hover:text-blue-500"  // Add some hover effects if desired
                    />
                    <AiFillDelete 
                        size={22}  // Adjust the size as needed
                        onClick={() => handleDeleteClick(list.id)} 
                        className="cursor-pointer hover:text-red-500"  // Add some hover effects if desired
                    />
                </div>
            ),
        }
    ];
    



    const keyFn = (list) =>{
        return list.id
    }

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>{error}</div>; // Show error state

    return(
        <div className='relative'>
            
             <FaTable data={data} config={config} keyFn={keyFn}/>

             {showModal && modal}
        </div>
       
    )


}


export default FaTablePage
