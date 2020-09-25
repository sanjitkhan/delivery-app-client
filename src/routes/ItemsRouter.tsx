import React from "react";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import Items from "../containers/Items/Items";
import BrandsTab from "../containers/Items/ItemsTabs/BrandsTab";
import CategoriesTab from "../containers/Items/ItemsTabs/CategoriesTab";
import { ItemsRoutes } from "./routes";

interface ItemsRouterProps extends RouteComponentProps {}

const ApplicationsRouter: React.FC<ItemsRouterProps> = ({
  match: { path }
}: ItemsRouterProps) => {
  return (
    <Switch>
      <Route
        path={`${path}/:tabName`}
        render={() => <Items />}
      />
      <Redirect
        from={'/items'}
        exact
        to={`/items/${ItemsRoutes.CATEGORIES}`}
      />
      <Route path={`/items/${ItemsRoutes.CATEGORIES}`} exact component={CategoriesTab} />
      <Route path={`/items/${ItemsRoutes.BRANDS}`} exact component={BrandsTab} />
    </Switch>
  );
};

export default withRouter(ApplicationsRouter);