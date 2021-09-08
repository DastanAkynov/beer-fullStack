import { useState } from "react"
import GetReviews from "../components/GetReviews"
import SaveReview from "../components/SaveReview"
import Backdrop from "../components/UI/Backdrop/Backdrop"
import Modal from "../components/UI/Modal/Modal"

export const useModal = () => {
  const [modal, setModal] = useState(null)
  const [backdrop, setBackdrop] = useState(null)

  const showModal = (locationId) => {
    const info = (
      <Modal>
        <GetReviews locationId={locationId} />
      </Modal>
    )
    setModal(info)
    setBackdrop(<Backdrop />)
  }

  const closeModal = () => {
    setModal(null)
    setBackdrop(null)
  }

  const showCreateReview = (locationId, userId) => {
    setModal(<Modal><SaveReview locationId={locationId} userId={userId}/></Modal>)
    setBackdrop(<Backdrop />)
  }


  return { modal, backdrop, showModal, closeModal, showCreateReview }
}