// import React from 'react';

// const Todo = ({id,title,description,mongoId,complete}) => {
//   return (
//     <tr className="bg-white border-b">
//       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//         {id+1}
//       </th>
//       <td className="px-6 py-4">
//         {title}
//       </td>
//       <td className="px-6 py-4">
//         {description} 
//       </td>
//       <td className="px-6 py-4">
//         {complete?"Completed":"Pending"}
//       </td>
//       <td className="px-6 py-4 flex gap-1">
//         <button  onClick ={()=> deleteTodo(mongoId)} className="py-2 px-4 bg-red-500 text-white rounded-md">Delete</button>

//         <button className="py-2 px-4 bg-green-500 text-white rounded-md">Done</button>
//       </td>
//     </tr>
//   );
// };

// export default Todo;

import React from 'react';

const Todo = ({ id, title, description, mongoId, complete, deleteTodo,completeTodo }) => { // Ensure deleteTodo is destructured here
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">
        {complete ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4 flex gap-1">
        <button onClick={() => deleteTodo(mongoId)} className="py-2 px-4 bg-red-500 text-white rounded-md">Delete</button>

        {complete? "" : <button onClick={() => completeTodo(mongoId)} className="py-2 px-4 bg-green-500 text-white rounded-md">Done</button>}
      </td>
    </tr>
  );
};

export default Todo;
