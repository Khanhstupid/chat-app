
import getUsers from "@/app/actions/getUsers";
import Sidebar from "@/app/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/app/actions/getConversations";

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode,
}) {
    
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList users={users}  initialItems={conversations}/>
                {children}
            </div>
        </Sidebar>
    );
}