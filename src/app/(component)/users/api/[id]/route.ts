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

  return new Response(JSON.stringify({
    message: "User found successfully",
    success: true,
    data: user
  }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}