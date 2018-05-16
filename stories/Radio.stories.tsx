import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Radio } from "../src";

storiesOf("Components/Radio", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Radio name="options_1" value="1" checked>
            이것은 라디오버튼입니다. (옵션1)
          </Radio>
          <Radio name="options_1" value="2">
            이것은 라디오버튼입니다. (옵션1)
          </Radio>
          <Radio name="options_1" value="3">
            이것은 라디오버튼입니다. (옵션1)
          </Radio>
          <Radio name="options_2" value="1">
            이것은 라디오버튼입니다. (옵션2)
          </Radio>
          <Radio name="options_2" value="2">
            이것은 라디오버튼입니다. (옵션2)
          </Radio>
          <Radio name="options_2" value="3" checked>
            이것은 라디오버튼입니다. (옵션2)
          </Radio>
        </App>
      );
    })
  )
  .add("with fontSize",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Radio name="options_1" value="1" fontSize="h2" checked>
            이것은 라디오버튼입니다.
          </Radio>
          <Radio name="options_1" value="2" fontSize="h2">
            이것은 라디오버튼입니다.
          </Radio>
        </App>
      );
    })
  )
  .add("with fontWeight",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Radio name="options_1" value="1" fontWeight="bold" checked>
            이것은 라디오버튼입니다.
          </Radio>
          <Radio name="options_1" value="2" fontWeight="bold">
            이것은 라디오버튼입니다.
          </Radio>
        </App>
      );
    })
  )
  .add("with inline",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Radio name="options_1" display="inline-block" value="1" checked>
            이것은 라디오버튼입니다.
          </Radio>
          <Radio name="options_1" display="inline-block" value="2">
            이것은 라디오버튼입니다.
          </Radio>
          <Radio name="options_1" display="inline-block" value="3">
            이것은 라디오버튼입니다.
          </Radio>
        </App>
      );
    })
  )
  .add("with space (margin, padding)",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Radio m={2} p={1}>
            이것은 라디오버튼입니다.
          </Radio>
        </App>
      );
    })
  );
