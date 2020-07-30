import arrowshorizontal from '../public-imgs/icons/arrows-horizontal.svg';
import coin from '../public-imgs/icons/coin.svg';
import money from '../public-imgs/icons/money-location.svg';
import config from '../public-imgs/icons/cog.svg';

const services = [
    {
        name: 'Transferência',
        path: '/transfer',
        icon: arrowshorizontal,
    },
    {
        name: 'Depósito',
        path: '/deposit',
        icon: coin,
    },
    {
        name: 'Saque',
        path: '/withdraw',
        icon: money,
    },
    {
        name: 'Configurações',
        path: '/config',
        icon: config,
    },
]

export default services;