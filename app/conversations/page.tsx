"use client";

import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import { signOut } from "next-auth/react";

type Props = {};

const Conversations = (props: Props) => {
  return (
    <div>
      <EmptyState />
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default Conversations;
