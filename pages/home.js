import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Layout } from "@components/global/layout/layout"
import { fetchData } from "../store/action/homeAction"
import HomeCard from "@components/home/home-card"
import { AiFillPlusCircle } from "react-icons/ai"
import ModalAddTask from "@components/x-modal/x-modal-add-task"
import { Loading } from "@components/global/loading"

const Dashboard = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);

  const { datas, loading, error } = useSelector(state => state.HomeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div className={`home ${addTaskModal ? 'active' : ''} relative mt-6 mb-6 w-full`}>
          <div className="h-32 w-32 ...">
            <div className="absolute top-0 right-0 h-16 w-16 ...">
              <button onClick={() => setAddTaskModal(true)} className="bg-blue-600 p-2 w-[6em] text-white rounded-md">
                <p>Add Task</p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[20em] -mt-8">
            <HomeCard datas={datas} />
          </div>
        </div>
      )}

      {addTaskModal && <ModalAddTask addTaskModal={addTaskModal} setAddTaskModal={setAddTaskModal} datas={datas} />}
    </Layout>
  )
}

export default Dashboard