import { useState, useEffect } from "react"
import ObjectItem from "../ObjectItem/ObjectItem"
import styles from './ObjectsList.module.css'


console.log(styles)

const API_URL = 'https://jsonplaceholder.typicode.com/todos/'

const ObjectsList = () => {
    const [objects, setObjects] = useState([])
    const [error, setError ] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
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

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
        <h1>Демонтажи</h1>
        <div className={styles}>
        <hr />
            {isLoading ? <h1>Loading...</h1> : objects.map((object) => <ObjectItem key={object.id} {...object} />)}
        </div>
        </>
    )
}


export default ObjectsList