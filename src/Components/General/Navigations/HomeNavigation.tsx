import React from 'react';
import { Menu, MenuButton, Button, WrapItem } from "@chakra-ui/react";

function HomeNavigation(props: {onTeamClick: () => void }) {
    const { onTeamClick } = props
    return (
        <Menu>
            <MenuButton as={Button} colorScheme="pink" onClick={onTeamClick}>
                <WrapItem>
                    Home
                </WrapItem>
            </MenuButton>
        </Menu>
    );
}

export default HomeNavigation;