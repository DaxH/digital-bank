import { Grid } from '@mui/material'
import React from 'react'
import { MUITable } from '../MUITable'

export const Accounts = () => {
	const rows = [
		['401 XXX XXX 221', 'LUIS GARCIA', '$200.00', '$200.00', 'Ver detalles >'],
		['411 XXX XXX 333', 'LUIS GARCIA', '$200.00', '$200.00', 'Ver detalles >'],
		['200 XXX XXX 432', 'LUIS GARCIA', '$200.00', '$200.00', 'Ver detalles >'],
		// ['787 XXX XXX 122', 'LUIS GARCIA', '$200.00', '$200.00', 'Ver detalles >'],
	]
	const columns = [
		{
			field: 'accountNumber',
			name: 'Nro. de cuenta',
			options: {
				filter: true,
				setCellProps: _value => ({
					className: ' firstColumn center'
				}),
				setCellHeaderProps: _value => ({
					className: 'centerHeader'
				}),
			},

		},
		{
			field: 'beneficiary',
			name: 'Nombre de la cuenta',
			options: {
				filter: true,
				setCellProps: _value => ({
					className: 'left'
				}),
				setCellHeaderProps: _value => ({
					className: 'centerHeader'
				}),
			},
		},
		{
			field: 'amountCountable',
			name: 'Saldo contable',
			options: {
				filter: true,
				setCellProps: _value => ({
					className: 'right'
				}),
				setCellHeaderProps: _value => ({
					className: 'centerHeader'
				}),
			},
		},
		{
			field: 'amount',
			name: 'Saldo disponible',
			options: {
				filter: true,
				setCellProps: _value => ({
					className: 'right'
				}),
				setCellHeaderProps: _value => ({
					className: 'centerHeader'
				}),
			},
		},
		{
			field: 'actions',
			name: 'Acciones',
			options: {
				filter: true,
				setCellProps: _value => ({
					className: 'center firstColumn'
				}),
				setCellHeaderProps: _value => ({
					className: 'centerHeader'
				})
			},
		},
	]
	return (
		<Grid container>
			<Grid item width="100%">
				<MUITable rows={rows} columns={columns} />
			</Grid>
		</Grid>

	)
}
