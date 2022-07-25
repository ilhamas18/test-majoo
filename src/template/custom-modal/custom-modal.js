import Modal from 'react-modal'

const CustomModal = ({ onShow, setOnShow, children }) => {
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

  function afterOpenModal() {
  }

  return (
    <Modal
      isOpen={onShow}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => setOnShow(false)}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}

export default CustomModal