import remove from '../assets/icons/delete.svg'

export const DeleteButton = ({ handleDelete }: { handleDelete: () => void}) => {

  const handleClick = () => {
    handleDelete()
  }

  return (
    <button
      className="w-[16px] hover:opacity-80"
      onClick={handleClick}
    >
      <img
        className="w-full"
        src={remove}
        alt="delete"
      ></img>
    </button>
  )
}

