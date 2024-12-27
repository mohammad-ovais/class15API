import Link from "next/link";

export default async function Home() {
  const url= await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await url.json()
  console.log(response)

 return (
  <main>
    <h1 className="text-center font-medium text-4xl"> API Data & Dynamic Routing </h1>
   {response.map((list:any)=>(
    <div key={list.id}>
      <Link href={`${list.id}`}>
      <h2 className="pl-4">
        {list.id} &nbsp; &nbsp; {list.title}
      </h2>
      </Link>
    </div>
   )
   )

   } 

  </main>

  );
}

