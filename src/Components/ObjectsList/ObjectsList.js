import { useState, useEffect } from "react"
import ObjectItem from "../ObjectItem/ObjectItem"

const API_URL = 'https://jsonplaceholder.typicode.com/todos/'

const ObjectsList = () => {
    const [objects, setObjects] = useState([])
    const [error, setError ] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(API_URL)
                const objects = await res.json()
                setObjects(objects)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])


    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(response => response.json())
    //         .then((objects) => setObjects(objects))
    //         .catch((error) => )
    //         .finally(() => setIsLoading(false))
    // }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
        <h1>Демонтажи</h1>
        <hr />
            {isLoading ? <h1>Loading...</h1> : objects.map((object) => <ObjectItem key={object.id} {...object} />)}
        </>
    )
}


export default ObjectsList