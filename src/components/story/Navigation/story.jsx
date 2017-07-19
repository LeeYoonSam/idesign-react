import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { checkA11y } from "storybook-addon-a11y";
// import Navigation from "./navigation";
// import NavigationTab from "./navigationTab";
import { Navigation, NavigationTab } from "./index";

storiesOf("Navigation").add("default", () => (
  <Navigation height={80} sticky={false}>
    <NavigationTab active={true} onClick={action("clicked TAB1!")}>
      TAB1
    </NavigationTab>

    <NavigationTab onClick={action("clicked TAB2!")}>TAB2</NavigationTab>
    <NavigationTab onClick={action("clicked TAB3!")}>
      TAB3
    </NavigationTab>
    <NavigationTab onClick={action("clicked TAB4!")}>
      TAB4
    </NavigationTab>
    <NavigationTab onClick={action("clicked TAB5!")}>TAB5</NavigationTab>
    <NavigationTab onClick={action("clicked TAB6!")}>
      TAB6
    </NavigationTab>
  </Navigation>
));
