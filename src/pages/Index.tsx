import { Button } from "../components/Button"

export default function Index() {
  return (
    <div className="h-screen w-full">
      <div className="h-full flex flex-col justify-center items-start p-8">
        <h1 className="text-white">Kryštof Černík - React</h1>
        <Button to={'/people'} />
    </div>
    </div>
  )
}