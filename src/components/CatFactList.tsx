import CatFact, {ICatFact} from "./CatFact";
import {useEffect, useState} from "react";

interface IMeowFactResponse {
  data: string[]
}

export default function CatFactList() {
  const [catFacts, setCatFacts] = useState<ICatFact []>([])

  useEffect(() => {
    getCatFacts()
  }, [])

  async function getCatFacts() {
    fetch("https://meowfacts.herokuapp.com?count=5")
    .then(response => response.json() as Promise<IMeowFactResponse>)
    .then(json => json.data)
    .then(entries => entries.map(entry => {
      return {fact: entry}
    }))
    .then(setCatFacts)

  }

  return (
      <div className="CatFactList">
        <p/>
        <img src='https://cataas.com/cat?height=250' alt="icons"/>
        <div className="CatFactList-list">
          <ul>
            {catFacts.map(CatFact)}
          </ul>
        </div>

      </div>
  )
}