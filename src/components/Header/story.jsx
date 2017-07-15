import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { checkA11y } from "storybook-addon-a11y";

import { white, black } from "../../style/color";

import Header from "./index";

const title = "Header";
const subTitle = "subTitle";

storiesOf("Header")
  .addDecorator(checkA11y)
  .add("default", () => <Header title={title} />)
  .add("withFacebookColor", () => <Header title={title} color={"facebook"} />)
  .add("withPinterestColor", () => (
    <Header title={title} color={"pinterest"} />
  ))
  .add("idesignHeader", () => (
    <Header isIdesign={true} title={title}/>
  ));
