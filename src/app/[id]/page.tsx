const DynamicId = async (props:any) => {
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const response = await url.json()
    console.log("single-todos",response)

   return(
        <h1 className="text-center font-semibold text-xl">
            <h2 className="text-3xl"> Single Data </h2>
            <br/>
         {response.title}
        </h1>

    )
}
export default DynamicId