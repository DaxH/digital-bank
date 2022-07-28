import React from 'react'
import PropTypes from 'prop-types'
import { ElementDrawer } from './ElementDrawer'
import { Grid, Typography } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider'
import MDBox from './MDBox'

export const BaseLayout = ({ children }) => {
	const { openDrawer } = useContextLayout()
	return (
		<>
			<MDBox
				// minHeight='100%'
				display='flex'
				flexDirection='row'
				width='100%'
				// height={'100%'}
				sx={({ breakpoints, transitions }) => ({
					position: "relative",
					[breakpoints.up("xl")]: {
						transition: transitions.create(["margin-left", "margin-right"], {
							easing: transitions.easing.easeInOut,
							duration: transitions.duration.standard,
						}),
					},
					backgroundImage: `url('/assets/images/waves.svg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				})}>
				<Grid
					item
					height={'100%'}
					width={openDrawer ? '11%' : '5%'}
					sx={{
						transition: 'width 0.5s',
						transitionTimingFunction: 'linear'
					}}>
					<ElementDrawer />
				</Grid>
				<Grid item width="100%">
					<Grid
						container
						sx={{
							maxWidth: '80% !important',
							height: '90%',
							// marginTop: '90px',
							// marginBottom: '90px',
							// minHeight: '73vh',
							mx: 'auto'
						}}>
						<Grid item width={'100%'}>
							{children}
						</Grid>
					</Grid>
					<Grid item xs={12} height={'10%'}>
						<MDBox
							display='flex'
							flexDirection='row'
							bgColor='secondary'
							// opacity={0.5}
							width='100%'
							height={'100%'} justifyContent={'space-between'} alignItems='center' p={'0 16px'} >
							<Grid item>
								<img src='/assets/images/stike-logo.png' width='90px' height='90px' />
							</Grid>
							<Grid item>
								<Typography fontWeight={'bold'} color='dark'>Tike todos los derechos reservados</Typography>
							</Grid>
						</MDBox>
					</Grid>
				</Grid>
			</MDBox>
		</>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.element.isRequired
}