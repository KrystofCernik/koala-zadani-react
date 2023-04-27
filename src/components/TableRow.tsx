import { DeleteButton } from "./DeleteButton"
import { ExpandButton } from "./ExpandButton"
import { Table } from './Table'
import { useToggle } from '../hooks/useToggle'
import type Person from "../types/Person"
import { useDispatch } from "react-redux"
import { deletePerson } from "../stores/peopleReducer"

export const TableRow = ({person, className, isTopLevel}: {person: Person, className: string, isTopLevel: boolean}) => {

  const { isExpanded, toggleExpand } = useToggle(false)

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePerson(person.data.ID))
  }

  return (
    <tbody className={isTopLevel ? className : ''}>
      <tr className='w-full'>
        <td className="text-center w-[100px] h-[75px]">
          {(person.children.has_nemesis?.records.length || person.children.has_secrete?.records.length) ? (
            <ExpandButton isExpanded={isExpanded} toggleExpand={toggleExpand} />
          ) : null}
        </td>
        {Object.entries(person.data).map(([key, value]) => (
          <td
            key={key + value}
            className="text-white text-center h-[75px] leading-5"
          >
            {value}
          </td>
        ))}
        <td className="text-center h-[75px]">
          <DeleteButton handleDelete={handleDelete} />
        </td>
      </tr>
      {isExpanded && (
        <tr>
          <td
            colSpan={12}
            className="pl-8"
          >
            {(person.children.has_nemesis?.records.length || person.children.has_secrete?.records.length) ? (
              <Table
                people={person.children.has_nemesis?.records || person.children.has_secrete?.records}
                isTopLevel={false}
              />
            ) : null}
          </td>
        </tr>
      )}
    </tbody>
  )
}

