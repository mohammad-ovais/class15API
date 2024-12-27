const DynamicId = async (props:any) => {
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const response = await url.json()
    console.log("single-todos",response)

   return(
        <div className="text-center font-semibold text-xl">
            <h1 className="text-3xl"> Single Data </h1>
            <br/>
             {props.params.id} &nbsp;  {response.title}
        </div>

    )
}
export default DynamicId