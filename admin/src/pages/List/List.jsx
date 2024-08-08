import React, { useState, useEffect } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'


const List = ({url}) => {

  // API URL
  const [list, setList] = useState([]);

  // Fetch all foods
  const fetchList = async () => {
     const response = await axios.get(`${url}/api/food/list`);
     if(response.data.success){
         setList(response.data.data)
     }
     else{
      toast.error("Error");
     }
  }

  // Remove food
  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id: foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  // UseEffect
  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list-add flex-col'>
      <p>All Oils List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
           return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} ><button className='Delete-btn'>Delete</button></p>
            </div>
           )
        })}
      </div>
    </div>
  )
}

export default List
