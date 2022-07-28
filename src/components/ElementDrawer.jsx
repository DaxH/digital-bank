import React from 'react'
import { HomeOutlined, CloseOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { IconButton, Grid, Button } from '@mui/material'
import { useContextLayout } from '../hooks/context/UseLayoutContextProvider';
import MDBox from './MDBox';

export const ElementDrawer = () => {
	const { openDrawer, setOpenDrawer } = useContextLayout()
	const optionsDrawer = [
		{ label: 'Seleccionar tema', icon: <HomeOutlined color={'white'} sx={{ fontSize: '2rem' }} /> },
	]

	return (
		<>
			{
				<MDBox
					shadow='md'
					display='block'
					alignItems='center'
					bgColor='white'
					opacity={0.8}
					width='100%'
					height='100%'
					p={1}
					sx={{
						borderRight: ({ borders: { borderWidth, borderColor } }) =>
							`${borderWidth[5]} dashed ${borderColor}`,
					}}>
					<Grid container height={'100%'} direction='column' rowSpacing={2}>
						<Grid item flexGrow={1}>
							<Grid container justifyContent={'center'}>
								<img src={openDrawer ? '/assets/images/stike-logotipo.png' : '/assets/images/stike-logo.png'} width="100%" />
								{
									openDrawer
										?
										optionsDrawer.map((option, index) =>
											<Grid container justifyContent='center' columnSpacing={2} key={index} marginTop={'5%'}>
												<Button
													variant="contained"
													startIcon={option.icon}
													sx={{
														color: '#ffff',
														backgroundColor: '#499d24',
														padding: '0 8px',
														'&:hover': { backgroundColor: '#499d24 !important' },
														'&:focus:not(:hover)': { backgroundColor: '#499d24 !important' }
													}}>
													{option.label}
												</Button>
											</Grid>
										)
										:
										optionsDrawer.map((option, index) =>
											<Grid item key={index}>
												<IconButton onClick={() => { }}>
													{option.icon}
												</IconButton>
											</Grid>
										)
								}
							</Grid>
						</Grid>
						<Grid item alignSelf={'end'}>
							<IconButton onClick={() => { setOpenDrawer(!openDrawer) }}>
								{
									openDrawer
										?
										<CloseOutlined color='black' />
										:
										<KeyboardArrowRightOutlined color='black' />
								}
							</IconButton>
						</Grid>
					</Grid>
				</MDBox>

			}
		</>
	)
}
