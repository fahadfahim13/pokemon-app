import React, {Fragment, useState} from 'react';
import TeamNavigation from "./Navigations/TeamNavigation";
import SearchComponent from "./SearchComponent";
import HomeNavigation from "./Navigations/HomeNavigation";
import TeamView from "../Team/TeamView";
import {Container} from "@chakra-ui/react";

function HomePage() {
    const [teamView, setTeamView] = useState(false)
    return (
        <Container centerContent>
            {!teamView?
                <Fragment>
                    <TeamNavigation onTeamClick={() => setTeamView(true)} />
                    <br />
                    <SearchComponent />
                </Fragment>
                :
                <Fragment>
                    <HomeNavigation onTeamClick={() => setTeamView(false)} />
                    <br />
                    <TeamView />
                </Fragment>}

        </Container>
    );
}

export default HomePage;