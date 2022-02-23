import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import DataSiswa from './DataSiswa';
import DataPetugas from './DataPetugas';
import DataKelas from './DataKelas';
import DataSPP from './DataSPP';
import TransaksiPembayaran from './TransaksiPembayaran';
import HistoriPembayaran from './HistoriPembayaran';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/DataSiswa" element={<DataSiswa/>}/>
        <Route path="/DataPetugas" element={<DataPetugas/>}/>
        <Route path="/DataKelas" element={<DataKelas/>}/>
        <Route path="/DataSPP" element={<DataSPP/>}/>
        <Route path="/TransaksiPembayaran" element={<TransaksiPembayaran/>}/>
        <Route path="/HistoriPembayaran" element={<HistoriPembayaran/>}/>
    </Routes>
)

export default Utama;