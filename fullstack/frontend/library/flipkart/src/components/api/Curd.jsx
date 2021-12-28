import React, { useState ,useEffect} from 'react'

function Curd() {
var [data,setData]=useState([])
var [id,setId]=useState(0)
var [name,setName]=useState("")
var [chocalte,setChocalate]=useState("")


useEffect(()=>{
    fetch('http://localhost:3004/students').then((res)=>{
        res.json().then((result)=>{
            console.log(result)
            setData(result)
        })
    })
},[])

function insertdata(){
let items={id,name,chocalte}
fetch(`http://localhost:3004/students`,{
    method:'post',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
    },
    body:JSON.stringify(items)
}).then((rs)=>{
    rs.json().then((res2)=>{
console.log(res2)
    })
})



}
function updatedata(){
    alert(id,name,chocalte)
    let items={id,name,chocalte}
    fetch(`http://localhost:3004/students/${id}`,
   {
       method:'PUT',
       headers:{
           'Accept':'application/json',
           'Content-type':'application/json'
       },
       body:JSON.stringify(items)
   }
   
    )
}
function selectuser(userid){
   
  setId(data[userid-1].id)
 
  setName(data[userid-1].name)
  setChocalate(data[userid-1].chocalte)
  
}
function deleteuser(id){
    alert(id)
fetch(`http://localhost:3004/students/${id}`,{
    method:'delete'
}).catch((al)=>{
    alert(al)
    console.log(al)
}).then((da)=>{
    da.json().then((val)=>{
console.log(val)
    })
})
alert("im working")
}
    return (
        <>
            <h1>displaying all data from api</h1>
            <table border="1">
<tr>
    <th>ID</th>
    <th>NAME</th>
  
    <th>CHOCALAE</th>
    <th>EDIT</th>
    <th>DELTE</th>
</tr>

{
    data.map((students)=><tr>
        <td>{students.id}</td>
        <td>{students.name}</td>
        <td>{students.chocalte}</td>
        <td> <button onClick={()=>{selectuser(students.id)}}>edit</button> </td>
        <td><button onClick={()=>{deleteuser(students.id)}}>delete</button> </td>
    </tr>)
}


            </table>

<br />
<h1>update  the values</h1>
<label >id</label>
<input type="number" value={id}  onChange={(e)=>{ setId(e.target.value) }}/>
<label htmlFor="">name</label>
<input type="text" value={name} onChange={(e)=>{ setName(e.target.value) }}/>
<label htmlFor="">chocalate</label>
<input type="text" value={chocalte} onChange={(e)=>{ setChocalate(e.target.value) }}/>
<button onClick={()=>{updatedata()}}>submit</button>


<br/>
<br/>
<h1>insrt the values</h1>
<label htmlFor="">id</label>
<input type="number" value={id}  onChange={(e)=>{ setId(e.target.value) }}/>
<label htmlFor="">name</label>
<input type="text" value={name} onChange={(e)=>{ setName(e.target.value) }}/>
<label htmlFor="">chocalate</label>
<input type="text" value={chocalte} onChange={(e)=>{ setChocalate(e.target.value) }}/>
<button onClick={()=>{insertdata()}}>submit</button>

        </>
    )
}

export default Curd
