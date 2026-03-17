import { lazy } from "react";

const Counter   = lazy(() => import("../features/Counter/Counter"));
const Todo      = lazy(() => import("../features/Todo/Todo"));
const Clock     = lazy(() => import("../features/Clock/Clock"));

export const SECTIONS = [
    { id: "counter", label: "Counter App", Component: Counter },
    { id: "todo", label: "Todo List App", Component: Todo },
    { id: "clock", label: "Clock App", Component: Clock },
];