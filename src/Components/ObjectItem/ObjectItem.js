import './ObjectItem.css'

const ObjectItem = (props) => {
    const {id, userId, title, completed} = props

    return <div className='object'>
        <h1>{id}</h1>
        <h2>{completed}</h2>
        <p>{title}</p>
        <h3>User ID: {userId}</h3>
    </div>
}

export default ObjectItem