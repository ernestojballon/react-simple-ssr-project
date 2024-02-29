import {FC} from 'react';

type Gist = {
  id:string;
  description:string;
}
type Props = {
  gists:Gist[];
}

const App:FC<Props> = ({gists})=> {
  console.log("reRender")
  return (
    <ul>
      {
        gists.map((gist)=>{
          return (
            <li key={gist.id}>
              <a href={`https://gist.github.com/${gist.id}`}>{gist.description || "No description available"}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default App;
