import React from 'react'
import { ChatEngine } from 'react-chat-engine';


import ChatFeed from './components/ChatFeed';

export default function John() {
    return (
        <ChatEngine
            projectID='c6868c85-147a-468c-9b22-bfe21187626b'
            userName='JohnDoe'
            userSecret='P@ssw0rd'
            height = '100vh'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}
