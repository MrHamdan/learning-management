import React from 'react';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Header from '../Header/Header';

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Header handleOpen={handleOpen} />
            <Banner />
            <Form open={open} handleClose={handleClose} />
        </div>
    );
};

export default Home;