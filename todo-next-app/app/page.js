"use client"
import Todo from "../components/Todo";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
  

export default function Home() {
  
  const [formData, setFormData]= useState({
    title:"",
    description:"",
  });

  const onChangeHandler =(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    setFormData(form => ({...form, [name]:value}));
    console.log(formData);
  }

  const onSubmitHandler= async(e)=>{
    e.preventDefault();
    try{

     const response = await axios.post('/api', formData);
     toast.success(response.data.msg);

    }
    catch(error){
     toast.error('Error');
    }
  }

  return (
    <>
      <ToastContainer theme="dark"/>
      <form  onSubmit={onSubmitHandler} className="flex item-start flex-col gap-2 w-[70%] max-w-[600px] mt-24 mx-auto">
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
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
