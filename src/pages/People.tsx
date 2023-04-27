import { useEffect } from 'react'
import { Table } from '../components/Table'
import { useDispatch, useSelector } from "react-redux"
import { getPeople } from '../stores/peopleReducer'
import { RootState } from '../stores/DataStore'

export default function People() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('../../data/example-data.json')
      const data = await response.json()
  
      dispatch(getPeople(data))
    }

    getData()
  }, [dispatch])

  const store = useSelector((state: RootState) => state.people)

  return (
    <>
      {store.people.length && 
        <Table
          people={store.people}
          isTopLevel={true}
        />
      }
    </>
  )
}