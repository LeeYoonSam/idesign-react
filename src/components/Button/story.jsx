import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { checkA11y } from "storybook-addon-a11y";

import { white, black } from "../../style/color";

import Button from "./index";
import Text from "../Text";

const text = "Button";

storiesOf("Button")
  .addDecorator(checkA11y)
  .add("default", () => (
    <Button fixColor={black} hoverColor={white} onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("whiteBase", () => (
    <div style={{ backgroundColor: "black", padding: "10" }}>
      <Button fixColor={white} hoverColor={black} onClick={action("clicked")}>
        Hello Button
      </Button>
    </div>
  ))
  .add("dynamic", () => (
    <Button
      fixColor={black}
      hoverColor={white}
      fontSize="30"
      padding="50"
      onClick={action("clicked")}
    >
      Hello Button
    </Button>
  ));
