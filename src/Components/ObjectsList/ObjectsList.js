import { useState, useEffect } from "react"
import ObjectItem from "../ObjectItem/ObjectItem"


const ObjectsList = (props) => {
    const [objects, setObjects] = useState([])
    const [error, setError ] = useState('')

    useEffect(() => {
        fetch(fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then((objects) => {
            setObjects(objects)
        }))
        .catch((error) => setError(error.message))
    }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }


    return (
        <div>
            {objects.map((object) => <ObjectItem key={object.id} {...object} />)}
        </div>
    )
}
       



export default ObjectsList