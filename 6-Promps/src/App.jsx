import Users from "./Users"
function App (){

  const users = [
    {id : 1 , name : "KHUSHII" , age : 20 , course : ["HTML","CSS"]},
    {id : 2 , name : "JANAVII" , age : 21 , course : ["HTML","CSS"]},
    {id : 3 , name : "KUNJAL" , age : 22 , course : ["HTML","CSS"]},
    {id : 4 , name : "BANSII" , age : 19 , course : ["HTML","CSS"]},
    {id : 5 , name : "HETVII" , age : 23 , course : ["HTML","CSS"]},
    {id : 6 , name : "DHRUVII" , age : 24 , course : ["HTML","CSS"]},
    {id : 7 , name : "BRIJAL" , age : 19 , course : ["HTML","CSS"]},
    {id : 8 , name : "BHUMIKA" , age : 18 , course : ["HTML","CSS"]},
    {id : 9 , name : "SHRUTII" , age : 17 , course : ["HTML","CSS"]},
    {id : 10 , name : "KRISHAA" , age : 19 , course : ["HTML","CSS"]}
  ] 

    const color = [
      {black,yellow,pink,orange}
    ]


  return(
    <Users
      neha ={users}
      chauhan = {color}
      />
  )
}
export default App