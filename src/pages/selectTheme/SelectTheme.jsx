import React, { useState } from 'react'
import { CircularProgress, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { BaseLayout } from '../../components/BaseLayout'
import { Card } from '../../components/Elements/Card'
import { ModalDialog } from '../../components/Modals/ModalDialog'
import { useModal } from '../../hooks/useModal'
import MDButton from '../../components/MDButton'
import { Slider } from '../../components/Slider/Slider'
import { helpFunctions } from '../../helpers/helpFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { updateConfigAction } from '../../redux/actions/theme'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'

export const SelectTheme = () => {
	const { fetchRequest } = helpFunctions()

	const stateTheme = useSelector((state) => state.theme)
	const { data } = stateTheme
	const dispatch = useDispatch()
	let updateTheme = { ...data }
	const navigate = useNavigate()
	const themes = [
		{
			name: 'ELODY',
			imgMain: '/assets/images/theme/theme_1_1.png',
			colors: { primary: '#499d24', secondary: '#e8fcea' },
			previewImages: [
				'/assets/images/theme/theme_1_1.png',
				'/assets/images/theme/theme_1_2.png',
				'/assets/images/theme/theme_1_3.png',
				'/assets/images/theme/theme_1_4.png',
			]
		},
		{
			name: 'SIKKA',
			imgMain: '/assets/images/theme/theme_2_1.png',
			colors: { primary: '#499d24', secondary: '#e8fcea' },
			previewImages: [
				'/assets/images/theme/theme_2_1.png',
				'/assets/images/theme/theme_2_2.png',
				'/assets/images/theme/theme_2_3.png',
			]
		}
	]

	const [loadingPreview, setLoadingPreview] = useState(false)
	const { open, handleOpen, handleClose, content, setContent } = useModal()
	const openPreview = (index) => {
		setLoadingPreview(true)
		handleOpen()
		setContent({ nameTheme: themes[index].name, previewImages: themes[index].previewImages, idTheme: index })
		setTimeout(() => { setLoadingPreview(false) }, 1000)

	}

	const closePreview = () => {
		handleClose()
		setLoadingPreview(false)
	}
	const handleSelectTheme = async () => {
		const response = await fetchRequest({ strOperation: 'entity/changeTheme', additionalData: { tema: content.idTheme, id_entidad: 1 } })
		updateTheme[0].results[0].plantilla = content.idTheme
		dispatch(updateConfigAction(updateTheme))
		navigate('/Web')
	}

	return (
		<BaseLayout>
			<>
				<ModalDialog
					open={open}
					dialogTitle={
						<Typography>{content.nameTheme}</Typography>
					}
					dialogContent={
						<Grid container justifyContent={'center'}>
							{
								loadingPreview
									?
									<CircularProgress />
									:
									<>
										{
											content.previewImages
											&&
											<Slider items={content.previewImages} />
										}
									</>
							}
						</Grid>
					}
					buttonClose={true}
					dialogActions={
						!loadingPreview
						&&
						<MDButton
							variant='contained'
							color='primary'
							size='small'
							fontWeight={'bold'}
							fontSize={'20px'}
							circular={true}
							onClick={() => { handleSelectTheme() }}>
							Seleccionar
						</MDButton>
					}
					handleClose={closePreview}
					dividers={true}
				/>
				<Grid container direction="column" height="100%" rowSpacing={1}>
					<Grid item marginTop={1}>
						<TextField
							autoComplete={'off'}
							size='small'
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
							}}

							placeholder='Buscar temas'
							color='primary' />
					</Grid>
					<Grid item marginTop={1}>
						<Typography color={'black'} variant={'d4'}>
							Selecciona un tema para tu banca virtual
						</Typography>
					</Grid>
					<Grid item xs={3.5}>
						<Grid container height={'100%'}>
							{
								themes.map((theme, index) =>
									<Card
										key={index}
										id={index}
										nameTheme={theme.name}
										colors={theme.colors}
										actionButton={() => { openPreview(index) }}
										imgMain={theme.imgMain} />
								)
							}
						</Grid>
					</Grid>
				</Grid>
			</>
		</BaseLayout>
	)
}
