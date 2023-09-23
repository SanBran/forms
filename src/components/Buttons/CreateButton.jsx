import { Link } from "react-router-dom"

function CreateButton() {
  return (
    <Link to="/create" className='py-2 px-5 bg-slate-700 text-cyan-50 rounded-md font-semibold'>Create Form</Link>
  )
}

export default CreateButton