import React, {useState} from 'react';
import {Container, Button, ButtonGroup, IconButton, useToast} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";
import {useAppSelector} from "../../app/hooks";
import {selectTeamTotal} from "../../Redux/MyTeam";
import {
    TeamItemAddSuccessToast,
    TeamItemRemoveSuccessToast,
    TeamMaxLimitExceedToast
} from "../../Utils/Constants/ToastConstants";

function AddOrRemoveButtons(props: {addButtonAction: () => {}, removeButtonAction: () => {}, isPresentInTeam: boolean }) {
    const { addButtonAction, removeButtonAction, isPresentInTeam } = props
    const totalItemsInTeam = useAppSelector(selectTeamTotal)
    const toast = useToast()
    const [isPresent, setIsPresent] = useState(!isPresentInTeam)
    const addButtonClick = () => {
        if(totalItemsInTeam <= 5){
            addButtonAction()
            setIsPresent(false)
            toast(TeamItemAddSuccessToast)
        } else{
            toast(TeamMaxLimitExceedToast)
        }
    }
    const removeButtonClick = () => {
        removeButtonAction()
        setIsPresent(true)
        toast(TeamItemRemoveSuccessToast)
    }
    return (
        <Container centerContent maxW="3xl">

            {isPresent?
                <ButtonGroup size="sm" isAttached variant="outline" onClick={addButtonClick}>
                    <Button mr="-px">Add To Team</Button>
                    <IconButton aria-label="Add to friends" icon={<AddIcon />} />
                </ButtonGroup>
                :
                <ButtonGroup size="sm" isAttached variant="outline" onClick={removeButtonClick} bg={"pink"}>
                    <Button mr="-px">Remove From Team</Button>
                    <IconButton aria-label="Add to friends" icon={<MinusIcon />} />
                </ButtonGroup>
            }
        </Container>
    );
}

export default AddOrRemoveButtons;