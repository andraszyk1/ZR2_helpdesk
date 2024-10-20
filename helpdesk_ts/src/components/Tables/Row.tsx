import { ReactNode } from "react"

interface props {
    item:ReactNode,
    highlight:boolean
}
function Row({item,highlight}:props) {
  const bg= highlight===true ? 'bg-red-200' : 'bg-slate-200'

  return (
    <div className={`border-r-5 border-solid border-spacing-2 w-96 rounded-xl ${bg} `}>
        {item}
        </div>
  )
}

export default Row