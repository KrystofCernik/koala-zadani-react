import { useCallback, useState } from "react"  

export const useToggle = (initalState: boolean) => {
  const [isExpanded, setIsExpanded] = useState(initalState)

  const toggleExpand = useCallback(() => {
    setIsExpanded(state => !state)
  }, [setIsExpanded])

  return {
    isExpanded,
    toggleExpand
  }
}