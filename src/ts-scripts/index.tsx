import * as React from "react";
import { render } from "react-dom";

export interface HelloProps { compiler: string }

export const Hello = (props: HelloProps) => (
    <h1>Compiler: {props.compiler}</h1>
);

render(
    <Hello compiler="TypeScript" />,
    document.getElementById("react-ts-root")
);