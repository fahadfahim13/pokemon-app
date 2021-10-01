import React, {useState} from 'react';
import {Box, Button} from "@chakra-ui/react";
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
        <Box>
            {isPresent?
                <Button borderRadius={"50%"} colorScheme={"teal"} onClick={addButtonClick}><AddIcon /></Button>
                :
                <Button borderRadius={"50%"} colorScheme={"teal"} onClick={removeButtonClick}><MinusIcon /></Button>
            }
        </Box>
    );
}

export default AddOrRemoveButtons;