# @hookplus/use-before-leave

React Hook to execute a function when the mouse leaves the page. Useful to show a popup or for analytics.

## Installation

#### yarn

`yarn add @hookplus/use-before-leave`

#### npm

`npm i @hookplus/use-before-leave`

## Usage

```js
import React from "react";
import useBeforeLeave from "@hookplus/use-before-leave";

function App() {
  const beforeLeave = () => console.log("User is leaving...");
  useBeforeLeave(beforeLeave);
  return <h1>Hello Hookplus</h1>;
}
```

### Arguments

| Argument      | Type     | Description                                              | Required |
| ------------- | -------- | -------------------------------------------------------- | -------- |
| onBeforeLeave | function | Function to be called when the mouse leaves the document | yes      |
