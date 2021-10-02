import React, {useState} from 'react';
import {Container, Button} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";

function AddOrRemoveButtons(props: {addButtonAction: () => {}, removeButtonAction: () => {}, isPresentInTeam: boolean }) {
    const { addButtonAction, removeButtonAction, isPresentInTeam } = props

    const [isPresent, setIsPresent] = useState(!isPresentInTeam)
    const addButtonClick = () => {
        addButtonAction()
        setIsPresent(false)
    }
    const removeButtonClick = () => {
        removeButtonAction()
        setIsPresent(true)
    }
    return (
        <Container centerContent maxW="3xl">
            {isPresent?
                <Button borderRadius={"50%"} colorScheme={"teal"} onClick={addButtonClick}><AddIcon /></Button>
                :
                <Button borderRadius={"50%"} colorScheme={"teal"} onClick={removeButtonClick}><MinusIcon /></Button>
            }
        </Container>
    );
}

export default AddOrRemoveButtons;