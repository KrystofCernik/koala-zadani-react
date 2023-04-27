import { Link } from "react-router-dom"

export const Button = ({ to }: { to: string }) => {
  return (
    <Link to={to}>
      <button
        className="px-6 py-3 bg-green border-none rounded-full font-medium"
      >
        Assignment
      </button>
    </Link>
  )
}
