import React from "react";
import { storiesOf } from "@storybook/react";
// import { Tabs, Tab } from "./index";
import Tabs from "./tabs";
import Tab from "./tab";

storiesOf("Tabs").add("default", () => (
  <Tabs id="tabbedNavigation" navigationHeight={80} navigationSticky={false}>
    <Tab label="Tab1" active>Tab1 content</Tab>
    <Tab label="Tab2">Tab2 content</Tab>
    <Tab label="Tab3">Tab3 content</Tab>
    <Tab label="Tab4">Tab4 content</Tab>
    <Tab label="Tab5">Tab5 content</Tab>
    <Tab label="Tab6">Tab6 content</Tab>
  </Tabs>
));
