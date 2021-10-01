import React from 'react';
import {Button, Stack} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";

function PaginationButtons(props: { nextButtonAction: () => {}, prevButtonAction: () => {} }) {
    const { nextButtonAction, prevButtonAction } = props
    return (
        <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="pink" variant="solid" color={"white"} onClick={prevButtonAction}>
                <ArrowBackIcon /> Previous
            </Button>
            <Button colorScheme="cyan" variant="solid" color={"white"} onClick={nextButtonAction}>
                Next  <ArrowForwardIcon />
            </Button>
        </Stack>
    );
}

export default PaginationButtons;