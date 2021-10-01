import React from 'react';
import { Menu, MenuButton, Button, Avatar, WrapItem } from "@chakra-ui/react";
import {useAppSelector} from "../../../app/hooks";
import {selectTeamTotal} from "../../../Redux/MyTeam";

function HomeNavigation(props: {onTeamClick: () => void }) {
    const totalPokemons = useAppSelector(selectTeamTotal)
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