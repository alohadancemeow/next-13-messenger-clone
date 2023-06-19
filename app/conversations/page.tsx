"use client";

import EmptyState from "@/components/EmptyState";
import useConversation from "@/hooks/useConversation";

import clsx from "clsx";

type Props = {};

const Conversations = (props: Props) => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
