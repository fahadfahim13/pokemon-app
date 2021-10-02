import React from 'react';
import {Button, Grid, Box} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";

function PaginationButtons(props: { nextButtonAction: () => {}, prevButtonAction: () => {} }) {
    const { nextButtonAction, prevButtonAction } = props
    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            <Box w="100%"/>
            <Box w="100%"/>
            <Box w="100%">
                <Button colorScheme="pink" variant="solid" color={"white"} onClick={prevButtonAction}>
                    <ArrowBackIcon /> Previous
                </Button>
            </Box>
            <Box w="100%">
                <Button colorScheme="cyan" variant="solid" color={"white"} onClick={nextButtonAction}>
                    Next  <ArrowForwardIcon />
                </Button>
            </Box>
            <Box w="100%"/>
            <Box w="100%"/>
        </Grid>
    );
}

export default PaginationButtons;