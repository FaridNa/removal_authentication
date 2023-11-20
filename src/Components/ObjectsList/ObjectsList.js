


const ObjectsList = (props) => {
    const objectItems = props.map((object) => 
        <li key={object.userId.toString()}>{object}</li>
    ) 
    return <ul>{objectItems}</ul>
}

export default ObjectsList