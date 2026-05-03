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

"use client";
import { UpdateUserInfo } from "@/components/UpdateUserInfo";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();

  useEffect(() => {
    if (userData.isPending) return;
    if (!user) {
      router.replace("/sign-in");
    }
  }, [user, userData.isPending, router]);

  if (userData.isPending) {
    return (
      <div className="flex items-center justify-center py-20 bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex items-center justify-center py-20 bg-gray-50 animate__slow animate__animated animate__fadeIn">
      <Card className="w-11/12 md:w-6/12 space-y-3 mx-auto flex flex-col items-center shadow-xl gap-3 p-8">
        <Avatar className="h-30 w-30">
          <Avatar.Image
            alt={user?.name}
            src={user?.image || undefined}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <div className="text-center space-y-2">
          <p className="text-2xl font-medium">{user?.name}</p>
          <p className="text-lg">{user?.email}</p>
        </div>
        <UpdateUserInfo />
      </Card>
    </div>
  );
}