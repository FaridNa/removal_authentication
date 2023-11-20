import { useEffect, useState } from "react"
import ObjectsList from "../ObjectsList/ObjectsList"

const MainBlock = () => {
  const [objects, setObjects] = useState(null)
  console.log('app rendered')
  
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => setObjects(json))
    },
    [],
  );

    
    return <div className="">
      <p>Демонтажи</p>
      {objects && <ObjectsList props={objects} />}
    </div>
}

export default MainBlock