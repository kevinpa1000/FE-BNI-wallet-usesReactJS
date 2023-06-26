import './App.css';
import React from 'react';


class App extends React.Component {
   

    render() {
        return ( 
            <>
                <div className = 'container py-5' >
                    <div className ='row' >
                        <div className = 'col-12 text-center' >
                            <h1 className='fw-bold'> BNI-Wallet </h1> 
                            <hr className='w-75 mx-auto' />
                            <h2 className='fw-bold'>Rp 1.500.000,-</h2>
                            <span className='title-md'> Sisa uang kamu tersisa 75%</span>
                        </div> 
                    </div >

                   <div className='row mt-4'>
                        <div className='col-6'>
                             <div className='card-wraper p-4'>
                                <div className='icon-wrapper-in mb-1'>
                                    <i class="bi bi-wallet2"></i>
                                </div>
                                <span className='title-sm'>Pemasukan</span>
                                <h3 className='fw-bold'>Rp 5.000.000,-</h3>
                                <div>
                                    <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> Tarnsaksi</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-6'>
                             <div className='card-wraper p-4'>
                                <div className='icon-wrapper-out mb-1'>
                                <i class="bi bi-bag-check-fill"></i>
                                
                                </div>
                                <span className='title-sm'>Pengeluaran</span>
                                <h3 className='fw-bold'>Rp 3.500.000,-</h3>
                                <div>
                                    <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> Transaksi</span>
                                </div>
                            </div>
                        </div>
                    </div> 

                    

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-item-center'>
                            <h4>Ringkasan Transaksi</h4>
                            <div className='wraper-button d-flex '>
                                <button className='button btn-ungu px-3 py-2 me-2' >Pemasukan <i class="bi bi-plus-circle-fill"></i></button>
                                <button className='button btn-pink px-3 py-2' >Pengeluaran <i class="bi bi-dash-circle-fill"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='icon-wrapper-in'>
                                    <i class="bi bi-wallet2"></i>
                                </div>

                                <div className='transaction ms-3 d-flex flex-column'>
                                    <h6>Menerima gaji</h6>
                                    <span className='title-sm'>1 July 2023</span>
                                </div>
                            </div>

                            <h5 className='text-money-in '>Rp 6.000.000</h5>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='icon-wrapper-out'>
                                    <i class="bi bi-bag-check-fill"></i>
                                </div>

                                <div className='transaction ms-3 d-flex flex-column'>
                                    <h6>Beli Sepatu</h6>
                                    <span className='title-sm'>2 July 2023</span>
                                </div>
                            </div>

                            <h5 className='text-money-out '>Rp -300.000</h5>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='icon-wrapper-out'>
                                <i class="bi bi-bag-check-fill"></i>
                                </div>

                                <div className='transaction ms-3 d-flex flex-column'>
                                    <h6>Makan nasi padang</h6>
                                    <span className='title-sm'>7 July 2023</span>
                                </div>
                            </div>

                            <h5 className='text-money-out '>Rp -37.000</h5>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='icon-wrapper-out'>
                                <i class="bi bi-bag-check-fill"></i>
                                </div>

                                <div className='transaction ms-3 d-flex flex-column'>
                                    <h6>Hapy hapy</h6>
                                    <span className='title-sm'>9 July 2023</span>
                                </div>
                            </div>

                            <h5 className='text-money-out '>Rp -450.000</h5>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div className='icon-wrapper-in'>
                                    <i class="bi bi-wallet2"></i>
                                </div>

                                <div className='transaction ms-3 d-flex flex-column'>
                                    <h6>Gaji freelance</h6>
                                    <span className='title-sm'>15 July 2023</span>
                                </div>
                            </div>

                            <h5 className='text-money-in '>Rp 5.500.000</h5>
                        </div>
                    </div>

                </div >  
            </> 
        )
    }
}


export default App;