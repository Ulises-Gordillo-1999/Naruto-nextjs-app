import Image from "next/image"


async function getUseriD(id){
  const res = await fetch(`https://narutodb.xyz/api/character/${id}`)
  const data = await res.json()
  console.log(data)
  return data

}


async function UserDetails({ params }) {

  console.log(params.id)
  const data = await getUseriD(params.id)

  return (
    <div key={data.id}>
      <h1>
        Hola yo soy {data.name}
      </h1>
      <Image src={data['images'][0]} width={700} height={200} alt={data.name} className="img-fluid"/>
    </div>
  )
}

export default UserDetails
