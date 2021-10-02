import React, {Fragment, useEffect} from 'react';
import {Box, Container, Image, useToast} from "@chakra-ui/react";
import {Pokemon, PokemonResult} from "../../Utils/Constants/API_ResultInterfaces";
import {addToTeam, removeFromTeam} from "../../Redux/MyTeam";
import {useAppDispatch} from "../../app/hooks";
import AddOrRemoveButtons from "../Team/AddOrRemoveButtons";
import UseTeamPresent from "../../Utils/Hooks/useTeamPresent";
import usePokemonSearch from "../../Utils/Hooks/usePokemonSearch";
import {SearchErrorToast} from "../../Utils/Constants/ToastConstants";

function PokemonListItem(props: PokemonResult) {
    const { name } = props
    const dispatch = useAppDispatch()
    const isPresentInTeam = UseTeamPresent({...props})
    let searchResults: Pokemon, error: string | boolean | undefined;
    [searchResults, error] = usePokemonSearch(name)
    const toast = useToast()

    useEffect(() => {
        if(error){
            toast(SearchErrorToast)
        }
    }, [toast, error])

    return (
        <Fragment>
            <Container centerContent maxW="xl">
                <Box padding="4" maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden" color="white" bg="teal.500"
                     shadow="md" >
                    <Image borderRadius="full" boxSize="150px" src={searchResults.sprites?searchResults.sprites.front_default:''} alt={name} />
                    <h3>Name: {name}</h3>
                    <h3>Weight: {searchResults.weight}</h3>
                    <h3>Height: {searchResults.height}</h3>
                    <h3>Ability: {searchResults.abilities && searchResults.abilities[0].ability.name}</h3>
                </Box>

                <AddOrRemoveButtons isPresentInTeam={isPresentInTeam} addButtonAction={() => dispatch(addToTeam({...props}))}
                                    removeButtonAction={() => dispatch(removeFromTeam({...props}))}
                />
            </Container>
        </Fragment>
    );
}

export default PokemonListItem;