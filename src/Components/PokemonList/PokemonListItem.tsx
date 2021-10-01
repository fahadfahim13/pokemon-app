import React from 'react';
import {Box} from "@chakra-ui/react";
import {PokemonResult} from "../../Utils/Constants/API_ResultInterfaces";
import {addToTeam, removeFromTeam} from "../../Redux/MyTeam";
import {useAppDispatch} from "../../app/hooks"
import AddOrRemoveButtons from "../Team/AddOrRemoveButtons";
import UseTeamPresent from "../../Utils/Hooks/useTeamPresent";

function PokemonListItem(props: PokemonResult) {
    const { name, url } = props
    const dispatch = useAppDispatch()
    const isPresentInTeam = UseTeamPresent({...props})
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" color="white" bg="teal.500"
             shadow="md" onClick={() => console.log(url)} >
            <h3>Name: {name}</h3>
            <AddOrRemoveButtons isPresentInTeam={isPresentInTeam}
                addButtonAction={() => dispatch(addToTeam({...props}))}
                                removeButtonAction={() => dispatch(removeFromTeam({...props}))}
            />
        </Box>
    );
}

export default PokemonListItem;