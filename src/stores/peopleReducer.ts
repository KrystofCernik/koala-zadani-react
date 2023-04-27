import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type Person from "../types/Person"

const initialState = {
  people: [] as Person[],
}

export const peopleSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    getPeople: (state, action: PayloadAction<Person[]>) => {
      state.people = action.payload
    },
    deletePerson: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.people.map((person: Person) => {
          if (person.data['ID'] === id) {
              state.people = state.people.filter(person => person.data['ID'] !== id)
          } else {
              if (person.children.has_nemesis) {
                  person.children.has_nemesis.records.map((child: Person) => {
                      if (child.data['ID'] === id) {
                          person.children.has_nemesis.records = person.children.has_nemesis.records.filter(child => child.data['ID'] !== id)
                      } else {
                          if (child.children.has_secrete) {
                              child.children.has_secrete.records.map((grandChild: Person) => {
                                  if (grandChild.data['ID'] === id) {
                                      child.children.has_secrete.records = child.children.has_secrete.records.filter(grandChild => grandChild.data['ID'] !== id)
                                  }
                              })
                          }
                      }
                  })
              }
          }
      })
    }
  }
})

export default peopleSlice.reducer
export const { deletePerson, getPeople } = peopleSlice.actions