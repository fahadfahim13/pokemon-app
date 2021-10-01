import React, {Fragment} from 'react';
import {Box, Button, Fade} from "@chakra-ui/react";
import {PokemonResult} from "../../Utils/Constants/API_ResultInterfaces";
import {addToTeam, removeFromTeam} from "../../Redux/MyTeam";
import {useAppDispatch} from "../../app/hooks";

function PokemonListItem(props: PokemonResult) {
    const { name, url } = props
    const dispatch = useAppDispatch()
    return (
        <Fragment>
            <Fade in={true}>
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" color="white"
                     bg="teal.500"
                     rounded="md"
                     shadow="md"
                     onClick={() => console.log(url)}
                >
                    <h3>Name: {name}</h3>
                    <Box>
                        <Button colorScheme={"teal"} onClick={() => dispatch(addToTeam({...props})) }>Add To team</Button>
                        <Button colorScheme={"teal"} onClick={() => dispatch(removeFromTeam({...props})) }>Remove from team</Button>
                    </Box>
                </Box>

            </Fade>
        </Fragment>
    );
}

export default PokemonListItem;