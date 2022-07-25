import React, { useState } from "react"
import { Card } from "src/template/card/card"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import ModalUpdate from "@components/x-modal/x-modal-update"

const HomeCard = ({ datas }) => {
  const [onShow, setOnShow] = useState(false);
  const [detail, setDetail] = useState(null);
  const [canDelete, setCanDelete] = useState(false);
  const [key, setKey] = useState(null);
  
  const onDetail = (e, del) => {
    const findIndex = datas.findIndex(el => +el.id == e)
    setDetail(datas[findIndex]);
    setKey(e);
    setOnShow(true);
  };

  const filteredUnFinished = datas.filter(el => el.status == 0).sort((a, b) => a.createdAt - b.createdAt);
  const filteredFinished = datas.filter(el => el.status == 1).sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
      <div className="flex flex-col space-y-4">
        <h3 className="font-Museo-Bold font-bold bg-green-600 text-center rounded-lg p-2 text-white mb-3">To Do</h3>
        {filteredUnFinished.map((data, i) => (
          <Card width={327} height={129} rounded={36} key={i}>
            <div className="title w-full bg-ocean-blue rounded-t-lg py-2">
              <h3 className="font-Museo-Bold font-bold text-white tracking-wider text-center px-1">{data?.id}. {data?.title}</h3>
            </div>
            <div className="px-2 pb-4 relative">
              <p className="font-Museo font-bold">Description: <span className="font-Museo font-normal">{data?.description}</span></p>
              <p className="font-Museo font-bold">Status: <span className="font-Museo font-normal">{data?.status}</span></p>
              <p className="font-Museo font-bold mb-5">Created Date: <span className="font-Museo font-normal">{data?.createdAt}</span></p>
              <button className="absolute bottom-0 right-0 mb-3 mr-3" onClick={() => onDetail(data?.id, setCanDelete(true))}>
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col space-y-4">
        <h3 className="font-Museo-Bold font-bold bg-rose-600 text-center rounded-lg p-2 text-white mb-3">Finished</h3>
        {filteredFinished.map((data, i) => (
          <Card width={327} height={129} rounded={36} key={i}>
            <div className="title w-full bg-pink rounded-t-lg py-2">
              <h3 className="font-Museo-Bold font-bold text-white tracking-wider text-center px-1">{data?.id}. {data?.title}</h3>
            </div>
            <div className="px-2 pb-4 relative">
              <p className="font-Museo font-bold">Description: <span className="font-Museo font-normal">{data?.description}</span></p>
              <p className="font-Museo font-bold">Status: <span className="font-Museo font-normal">{data?.status}</span></p>
              <p className="font-Museo font-bold mb-5">Created Date: <span className="font-Museo font-normal">{data?.createdAt}</span></p>
              <button className="absolute bottom-0 right-0 mb-3 mr-3" onClick={() => onDetail(data?.id, setCanDelete(false))}>
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {onShow && <ModalUpdate onShow={onShow} setOnShow={setOnShow} props={detail} key={key} canDelete={canDelete} />}
    </>
  )
}

export default HomeCard