import Card from "@/components/Card"

async function FetchUchihaClan(){
    const res = await fetch('https://narutodb.xyz/api/clan/search?name=Uchiha')
    const data = await res.json()
    return data.characters
}

async function UchihaPage() {
    const usersclan = await FetchUchihaClan()

  return (
    <div className="container">
      <Card usersclan={usersclan} />
    </div>
  )
}

export default UchihaPage
