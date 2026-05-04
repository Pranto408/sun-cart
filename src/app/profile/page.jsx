// "use client";
// import { UpdateUserInfo } from "@/components/UpdateUserInfo";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Card } from "@heroui/react";

// export default function Profile() {
//   const userData = authClient.useSession();
//   const user = userData.data?.user;

//   return (
//     <div className="flex items-center justify-center py-20 bg-gray-50 animate__slow animate__animated animate__fadeIn">
//       <Card className="w-11/12 md:w-6/12 space-y-3 mx-auto flex flex-col items-center shadow-xl gap-3 p-8 ">
//         <Avatar className="h-30 w-30">
//           <Avatar.Image
//             alt={user?.name}
//             src={user?.image || undefined}
//             referrerPolicy="no-referrer"
//           />
//           <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//         </Avatar>
//         <div className="text-center space-y-2">
//           <p className="text-2xl font-medium">{user?.name}</p>
//           <p className="text-lg">{user?.email}</p>
//         </div>
//         <UpdateUserInfo />
//       </Card>
//     </div>
//   );
// }

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Profile from "@/components/Profile";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <Profile />;
}