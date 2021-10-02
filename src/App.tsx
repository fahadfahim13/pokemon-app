import React, {Fragment, useState} from 'react';
import './App.css';
import TeamNavigation from "./Components/General/Navigations/TeamNavigation";
import TeamView from "./Components/Team/TeamView";
import HomeNavigation from "./Components/General/Navigations/HomeNavigation";
import SearchComponent from "./Components/General/SearchComponent";

function App() {
    const [teamView, setTeamView] = useState(false)

  return (
    <div className="App">
        {!teamView?
            <Fragment>
                <TeamNavigation onTeamClick={() => setTeamView(true)} />
                <SearchComponent />
            </Fragment>
            :
            <Fragment>
                <HomeNavigation onTeamClick={() => setTeamView(false)} />
                <TeamView />
            </Fragment>}

    </div>
  );
}

export default App;
