import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [user, setUser] = React.useState("");
  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <>
          <Search userName={user?.login} setUser={setUser} />
          <Profile user={user} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
