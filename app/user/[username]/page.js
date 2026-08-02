export default  async function User({params}){
    const {username} = await params;
    return(
         <div>
            <h1>User Page</h1>
             <h2>Welcome  {username}</h2>
         </div>
    );
}