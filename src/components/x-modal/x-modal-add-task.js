import React, { useState } from 'react'
import CustomModal from 'src/template/custom-modal/custom-modal';
import { useDispatch } from "react-redux"
import { addTask } from "../../../store/action/homeAction"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px'
  },
};

export default function ModalUpdate({ addTaskModal, setAddTaskModal, datas }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const dispatch = useDispatch();

  const onSubmit = () => {
    function formatDate(date) {
      var d = date,
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    }

    const lastId = datas[datas.length - 1].id
    const payload = {
      id: lastId += 1,
      title: title,
      description: description,
      status: 0,
      createdAt: formatDate(new Date())
    }
    dispatch(addTask(payload));
    setAddTaskModal(false)
  }

  const afterOpenModal = () => {

  }

  return (
    <div>
       <CustomModal
        onShow={addTaskModal}
        setOnShow={() => setAddTaskModal(false)}
      >
        <h3 className="text-xl font-Museo-Bold font-bold text-center text-gray-900 dark:text-white">
          Add Task
        </h3>
        <button onClick={() => setAddTaskModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" dataModalToggle="popup-modal">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Title
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2" for="username">
              Description
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="button" onClick={onSubmit} className="bg-sky-500 p-2 w-[60px] mr-3 text-bold text-white font-Museo rounded-lg">
            Add
          </button>
        </div>
      </CustomModal>
    </div>
  );
}