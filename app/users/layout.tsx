import getUsers from "@/actions/getUsers";
import UserList from "@/components/UserList";
import Sidebar from "@/components/sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const UserLayout = async ({ children }: Props) => {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UserLayout;
