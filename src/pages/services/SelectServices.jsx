import * as React from 'react';
import Grid from '@mui/material/Grid';
import MDButton from '../../components/MDButton'
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import MarkUnreadChatAltRoundedIcon from '@mui/icons-material/MarkUnreadChatAltRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useNavigate } from 'react-router-dom'

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

export default function SelectServices() {
    const handleIcons = (id) => {
        switch (id) {
            case 1:
                return <MarkUnreadChatAltRoundedIcon color='orange' />
            case 2:
                return <AccountBalanceRoundedIcon />
            case 6:
                return <AssignmentIndRoundedIcon />
            case 7:
                return <AddShoppingCartRoundedIcon />
            case 8:
                return <AccountBalanceWalletRoundedIcon />
            default:
                break;
        }
    };
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([]);
    const [right, setRight] = React.useState([]);
    const [services, setServicies] = React.useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleSend = () => {
        navigate('/Temas')
    };


    React.useEffect(() => {
        let servicesArray = [];
        setLeft([]);
        setRight([]);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: { "id_entity": 1 },
            url: 'https://www.fintech.kradac.com:3006/modulo/get_services'
        };
        async function prueba() {
            await axios(requestOptions).then(async (respuesta) => {

                respuesta.data.data.forEach(element => {
                    servicesArray.push(
                        {
                            name: element.descripcion,
                            id: element.id
                        }
                    )
                });
                console.log(servicesArray, rightChecked.length)
                setLeft(servicesArray);
            }).catch((error) => {
                console.log(error)
            });

            // setData(await axios.post('https://www.fintech.kradac.com:3006/entity', {"id_entity":1 },{ 'Content-Type': 'application/json'}))
        }
        prueba();
    }, [])

    const customList = (title, items) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                    <>
                        <Checkbox
                            onClick={handleToggleAll(items)}
                            checked={numberOfChecked(items) === items.length && items.length !== 0}
                            indeterminate={
                                numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
                            }
                            disabled={items.length === 0}
                            inputProps={{
                                'aria-label': 'all items selected',
                            }}
                        />
                    </>


                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} seleccionados`}
            />
            <Divider />
            <List
                sx={{
                    width: 300,
                    height: 300,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((value) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>

                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                                <div className='item' style={{ marginTop: '10px', marginRight: '10px' }}>
                                    {
                                        handleIcons(value.id)
                                    }

                                </div>

                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.name}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Card>
    );

    return (
        <>

            <Grid container spacing={2} marginTop={10} marginBottom={10} justifyContent="center" alignItems="center">
                <Grid item>{customList('Productos disponibles', left)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>{customList('Productos seleccionados', right)}</Grid>

            </Grid>
            <Grid container justifyContent={'center'} spacing={2} paddingTop={'1%'}>
                <Grid item xs={8} md={4}>
                    <MDButton
                        variant='contained'
                        color='templatePrimary'
                        size='small'
                        form='form-dataIFI'
                        type='submit'
                        fontWeight={'bold'}
                        fontSize={'20px'}
                        circular={true}
                        onClick={() => { handleSend() }}
                        fullWidth
                        disabled={right.length < 1}
                    >
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
                        Cancelar
                    </MDButton>
                </Grid>
            </Grid>
        </>
    );
}