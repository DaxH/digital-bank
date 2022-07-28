import { FormHelperText, Grid, InputLabel, OutlinedInput } from "@mui/material";
import { makeStyles, styled } from '@mui/styles';
import { Link } from "react-router-dom";
import { helpFunctions } from "../../helpers/helpFunctions";
import colors from "../../styles/theme/base/colors";
import IconState from '../Icons/Icons'

export const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
    fontSize: '19px !important',
    color: theme.palette.primary.main,
    margin: '0%'
}));


const { inputValue } = helpFunctions()

const GenericInput = (
    {
        id,
        onEventChange = () => { },
        name,
        typeValue,
        colorTextLink = 'info.focus',
        register = () => { },
        validation = [],
        error,
        Adornment,
        errorMessage,
        placeHolder,
        title,
        readOnly,
        fontSizeTextLink = null,
        textlink,
        labelLink,
        value,
        forceData = () => { },
        handleBlur,
        onKeyUp = () => { },
        inputProps,
        icon,
        colorIcon,
        spacingCustom = 0,
        color
    }) => {
    const errorField = error && error[name]
    const errorBoolean = error && Boolean(errorField)
    const useStylesForm = makeStyles({
        root: {
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: errorBoolean ? colors.error.main : colors.border.main
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: errorBoolean ? `${colors.error.main} !important` : colors.border.main,
                borderWidth: '1.5px'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: `${errorBoolean ? colors.error.main : colors.border.main}`
            },
            '& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: errorBoolean ? colors.error.main : colors.border.main
            },
            '& input:-internal-autofill-selected': {
                '-webkit-background-clip': 'text'
            },

            '&:hover .9-input': {
                color: errorBoolean ? colors.error.main : colors.border.main
            },
            '& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-input': {
                color: errorBoolean ? colors.error.main : colors.border.main
            },
        },
        style: {
            borderRadius: '25px !important',
            position: 'relative',
            height: '25px',
            color: color,
            fontSize: '15px !important',
        }
    });
    const classes = useStylesForm();

    return (
        <>
            <InputLabelStyled className='break-line' sx={{ marginBottom: '0% !important' }}>
                {
                    <span dangerouslySetInnerHTML={{ __html: title ? title : placeHolder }} />
                }
            </InputLabelStyled >
            {
                icon
                    ?
                    <Grid container spacing={spacingCustom}>
                        <Grid item height={'1.2em'} xs={1} xl={0.5} margin='auto'>
                            <IconState color={colorIcon} icon={icon} />
                        </Grid>
                        <Grid item flexGrow={1} xs={spacingCustom === 0 ? 11 : 10} xl={spacingCustom === 0 ? 11.5 : 10.5}>
                            <OutlinedInput
                                id={id}
                                name={name}
                                type={typeValue}
                                value={value}
                                onInput={(e) => { forceData(e); inputValue(e) }}
                                readOnly={readOnly}
                                onChange={(e) => { onEventChange(e) }}
                                onKeyUp={onKeyUp}
                                {...register(`${name}`, validation)}
                                placeholder={placeHolder}
                                fullWidth
                                className={`${classes.root} ${classes.style}`}
                                inputProps={inputProps}
                                endAdornment={Adornment}
                                onBlur={handleBlur} />
                        </Grid>
                    </Grid>
                    :
                    <OutlinedInput
                        id={id}
                        name={name}
                        type={typeValue}
                        value={value}
                        onInput={(e) => { forceData(e); inputValue(e) }}
                        readOnly={readOnly}
                        onChange={(e) => { onEventChange(e) }}
                        onKeyUp={onKeyUp}
                        {...register(`${name}`, validation)}
                        placeholder={placeHolder}
                        fullWidth
                        endAdornment={Adornment}
                        className={`${classes.root} ${classes.style}`}
                        inputProps={inputProps}
                        onBlur={handleBlur} />
            }

            {textlink ?
                <Grid item={true}
                    xs
                    sx={{
                        my: -1,
                    }}>
                    <Link href="#" fontSize={fontSizeTextLink ? fontSizeTextLink : 'auto'} color={color} className="linkStyled" underline="none">
                        {textlink}
                    </Link>
                </Grid>

                : null
            }
            {
                labelLink ?
                    <label style={{ color: '#727374', fontSize: '15px' }} variant='subtitle2' underline="none">
                        {labelLink}
                    </label>
                    :
                    null

            }
            {
                errorField &&
                (
                    <FormHelperText error id={`${id}-error`}>
                        {errorMessage[errorField['type']]}
                    </FormHelperText>
                )
            }

        </>
    )
}
export default GenericInput