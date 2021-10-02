import React, {Fragment, useState} from 'react';
import './App.css';
import TeamNavigation from "./Components/General/Navigations/TeamNavigation";
import TeamView from "./Components/Team/TeamView";
import HomeNavigation from "./Components/General/Navigations/HomeNavigation";
import SearchComponent from "./Components/General/SearchComponent";
import {Divider} from "@chakra-ui/react";

function App() {
    const [teamView, setTeamView] = useState(false)

  return (
    <div className="App">
        {!teamView?
            <Fragment>
                <TeamNavigation onTeamClick={() => setTeamView(true)} />
                <Divider />
                <SearchComponent />
            </Fragment>
            :
            <Fragment>
                <HomeNavigation onTeamClick={() => setTeamView(false)} />
                <Divider />
                <TeamView />
            </Fragment>}

    </div>
  );
}

export default App;
