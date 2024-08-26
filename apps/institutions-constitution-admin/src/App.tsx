import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JudiciaryList } from "./judiciary/JudiciaryList";
import { JudiciaryCreate } from "./judiciary/JudiciaryCreate";
import { JudiciaryEdit } from "./judiciary/JudiciaryEdit";
import { JudiciaryShow } from "./judiciary/JudiciaryShow";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { LegislatureList } from "./legislature/LegislatureList";
import { LegislatureCreate } from "./legislature/LegislatureCreate";
import { LegislatureEdit } from "./legislature/LegislatureEdit";
import { LegislatureShow } from "./legislature/LegislatureShow";
import { ExecutiveList } from "./executive/ExecutiveList";
import { ExecutiveCreate } from "./executive/ExecutiveCreate";
import { ExecutiveEdit } from "./executive/ExecutiveEdit";
import { ExecutiveShow } from "./executive/ExecutiveShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"Institutions & Constitution"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Judiciary"
          list={JudiciaryList}
          edit={JudiciaryEdit}
          create={JudiciaryCreate}
          show={JudiciaryShow}
        />
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
        <Resource
          name="Legislature"
          list={LegislatureList}
          edit={LegislatureEdit}
          create={LegislatureCreate}
          show={LegislatureShow}
        />
        <Resource
          name="Executive"
          list={ExecutiveList}
          edit={ExecutiveEdit}
          create={ExecutiveCreate}
          show={ExecutiveShow}
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
