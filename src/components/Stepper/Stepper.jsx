import React from 'react'
import { Grid, Typography } from '@mui/material'
// import { SearchBar } from '../components/searchBar'
import MDBox from '../MDBox'
import { StepperCustom } from './StepperCustom'
import typography from './../../styles/theme/base/typography'

const Stepper = ({ links, activeStep, steps, renderSwitch, label, page, functionRender = true }) => {
    const customLabel = {
        page1: 'page1',
    }
    const { size } = typography
    return (
        <MDBox width='100%' height='100%' bgColor='transparent'>
			{/* <Grid item> */}
			{/* </Grid> */}
            <Grid container direction="column" spacing={1} display='flex'>
			<img src='/assets/images/stike-logotipo.png'  width='270px' height='100px' style={{ margin:'auto' }}/>
                {/* <Grid item>
                    <SearchBar links={links} />
                </Grid> */}
                <Grid item style={{ paddingTop: 0 }}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <Typography
                                variant='subtitle1'
                                color={'primary'}
                                sx={{
                                    paddingLeft: 5,
                                    fontSize: { xs: size.lg, xl: size.xl }
                                }}>
                                {
                                    customLabel[page]
                                        &&
                                        activeStep === 1
                                        ?
                                        'page1'
                                        :
                                        customLabel[page]
                                        ||
                                        label
                                }
                            </Typography>
                        </Grid>
                        <Grid item height={'3rem'}>
                            <MDBox
                                shadow='md'
                                borderRadius='lg'
                                display='block'
                                alignItems='center'
                                bgColor='white'
                                width='100%'
                                height='100%'
                                sx={{
                                    border: ({ borders: { borderWidth, borderColor } }) =>
                                        `${borderWidth[1]} solid ${borderColor}`,
                                }}>
                                <Grid item flexGrow={1}>
                                    <StepperCustom steps={steps} activeStep={activeStep} />
                                </Grid>
                            </MDBox>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {
                        activeStep <= steps.length
                        &&
                        <>
                            {
                                functionRender
                                    ?
                                    renderSwitch(activeStep)
                                    :
                                    renderSwitch
                            }
                        </>
                    }
                </Grid>
            </Grid>
        </MDBox>
    )
}
export default Stepper