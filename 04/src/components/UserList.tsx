import { deleteUser, fetchUsers } from "@/lib/action";

type TUser = {
  _id: string;
  name: string;
  email: string;
};

// https://deploy.vercel.com
export default async function UserList() {
  const users: TUser[] = await (
    await fetch(`${process.env.LOCAL_URL}/api/users`)
  ).json();

  return (
    <ul className="flex flex-col gap-4">
      {users &&
        users.map((user) => (
          <li key={user._id} className="bg-white w-[300px] p-3 rounded-lg">
            <div>
              <h1 className="text-xl font-semibold">{user.name}</h1>
              <p>{user.email}</p>
              <div className="flex gap-4 justify-end">
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user._id} />
                  <button className="underline text-rose-500">삭제</button>
                </form>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
