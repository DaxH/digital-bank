import React, { useState } from 'react'
import MDBox from '../../components/MDBox'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material';
import GenericInput from '../../components/Inputs/GenericInput';
import MDButton from '../../components/MDButton';
import $ from 'jquery';
import PropTypes from 'prop-types'
import { helpFunctions } from '../../helpers/helpFunctions';

const LegalDataIFI = ({ sendDataFunction }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isValidValue, setIsValidValue] = useState(false)
    const { forceNumber } = helpFunctions()
    const copyrightMsjMin = 5
    const copyrightMsjMax = 1000
    const numMin = 5
    const numMax = 13
    const statementMin = 5
    const statementMax = 100
    const navigate = useNavigate()
    const inputMin = 5
    const inputMax = 1000

    const handleChangeInput = () => {
        var copyright = $('#copyrightInput').val() ? $('#copyrightInput').val() : ''
        var contactInput = $('#contactInput').val() ? $('#contactInput').val() : ''
        var statementInput = $('#statementInput').val() ? $('#statementInput').val() : ''
        var facebookInput = $('#facebookInput').val() ? $('#facebookInput').val() : ''
        var twitterInput = $('#twitterInput').val() ? $('#twitterInput').val() : ''
        if (copyright.length > 0 && contactInput.length > 0 && statementInput.length > 0 && facebookInput.length > 0 && twitterInput.length > 0) {
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
                id='form-legalDataIFI'
                onSubmit={
                    handleSubmit(data => {
                        sendDataFunction(data, isValidValue)
                    })
                }>
                <Grid container direction='row' columnSpacing={3} justifyContent='center' alignContent='center' paddingTop={{ xs: '2%', md: '3%' }} paddingBottom={{ xs: '2%', md: '5%' }}>
                    <Grid item xs={12} md={6}>
                        <Grid container paddingLeft={'3vw'} direction='column' rowSpacing={3}>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                <GenericInput
                                    id={'copyrightInput'}
                                    name={'copyrightInput'}
                                    typeValue={'text'}
                                    title={'Copyright'}
                                    register={register}
                                    validation={{
                                        required: true,
                                        maxLength: copyrightMsjMax,
                                        minLength: copyrightMsjMin,
                                        // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                    }}
                                    errorMessage={{
                                        required: 'Este campo es requerido',
                                        maxLength: `Número de caracteres permitidos ${copyrightMsjMax}`,
                                        minLength: `Número mínimo de caracteres ${copyrightMsjMin}`,
                                        pattern: 'Ingrese solo caracteres numéricos',
                                    }}
                                    inputProps={{
                                        maxLength: copyrightMsjMax,
                                        minLength: copyrightMsjMin,
                                    }}
                                    error={errors}
                                    // forceData={forceStringNumber}
                                    onKeyUp={handleChangeInput}
                                    placeHolder={'Mensaje de copyright de la empresa.'}
                                />
                            </Grid>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                <GenericInput
                                    id={'contactInput'}
                                    name={'contactInput'}
                                    typeValue={'text'}
                                    title={'Contacto:'}
                                    register={register}
                                    validation={{
                                        required: true,
                                        maxLength: numMax,
                                        minLength: numMin,
                                        // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                    }}
                                    errorMessage={{
                                        required: 'Este campo es requerido',
                                        maxLength: `Número de caracteres permitidos ${numMax}`,
                                        minLength: `Número mínimo de caracteres ${numMin}`,
                                        pattern: 'Ingrese solo caracteres numéricos',
                                    }}
                                    inputProps={{
                                        maxLength: numMax,
                                        minLength: numMin,
                                    }}
                                    error={errors}
                                    forceData={forceNumber}
                                    onKeyUp={handleChangeInput}
                                    placeHolder={'Numero de contacto con la entidad.'}
                                />
                            </Grid>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
                                <GenericInput
                                    id={'statementInput'}
                                    name={'statementInput'}
                                    typeValue={'text'}
                                    title={'Lema'}
                                    register={register}
                                    validation={{
                                        required: true,
                                        maxLength: statementMax,
                                        minLength: statementMin,
                                        // pattern: /[^A-Za-zá-üÁ-Ü\s]/g,
                                    }}
                                    errorMessage={{
                                        required: 'Este campo es requerido',
                                        maxLength: `Número de caracteres permitidos ${statementMax}`,
                                        minLength: `Número mínimo de caracteres ${statementMin}`,
                                        pattern: 'Ingrese solo caracteres numéricos',
                                    }}
                                    inputProps={{
                                        maxLength: statementMax,
                                        minLength: statementMin,
                                    }}
                                    error={errors}
                                    // forceData={forceStringNumber}
                                    onKeyUp={handleChangeInput}
                                    placeHolder={'Lema de la entidad financiera.'}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container paddingLeft={'3vw'} direction='column' rowSpacing={3}>
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
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
                            <Grid item xs={10} md={6} width={{ xs: '80%', xl: '90%' }} alignSelf='center'>
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
                            color='templatePrimary'
                            size='small'
                            form='form-legalDataIFI'
                            type='submit'
                            fontWeight={'bold'}
                            fontSize={'20px'}
                            circular={true}
                            fullWidth
                            disabled={isValidValue ? false : true}>
                            Siguiente
                        </MDButton>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <MDButton
                            variant='outlined'
                            color='templatePrimary'
                            size='small'
                            fontWeight={'bold'}
                            fontSize={'20px'}
                            circular={true}
                            fullWidth
                            onClick={() => { navigate('/') }}>
                            Salir
                        </MDButton>
                    </Grid>
                </Grid>
            </form>
        </MDBox >
    )
}

LegalDataIFI.propTypes = {}

export default LegalDataIFI