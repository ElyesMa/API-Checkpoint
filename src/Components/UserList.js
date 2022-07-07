import {useState , useEffect} from "react"
import axios from 'axios';

function UserList() {
    const [error, setError] = useState(null);
    const [listOfUSer , setlistOfUSer ] = useState([]);

    useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      console.log(response)
      setlistOfUSer(response.data);
    })
    .catch(function (error) {
      setError(error);
    })
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else {
      return (
        <ul>
          {listOfUSer.map(Users => (
            <li style={{fontSize:25 ,textAlign:"left"}} key={Users.name}>
            <span style={{color:"yellow"}}>Name : </span>{Users.name} <span style={{color:"yellow"}}> username : </span> {Users.username}<span style={{color:"yellow"}}> E-mail : </span>{Users.email}
             </li>
          ))}   
        </ul>
      );
    }
  }
  
  export default UserList