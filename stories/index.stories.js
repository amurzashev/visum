/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

import {
  Colors,
  Fonts,
  Media,
  Loading,
} from './UI';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('UI - Web')} />
));

storiesOf('UI - Web', module)
  .add('colors', () => <Colors />)
  .add('fonts', () => <Fonts />)
  .add('media querries', () => <Media />)
  .add('loading', () => <Loading />);
