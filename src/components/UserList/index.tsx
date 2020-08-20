import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Victor Almeida" />
            <UserRow nickname="Sucesso" isBot />
            <UserRow nickname="André Core" />
            <UserRow nickname="Christian Butkevicis" />
            <UserRow nickname="Math Rodrigues" />
            <UserRow nickname="SIR CHARLIE CHAPLIN" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Developer DJ" isBot />
            <UserRow nickname="Guizin" />
            <UserRow nickname="snow" />
            <UserRow nickname="DeNada" />
            <UserRow nickname="Fiori" />
            <UserRow nickname="oYoda" />
            <UserRow nickname="oDuh" />
            <UserRow nickname="Borest" />
            <UserRow nickname="Netero" />
            <UserRow nickname="Murdok" />
            <UserRow nickname="Costa" />
            <UserRow nickname="Buiu" />
            <UserRow nickname="Shocker" />
        </Container>
    );
};

export default UserList;
