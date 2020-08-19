import React from 'react';

import ServerButton from '../../components/ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={140} />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton hasNotifications mentions={38} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    );
};

export default ServerList;
