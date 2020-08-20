import React from 'react';

import { Grid } from './styles';

import ServerList from '../../components/ServerList';
import ServerName from '../../components/ServerName';
import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import ChannelData from '../../components/ChannelData';
import UserInfo from '../../components/UserInfo';
import UserList from '../../components/UserList';

const Layout: React.FC = () => {
    return (
        <>
            <Grid>
                <ServerList />
                <ServerName />
                <ChannelInfo />
                <ChannelList />
                <UserInfo />
                <ChannelData />
                <UserList />
            </Grid>
        </>
    );
};

export default Layout;
