"use client";

import "./globals.css";

import { useState } from "react";

interface ErrorWrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error has occurred.",
} : {
    message?: string;
}) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        throw new Error(message);
    }
    
    return (
        <button
            onClick={() => setHasError(true)}
            className="px-4 py-2 bg-red-500 text-white rounded"
        >
            Simulate Error
        </button>
    );
    
}

export const ErrorWrapper = ({ children }: ErrorWrapperProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="mb-4 space-x-4">
                <ErrorSimulator message="Simulated error in root layout"></ErrorSimulator>
            </div>
            {children}
        </div>
    )
}