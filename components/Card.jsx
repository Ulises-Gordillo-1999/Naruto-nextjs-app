import Image from "next/image"
import Link from "next/link"


function Card({ usersclan }) {
    console.log(usersclan)

    return (
        <div className="row row-cols-3 g-4" >
            {
                usersclan.map((user) => (
                    <div class="col">
                        <div class="card" style={{width: '18rem'}} >
                            <Image src={user['images'][0]} width={250} height={200} alt={user.name} className="mx-auto d-block"  />
                            <div class="card-body text-center" key={user.id}>
                                <h5 class="card-title">{user.name} </h5>
                                <p class="card-text">The character had his debut in the manga {user.debut?.manga}.
                                The character had his anime debut {user.debut?.anime} .
                                
                                </p>
                                <Link href={`/userdetails/${user.id}`} class="btn btn-primary">see character detail</Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Card
