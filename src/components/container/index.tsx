import React from "react";

type ContainerProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-screen-xl mx-auto px-3">
            {children}
        </div>
    )
}
