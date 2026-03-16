import { lazy } from "react";

const Counter   = lazy(() => import("../features/Counter/Counter"));

export const SECTIONS = [
    { id: "counter", label: "Counter App", Component: Counter },
];