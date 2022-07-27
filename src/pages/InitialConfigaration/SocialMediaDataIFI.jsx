import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MDBox from '../../components/MDBox'
import $ from 'jquery';
import { helpFunctions } from '../../helpers/helpFunctions';
import PropTypes from 'prop-types'
import GenericInput from '../../components/Inputs/GenericInput';
import MDButton from '../../components/MDButton';

const SocialMediaDataIFI = ({ sendDataFunction }) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isValidValue, setIsValidValue] = useState(false)
    const inputMin = 5
    const inputMax = 1000

    const handleChangeInput = () => {
        var facebookInput = $('#facebookInput').val() ? $('#facebookInput').val() : ''
        var twitterInput = $('#twitterInput').val() ? $('#twitterInput').val() : ''
        if (facebookInput.length > 0 && twitterInput.length > 0) {
            setIsValidValue(true)
        } else {
            setIsValidValue(false)
        }
    }
    return (
        <MDBox
            shadow='md'
            borderRadius='lg'
            display='block'
            alignItems='center'
            borderColor='border'
            bgColor='white'
            width='100%'
            height='100%'
            p={{ lg: 3, xs: 2 }}
            sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
            }}>
            <form autoComplete='off'
                id='form_socialIFI'
                onSubmit={
                    handleSubmit(data => {
                        sendDataFunction(data, isValidValue)
                    })
                }>
                <Grid container direction='row' columnSpacing={3} justifyContent='center' alignContent='center' paddingTop={{ xs: '2%', md: '3%' }} paddingBottom={{ xs: '2%', md: '5%' }}>
                    <Grid item xs={12} md={8}>
                        <Grid container paddingLeft={'3vw'} direction='column' rowSpacing={3}>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '50%' }} alignSelf='center'>
                                <GenericInput
                                    id={'facebookInput'}
                                    name={'facebookInput'}
                                    typeValue={'text'}
                                    title={'Facebook'}
                                    register={register}
                                    validation={{
                                        required: true,
                                        maxLength: inputMax,
                                        minLength: inputMin,
                                        // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                    }}
                                    errorMessage={{
                                        required: 'Este campo es requerido',
                                        maxLength: `Número de caracteres permitidos ${inputMax}`,
                                        minLength: `Número mínimo de caracteres ${inputMin}`,
                                        pattern: 'Ingrese solo caracteres numéricos',
                                    }}
                                    inputProps={{
                                        maxLength: inputMax,
                                        minLength: inputMin,
                                    }}
                                    error={errors}
                                    // forceData={forceStringNumber}
                                    onKeyUp={handleChangeInput}
                                    placeHolder={'Url de la cuenta de facebook.'}
                                />
                            </Grid>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '50%' }} alignSelf='center'>
                                <GenericInput
                                    id={'twitterInput'}
                                    name={'twitterInput'}
                                    typeValue={'text'}
                                    title={'Twitter'}
                                    register={register}
                                    validation={{
                                        required: true,
                                        maxLength: inputMax,
                                        minLength: inputMin,
                                        // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                    }}
                                    errorMessage={{
                                        required: 'Este campo es requerido',
                                        maxLength: `Número de caracteres permitidos ${inputMax}`,
                                        minLength: `Número mínimo de caracteres ${inputMin}`,
                                        pattern: 'Ingrese solo caracteres numéricos',
                                    }}
                                    inputProps={{
                                        maxLength: inputMax,
                                        minLength: inputMin,
                                    }}
                                    error={errors}
                                    // forceData={forceStringNumber}
                                    onKeyUp={handleChangeInput}
                                    placeHolder={'Url de la cuenta de twitter.'}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'} spacing={2} paddingTop={'1%'}>
                    <Grid item xs={8} md={4}>
                        <MDButton
                            variant='contained'
                            color='secondary'
                            size='small'
                            form='form_socialIFI'
                            type='submit'
                            fontWeight={'bold'}
                            fontSize={'20px'}
                            circular={true}
                            fullWidth
                            disabled={isValidValue ? false : true}>
                            Terminar
                        </MDButton>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <MDButton
                            variant='outlined'
                            color='secondary'
                            size='small'
                            fontWeight={'bold'}
                            fontSize={'20px'}
                            circular={true}
                            fullWidth
                            onClick={() => { navigate('/') }}>
                            Cancelar
                        </MDButton>
                    </Grid>
                </Grid>
            </form>
        </MDBox >
    )
}

SocialMediaDataIFI.propTypes = {}

export default SocialMediaDataIFI