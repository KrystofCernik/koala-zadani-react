import chevron from '../assets/icons/chevron.svg'

export const ExpandButton = ({ isExpanded, toggleExpand }: {isExpanded: boolean, toggleExpand: () => void}) => {

  const handleClick = () => {
    toggleExpand()
  }

  return (
    <button
      className="w-[16px] hover:opacity-80"
      onClick={handleClick}
    >
      <img
        className={isExpanded ? 'rotate-90 w-full' : 'w-full'}
        src={chevron}
        alt="expand"
      />
    </button>
  )
}

