import { useContext } from "react";
import { dataContext } from "./test";






export function Second() {
    const second = useContext(dataContext)

  return (
    <>
        {
            second.map((items)=>(
                <h1>{items.category}</h1>
            ))
        }
    </>
  )
}
export default Second
