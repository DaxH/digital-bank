import { AccountCircle, Visibility } from '@mui/icons-material'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../../components/CustomStyles/TextField'
import MDBox from '../../components/MDBox'
import MDButton from '../../components/MDButton'

export const Login = () => {
	const classes = useStyles()
	const navigate = useNavigate()
	const stateTheme = useSelector((state) => state.theme)
	const { data } = stateTheme
	return (
		<MDBox
			// minHeight='100%'
			width='100%'
			display='flex'
			flexDirection='row'
			// height={'100%'}
			sx={({ breakpoints, transitions }) => ({
				position: "relative",
				[breakpoints.up("xl")]: {
					transition: transitions.create(["margin-left", "margin-right"], {
						easing: transitions.easing.easeInOut,
						duration: transitions.duration.standard,
					}),
				},
			})}>
			<Grid container>
				<Grid item xs={6}>
					<Grid container height={'100%'}>
						<MDBox
							shadow='md'
							borderRadius='lg'
							display='flex'
							justifyContent='center'
							bgColor='white'
							width='60%'
							height='60%'
							flexDirection='column'
							m={'auto'}
							p={{ xl: 6, lg: 2, xs: 1 }}
							sx={{
								border: ({ borders: { borderWidth, borderColor } }) =>
									`${borderWidth[1]} solid ${borderColor}`,
							}}>
							<Grid container direction={'column'} width={'75%'} rowSpacing={2} height={'100%'}>
								<Grid item>
									{
										data.length > 0
										&&
										<img src={data[0].results[0].logo_horizontal} alt={'logo'} width={'35%'} />
									}
								</Grid>
								<Grid item marginTop={'auto'} marginBottom={'auto'}>
									<Grid container direction={'column'} rowSpacing={2}>
										<Grid item>
											<TextField
												className={classes.textField}
												label="Usuario"
												placeholder="usuario1245"
												fullWidth
												InputProps={{
													endAdornment: (
														<InputAdornment position="start">
															<AccountCircle />
														</InputAdornment>
													),
												}}
												variant="standard"
											/>
										</Grid>
										<Grid item>
											<TextField
												className={classes.textField}
												label="Contraseña"
												placeholder="*******"
												fullWidth
												InputProps={{
													endAdornment: (
														<InputAdornment position="start">
															<Visibility />
														</InputAdornment>
													),
												}}
												variant="standard"
											/>
										</Grid>
										<Grid item>
											<MDButton
												variant='contained'
												color='templatePrimary'
												fontWeight={'light'}
												fontSize={'20px'}
												circular={true}
												onClick={() => { navigate('/PosicionConsolidada') }}>
												Ingresar
											</MDButton>
										</Grid>
									</Grid>

								</Grid>

							</Grid>
						</MDBox>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<MDBox
						// shadow='md'
						// borderRadius='xs'
						display='flex'
						width='100%'
						height='100%'
						flexDirection='column'
						sx={{
							backgroundImage: `url('/assets/images/theme/background-login.svg')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",

						}}>
						<Grid item margin={'auto'}>
							<Grid container>
								<Grid item>
									<Grid container columnSpacing={2} justifyContent={'center'} alignItems={'center'}>
										<Grid item>
											<Typography variant='d1' color='white.main'>Bienvenido a</Typography>
										</Grid>
										<Grid item xs={4}>
											{
												data.length > 0
												&&
												<img src={data[0].results[0].logo_vertical} alt={'logo'} width={'50%'} />
											}

										</Grid>
									</Grid>
								</Grid>
								{/* <Grid item> */}
								<Typography variant='body1' color='white.main' marginLeft={'15%'}>Inicia sesión para acceder a tu cuenta</Typography>
								{/* </Grid> */}
							</Grid>
						</Grid>
					</MDBox>
				</Grid>
			</Grid >
		</MDBox >
	)
}
