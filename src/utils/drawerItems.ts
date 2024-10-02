import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

// icons
import {
  User,
  Key,
  LayoutDashboard,
  Users,
  MessageCircleCode,
  BadgeCent,
} from "lucide-react";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: User,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: Key,
    },
  ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: LayoutDashboard,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: Users,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: LayoutDashboard,
        },
        {
          title: "Customers",
          path: `${role}/customers`,
          icon: Users,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: MessageCircleCode,
        }
      );
      break;

    case USER_ROLE.CUSTOMER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: LayoutDashboard,
        },
        {
          title: "payment",
          path: `${role}/payment`,
          icon: BadgeCent,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
