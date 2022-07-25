import React, { useState } from 'react'
import CustomModal from 'src/template/custom-modal/custom-modal';
import { useDispatch } from "react-redux"
import { updateTask, endDataHandler, deleteTask } from "../../../store/action/homeAction"

export default function ModalUpdate({ onShow, setOnShow, props, key, canDelete }) {
  const [title, setTitle] = useState(props?.title);
  const [description, setDescription] = useState(props?.description);
  
  const dispatch = useDispatch();

  const onSubmit = () => {
    const payload = {
      id: props?.id,
      title: title,
      description: description,
      status: props?.status,
      createdAt: props?.createdAt
    }
    dispatch(updateTask(payload));
    setOnShow(false);
  }

  const onFinish = () => {
    const payload = {
      id: props?.id,
      title: props?.title,
      description: props?.description,
      status: 1,
      createdAt: props?.createdAt
    }
    dispatch(endDataHandler(payload));
    setOnShow(false);
  }

  const onDelete = () => {
    dispatch(deleteTask(props?.id));
    setOnShow(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <CustomModal 
        onShow={onShow}
        setOnShow={setOnShow}
      >
        <h3 className="text-xl font-Museo-Bold font-bold text-center text-gray-900 dark:text-white">
          Update Task
        </h3>
        <button onClick={() => setOnShow(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" dataModalToggle="popup-modal">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Title
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={title} id="title" type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2" for="username">
              Description
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={description} id="description" type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="button" onClick={onSubmit} className="bg-sky-500 p-2 w-[60px] mr-3 text-bold text-white font-Museo rounded-lg">
            Edit
          </button>
          {canDelete && (
            <>
              <button type="button" onClick={onFinish} className="bg-green-500 p-2 w-[60px] mr-3 text-bold text-white font-Museo rounded-lg">
                Finish
              </button>
              <button type="button" onClick={onDelete} className="bg-pink p-2 w-[60px] text-bold text-white font-Museo rounded-lg">
                Delete
              </button>
            </>
          )}
        </div>
      </CustomModal>
    </div>
  );
}