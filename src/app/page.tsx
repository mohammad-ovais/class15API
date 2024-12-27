import Link from "next/link";

export default async function Home() {
  const url= await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await url.json()
  console.log(response)

 return (
  <main>
    <h1 className="text-center font-medium text-4xl"> API Data & Dynamic Routing </h1>
   {response.map((todos:any)=>(
    <div>
      <Link href={`${todos.id}`}>
      <h2 className="pl-4">
        {todos.id} &nbsp; &nbsp; {todos.title}
      </h2>
      </Link>
    </div>
   )
   )

   } 

  </main>

  );
}

