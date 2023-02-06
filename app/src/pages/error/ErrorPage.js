import React from "react";
import "../../assets/css/ErrorPage.css";
import Stack from "react-bootstrap/Stack";

export default function ErrorPage() {
    document.title = "404 Error Page";
    return (
        <div className="bg-image">
            <Stack gap={3} className="mx-auto">
                <div></div>
                <div></div>
                <h1 className="d-flex justify-content-center align-items-center">404 Error</h1>
            </Stack>
        </div>
    )
}