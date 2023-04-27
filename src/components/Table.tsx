import { TableHead } from './TableHead'
import { TableRow } from './TableRow'

import type Person from '../types/Person'

export const Table = ({ people, isTopLevel }: { people: Person[], isTopLevel: boolean }) => {

  const keys: Array<string> = Object.keys(people[0].data)
  keys.push('Delete')
  keys.unshift('')

  return (
    <table className={isTopLevel ? 'w-full' : ''}>
      <TableHead keys={keys} isTopLevel={isTopLevel} />
      {people.map((person, index) => (
        <TableRow
          key={person.data['ID'] + '-' + index}
          person={person}
          className="odd:bg-black-80 even:bg-black-40"
          isTopLevel={isTopLevel}
        />
      ))}
    </table>
  )
}
