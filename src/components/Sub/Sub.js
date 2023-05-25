export const Sub =(props) =>{
    return(

        <div>
            <h1>Sub component</h1>
            <p>Sub = {parseInt(props.m) - parseInt(props.n)}</p>

        </div>
        
    )
}

export const Multi =(props) =>{

    return(

        

        <div>
            <h1>Multi component</h1>

            <p>Multi = {parseInt(props.o) * parseInt(props.k)}</p>
        </div>
    )
}