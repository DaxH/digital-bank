import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../CustomStyles/cardStyles/CardStyles'
import MDBox from '../MDBox'
import MDButton from '../MDButton'

export const Card = ({ id, nameTheme, colors = { primary: '#89f7fe', secondary: '#66a6ff' }, actionButton, imgMain }) => {
	const classes = useStyles()
	return (
		<MDBox
			shadow='md'
			borderRadius='xs'
			display='flex'
			id={`card-${id}`}
			width='20%'
			height='100%'
			flexDirection='column'
			className={classes.card}
			sx={{ ':before': { background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%);` } }}>
			<Typography color={'white.main'} variant='h4'>{nameTheme}</Typography>
			<img className={'imgMain'} src={imgMain} />
			<Grid item className='button-right' alignSelf={'end'} marginLeft={'auto'}>
				<MDButton
					variant='contained'
					color='primary'
					size='small'
					fontWeight={'bold'}
					fontSize={'20px'}
					circular={true}
					fullWidth
					onClick={() => { actionButton() }}>
					Preview
				</MDButton>
				{/* <Button variant='contained' onClick={() => { actionButton() }} sx={{ background: colorsTheme.primary.main }}>
					Preview
				</Button> */}
			</Grid>
		</MDBox >
	)
}
