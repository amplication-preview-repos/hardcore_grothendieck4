import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExerciseSessionList } from "./exerciseSession/ExerciseSessionList";
import { ExerciseSessionCreate } from "./exerciseSession/ExerciseSessionCreate";
import { ExerciseSessionEdit } from "./exerciseSession/ExerciseSessionEdit";
import { ExerciseSessionShow } from "./exerciseSession/ExerciseSessionShow";
import { ExerciseCountList } from "./exerciseCount/ExerciseCountList";
import { ExerciseCountCreate } from "./exerciseCount/ExerciseCountCreate";
import { ExerciseCountEdit } from "./exerciseCount/ExerciseCountEdit";
import { ExerciseCountShow } from "./exerciseCount/ExerciseCountShow";
import { ExerciseList } from "./exercise/ExerciseList";
import { ExerciseCreate } from "./exercise/ExerciseCreate";
import { ExerciseEdit } from "./exercise/ExerciseEdit";
import { ExerciseShow } from "./exercise/ExerciseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ExerciseCounterService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ExerciseSession"
          list={ExerciseSessionList}
          edit={ExerciseSessionEdit}
          create={ExerciseSessionCreate}
          show={ExerciseSessionShow}
        />
        <Resource
          name="ExerciseCount"
          list={ExerciseCountList}
          edit={ExerciseCountEdit}
          create={ExerciseCountCreate}
          show={ExerciseCountShow}
        />
        <Resource
          name="Exercise"
          list={ExerciseList}
          edit={ExerciseEdit}
          create={ExerciseCreate}
          show={ExerciseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
