import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { messages } from '../../assets/messages';

const findMentionByName = (message: any, name: string) => {
    return (
        <>
            {message.split(name).reduce((prev: any[], current: any, i: any) => {
                if (!i) {
                    return [current];
                }
                return prev.concat(<Mention>{`${name}`}</Mention>, current);
            }, [])}
        </>
    );
};

interface messageItem {
    author: string;
    date: string;
    content: string;
    hasMention: boolean;
    isBot: boolean;
}

const renderMessages = (messages: any, messagesRef: any) => {
    return (
        <Messages ref={messagesRef}>
            {messages.map((item: messageItem) => {
                return (
                    <ChannelMessage
                        key={item.author}
                        author={item.author}
                        date={item.date}
                        content={findMentionByName(
                            item.content,
                            '@Victor Almeida'
                        )}
                        isBot={item.isBot}
                        hasMention={item.hasMention}
                    />
                );
            })}
        </Messages>
    );
};

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    return (
        <Container>
            {renderMessages(messages, messagesRef)}
            <InputWrapper>
                <InputIcon />
                <Input type="text" placeholder="Conversar em #chat-livre" />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
