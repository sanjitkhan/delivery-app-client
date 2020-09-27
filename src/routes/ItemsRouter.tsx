import React from "react";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import Items from "../containers/Items/Items";
import BrandsTab from "../containers/Items/ItemsTabs/BrandsTab";
import CategoriesTab from "../containers/Items/ItemsTabs/CategoriesTab";
import { AppRoutes, ItemsRoutes } from "./routes";

const ApplicationsRouter: React.FC<RouteComponentProps> = ({
  match: { path }
}: RouteComponentProps) => {
  return (
    <Switch>
      <Route
        path={`${path}/:tabName`}
        render={() => <Items />}
      />
      <Redirect
        from={AppRoutes.ITEMS}
        exact
        to={AppRoutes.ITEMS + ItemsRoutes.CATEGORIES}
      />
      <Route path={AppRoutes.ITEMS + ItemsRoutes.CATEGORIES} exact component={CategoriesTab} />
      <Route path={AppRoutes.ITEMS + ItemsRoutes.BRANDS} exact component={BrandsTab} />
    </Switch>
  );
};

export default withRouter(ApplicationsRouter);