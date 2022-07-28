import React from 'react'
import { useNavigate } from "react-router-dom";
import { AppBar, Avatar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PaymentIcon from '@mui/icons-material/Payment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const BarMenu = () => {

	const navigate = useNavigate()
	const stateTheme = useSelector((state) => state.theme)
	const stateColor = useSelector((state) => state.color)
	const { data } = stateTheme
	const { data: colors } = stateColor

	const menuItems = [
		{
			label: 'Posición consolidada',
			child: [],
			icon: <MonetizationOnIcon color={'templateSecondary'} />,
			link: '/PosicionConsolidada'
		},
		{
			label: 'Transferencias',
			icon: <CompareArrowsIcon color={'templateSecondary'} />,
			child: [
				{ label: 'Internas' },
				{ label: 'Externas' },
			],
			link: '/Transferencias'
		},
		{
			label: 'Pago de servicios',
			child: [],
			icon: <ReceiptIcon color={'templateSecondary'} />,
			link: '#'
		},
		{
			label: 'Pago de tarjetas',
			child: [],
			icon: <PaymentIcon color={'templateSecondary'} />,
			link: '#'
		},
		{
			label: 'Solicitudes',
			child: [],
			icon: <ListAltIcon color={'templateSecondary'} />,
			link: '#'
		},
	]
	return (
		<AppBar sx={{ background: colors.templatePrimary.main }}>
			<Toolbar style={{ padding: 0 }} sx={{ height: '2rem', background: 'white' }}>
				<Grid container justifyContent='space-between' padding={'0 8%'}>
					<Grid item>
						{
							data.length > 0
							&&
							<img src={data[0].results[0].logo_horizontal} alt={'logo'} width={'100px'} />
						}
						<Typography variant="h2" color='templatePrimary.main'></Typography>
					</Grid>
					<Grid item xs={2}>
						<Grid container columnSpacing={2} justifyContent={'space-between'} alignItems={'center'} border={2} borderRadius={10} borderColor={'templatePrimary.main'}>
							<Grid item>
								<Avatar src='/assets/images/avatar.jpg' />
							</Grid>
							<Grid item>
								<Typography color='templatePrimary.main' style={{ fontSize: '30px' }}>Dax</Typography>
							</Grid>
							<Grid item>
								<IconButton>
									<NotificationsIcon sx={{ color: colors.templatePrimary.main }} />
								</IconButton>
							</Grid>
							<Grid item>
								<IconButton onClick={() => { navigate('/Login') }}>
									<ExitToAppIcon sx={{ color: colors.templatePrimary.main }} />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
			<Toolbar style={{ padding: 0 }} >
				<Grid container justifyContent='space-between' padding={'0 20%'}>
					{
						menuItems.map((menuItem, index) => (
							<Grid item justifyContent='center' columnSpacing={2} key={index}>
								<Button
									variant="contained"
									startIcon={menuItem.icon}
									color='white'
									onClick={menuItem.link !== '#' ? () => { navigate(menuItem.link) } : () => { }}>
									{menuItem.label}
								</Button>
							</Grid>
						))
					}
				</Grid>
			</Toolbar>
		</AppBar>
	)
}
