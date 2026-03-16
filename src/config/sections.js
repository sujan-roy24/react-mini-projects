import { lazy } from "react";

const Counter  = lazy(() => import("../features/Counter/Counter"));
const Todo     = lazy(() => import("../features/Todo/Todo"));

export const SECTIONS = [
    { id: "counter", label: "Counter App", Component: Counter },
    { id: "Todo", label: "Todo List App", Component: Todo },
];