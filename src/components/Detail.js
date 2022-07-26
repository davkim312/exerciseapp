import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import EquipmentImage from '../assets/icons/equipment.png';
import TargetImage from '../assets/icons/target.png';

const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ];
    
    return (
        <Stack
            gap='60px'
            sx={{
                flexDirection: {
                    lg: 'row'
                }, 
                p: '20px',
                alignItems: 'center'
            }}
        >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
                <Typography variant='h4'>
                    {name}
                </Typography>
                <Typography variant='h6'> 
                    Make exercising a daily routine to create a healty life. {name} {` `}
                        is a great exercise to target your {target}. 
                        <br />
                        <br />
                        Don't give up, keep working towards your goal!
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{background: 'fff2db', borderRadius: '50%', height: '100px', width: '100px'}}>
                            <img 
                                src={item.icon} 
                                alt={bodyPart}
                                style={{
                                    height: '50px',
                                    width: '50px'
                                }}
                            />
                        </Button>
                        <Typography variant='h5' textTransform='capitalize'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
};

export default Detail;