import React from 'react';
import Utama from './Component/Utama';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return(
        <div>
          <nav className="navbar fixed-top navbar-fixed-top shadow-sm navbar-dark bg-dark">
            <Container>
              <Navbar.Brand >MOKLETMONEY</Navbar.Brand>
              <Nav className="me-auto">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/">Dashboard</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataSiswa">Data Siswa</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataPetugas">Data Petugas</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataKelas">Data Kelas</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/DataSPP">Data SPP</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/TransaksiPembayaran">Transaksi Pembayaran</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/HistoriPembayaran">Histori Pembayaran</Link></a>
                  </li>
                </Nav>
            </Container>
          </nav>
          <p><Utama /></p>
        </div>
    );
  }
}
export default App;