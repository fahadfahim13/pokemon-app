import React from 'react';
import { Menu, MenuButton, Button, Avatar, WrapItem } from "@chakra-ui/react";
import {useAppSelector} from "../../app/hooks";
import {selectTeamTotal} from "../../Redux/MyTeam";

function Navigation() {
    const totalPokemons = useAppSelector(selectTeamTotal)
    return (
        <Menu>
            <MenuButton as={Button} colorScheme="pink">
                <WrapItem>
                    My Team <Avatar bg="teal.500" size="xs" name={totalPokemons.toString()} />
                </WrapItem>
            </MenuButton>
        </Menu>
    );
}

export default Navigation;