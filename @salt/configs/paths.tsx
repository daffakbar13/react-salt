import React from "react";
import PageHome from "../containers/PageHome";
import { createPath } from "../utils/createPath";

export const BasePath = [
    createPath({
        path: '/',
        element: <PageHome/>
    }),
]