import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";

import Header from "@/components/conversations/Header";
import Body from "@/components/conversations/Body";
import Form from "@/components/conversations/Form";
import EmptyState from "@/components/EmptyState";

interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="h-full lg:pl-80">
        <div className="flex flex-col h-full">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full lg:pl-80">
      <div className="flex flex-col h-full">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ChatId;
