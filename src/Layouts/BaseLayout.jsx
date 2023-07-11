import React from 'react'
import { Box } from '@mui/material/';
import { Outlet } from 'react-router';

export default function BaseLayout({children}) {
    return (
        <Box>
            {children || <Outlet />}
        </Box>
    )
}