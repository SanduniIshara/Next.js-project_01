"use client";

import Todo from "../components/Todo";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api');
      setTodoData(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error('Error fetching todos');
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete('/api', {
        params: {
          mongoId: id
        }
      });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error('Error deleting todo');
    }
  };

  const completeTodo = async (id) => {
    try {
      const response = await axios.put('/api', {}, {
        params: {
          mongoId: id
        }
      });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      console.error("Error completing todo:", error);
      toast.error('Error completing todo');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api', formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
      toast.error('Error adding todo');
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[70%] max-w-[600px] mt-24 mx-auto">
        <input value={formData.title} onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea value={formData.description} onChange={onChangeHandler}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 w-[100px] h-[40px] text-white text-sm rounded-md"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto w-[60%] mt-24 mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => (
              <Todo
                key={item._id}
                id={index}
                title={item.title}
                description={item.description}
                complete={item.isCompleted}
                mongoId={item._id}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo} // Pass the function here
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}



// "use client"
// import Todo from "../components/Todo";
// import React, {useState,useEffect} from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";

  

// export default function Home() {
  
//   const [formData, setFormData]= useState({
//     title:"",
//     description:"",
//   });

//   const [todoData, setTodoData] = useState([]);

//   const fetchTodos = async () =>{
//     const response = await axios('/api');
//     setTodoData(response.data.todos)
//   }

//   const deleteTodo = async (id)=>{
//     const response = await axios.delete('/api', {
//       params:{
//         mongoId:id
//       }
//     })
//     toast.success(response.data.msg);
//     fetchTodos();
//   }

//   useEffect(()=>{
//     fetchTodos();
//   },[])

//   const onChangeHandler =(e)=>{
//     const name = e.target.name;
//     const value= e.target.value;
//     setFormData(form => ({...form, [name]:value}));
//     console.log(formData);
//   }

//   const onSubmitHandler= async(e)=>{
//     e.preventDefault();
//     try{

//      const response = await axios.post('/api', formData);
//      toast.success(response.data.msg);
//      setFormData({
//       title:"",
//       description:"",
//      });
//      await fetchTodos();

//     }
//     catch(error){
//      toast.error('Error');
//     }
//   }

//   return (
//     <>
//       <ToastContainer theme="dark"/>
//       <form  onSubmit={onSubmitHandler} className="flex item-start flex-col gap-2 w-[70%] max-w-[600px] mt-24 mx-auto">
//         <input value={formData.title} onChange={onChangeHandler}
//           type="text"
//           name="title"
//           placeholder="Enter Title"
//           className="px-3 py-2 border-2 w-full"
//         />
//         <textarea value={formData.description} onChange={onChangeHandler}
//           name="description"
//           placeholder="Enter Description"
//           className="px-3 py-2 border-2 w-full"
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-blue-600 w-[100px] h-[40px] text-white text-sm rounded-md"
//         >
//           Add Todo
//         </button>
//       </form>

//       <div className="relative overflow-x-auto w-[60%] mt-24 mx-auto">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 ID
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {todoData.map((item,index)=>{
//               return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo}/>
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

