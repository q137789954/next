'use client'
import React, { ReactNode } from 'react';
import { NextUIProvider } from "@nextui-org/react";

const Provider = ({children}: { children: ReactNode }): ReactNode => {

    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default Provider;