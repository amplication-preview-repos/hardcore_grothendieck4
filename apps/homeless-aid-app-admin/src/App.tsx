import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AdoptionRequestList } from "./adoptionRequest/AdoptionRequestList";
import { AdoptionRequestCreate } from "./adoptionRequest/AdoptionRequestCreate";
import { AdoptionRequestEdit } from "./adoptionRequest/AdoptionRequestEdit";
import { AdoptionRequestShow } from "./adoptionRequest/AdoptionRequestShow";
import { FundList } from "./fund/FundList";
import { FundCreate } from "./fund/FundCreate";
import { FundEdit } from "./fund/FundEdit";
import { FundShow } from "./fund/FundShow";
import { HomelessPersonList } from "./homelessPerson/HomelessPersonList";
import { HomelessPersonCreate } from "./homelessPerson/HomelessPersonCreate";
import { HomelessPersonEdit } from "./homelessPerson/HomelessPersonEdit";
import { HomelessPersonShow } from "./homelessPerson/HomelessPersonShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
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
        title={"HomelessAidApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AdoptionRequest"
          list={AdoptionRequestList}
          edit={AdoptionRequestEdit}
          create={AdoptionRequestCreate}
          show={AdoptionRequestShow}
        />
        <Resource
          name="Fund"
          list={FundList}
          edit={FundEdit}
          create={FundCreate}
          show={FundShow}
        />
        <Resource
          name="HomelessPerson"
          list={HomelessPersonList}
          edit={HomelessPersonEdit}
          create={HomelessPersonCreate}
          show={HomelessPersonShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
