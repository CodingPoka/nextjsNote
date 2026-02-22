import { users } from "@/data/users"



export async function GET(){
    return Response.json(users);
}

export async function POST(request:Request){
    const user = await request.json();

    const newUser ={
        id: users.length + 1,
        name: user.name,
        username : user.username,
        email: user.email
    }

    users.push(newUser);

    //send json.stringify response because we are sending an object and we need to convert it to string before sending it to the client
    return new Response(JSON.stringify(
        {
            message:"User created successfully",
            user: newUser,
            success:true
        }
    ), {
        headers: {
            "Content-Type":"application/json"
        },
        status:201
        
    });

}