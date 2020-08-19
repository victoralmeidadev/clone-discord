import React from 'react';

import {
    Container,
    HashtagIcon,
    Title,
    Separator,
    Description,
} from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>Titulo</Title>
            <Separator />
            <Description>Descricao do canal</Description>
        </Container>
    );
};

export default ChannelInfo;
