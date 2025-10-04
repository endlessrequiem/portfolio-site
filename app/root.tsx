import type {LinksFunction, MetaFunction} from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import "./styles/globals.css";

export const meta: MetaFunction = () => [
    {title: "Austin White, Software Engineer"},
    {name: "description", content: "Portfolio of Austin White, Software Engineer"},
];

export default function App() {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico"/>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}
