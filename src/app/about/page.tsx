import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  return <div>User Id: {userId}</div>;
}
