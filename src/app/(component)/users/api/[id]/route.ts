import { users } from "@/data/users";



// dynamic route to get user by id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ must await

  const user = users.find(
    (item) => item.id === Number(id)
  );

  if (!user) {
    return new Response("User Not Found", { status: 404 });
  }


  return Response.json({
    message: "User found successfully",
    success: true,
    data: user
  },{
    status:200
  })
}



// dynamic route to update user by id

export async function PUT(request: Request, {params}:{params : Promise<{id: string}>}){
    const {id} = await params;

    //finding the usser by user id
    const user= users.find((item)=> item.id === Number(id));

    //getting the json data from the request body
    
    const userRequest = await request.json();


    if(!user){
        return Response.json({
            message:"User Not Found",
            success:false
        }, {
            status:404
        })
    }
    
    //directly updating the user object because we are using in-memory data and we don't have a database to update the user
    user.name = userRequest.name || user.name;

    return Response.json({
    message: "User updated successfully",
    success: true,
    data: user,
  }, {
    status: 200,
  });
      
}


// dynamic route to delete user by id

export async function DELETE(request : Request, {params}:{
  params : Promise<{id:string}>
}){
  const {id} = await params;


  //using findIndex to get the index of the user in the array and then using splice to remove the user from the array

  const userIndex = users.findIndex((item)=> item.id===Number(id));

  if(userIndex ===-1){
    return Response.json({
      message: "User Not Found",
      success: false
    }, {
      status: 404
    })
  }
  
  //delte the user successfully
  users.splice(userIndex,1);

  return Response.json({
    message: "User deleted successfully",
    success: true
  }, {
    status: 200
  })
}