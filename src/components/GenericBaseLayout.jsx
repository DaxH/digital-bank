import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider'
import MDBox from './MDBox'

const GenericBaseLayout = ({ children }) => {
    const { openDrawer } = useContextLayout()
    return (
        <MDBox
            minHeight='100%'
            width={'100%'}
            display='flex'
            flexDirection='column'
            className={'backgroundAbs'}
            sx={({ breakpoints, transitions }) => ({
                position: "relative",
                [breakpoints.up("xl")]: {
                    transition: transitions.create(["margin-left", "margin-right"], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}>
            <Grid
                container
                sx={{
                    maxWidth: '80% !important',
                    marginTop: '50px',
                    marginBottom: '90px',
                    minHeight: '73vh',
                    mx: 'auto'
                }}>
                <Grid item width={'100%'}>
                    {children}
                </Grid>
            </Grid>
        </MDBox>
    )
}

GenericBaseLayout.propTypes = {
    children: PropTypes.element.isRequired
}
export default GenericBaseLayout