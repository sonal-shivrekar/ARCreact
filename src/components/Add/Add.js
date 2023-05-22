const Add = (props) => {
    return(
        <div>
        <h1>Add component</h1>

        <p>Addition =  {parseInt(props.a) + parseInt(props.b)}</p>

        </div>

    )
}

export default Add;