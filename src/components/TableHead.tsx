
export const TableHead = ({ keys, isTopLevel }: { keys: Array<string>, isTopLevel: boolean }) => {
  return (
    <thead className={isTopLevel ? 'bg-green h-[75px]' : 'bg-green h-[50px]'}>
      <tr>
        {keys.map((key, index) => (
          <th
            key={key + '-' + index}
            className="py-2 px-4 text-center leading-5"
          >
            {key}
          </th>
        ))}
      </tr>
    </thead>
  )
}
