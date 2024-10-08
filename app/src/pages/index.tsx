import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main>
      <div>{status}</div>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
      <div>{session?.user?.role}</div>
      <div>{session?.user?.backendToken}</div>
      <button onClick={() => signOut()}>サインアウト</button>
    </main>
  );
}
