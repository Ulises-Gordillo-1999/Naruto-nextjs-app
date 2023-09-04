import Card from "@/components/Card"

async function FetchUzumakiClan(){
    const res = await fetch('https://narutodb.xyz/api/clan/search?name=Uzumaki')
    const data = await res.json()
    return data.characters
}


async function UzumakiPage() {
    const usersclan = await FetchUzumakiClan()
    return (
        <div className='container'>
            <Card usersclan={usersclan} />
        </div>
    )
}

export default UzumakiPage
