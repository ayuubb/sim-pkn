import React from 'react';

export default function DownloadLaporan() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">Download Laporan</div>
            </div>
            <div className="panel-body">
                <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <a href="https://simanta.umm.ac.id/~pkn_prod/index.php/download/laporan">
                                <strong>
                                    <i className="fa fa-download"></i> Download
                                    Laporan Harian
                                </strong>
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <a href="https://simanta.umm.ac.id/~pkn_prod/assets/images/manual/TEMPLATE LAPORAN PKN.docx">
                                {' '}
                                <i className="fa fa-download"></i>{' '}
                                <strong>Download Template Laporan Akhir</strong>
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <a href="https://simanta.umm.ac.id/~pkn_prod/assets/doc_template/Lembar_penilaian_instansi.docx">
                                {' '}
                                <i className="fa fa-download"></i>{' '}
                                <strong>
                                    Download Form Penilaian Instansi
                                </strong>
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <a href="https://simanta.umm.ac.id/~pkn_prod/assets/images/manual/LEMBAR ASISTENSI PKN.docx">
                                {' '}
                                <i className="fa fa-download"></i>{' '}
                                <strong>Download Lembar Asistensi</strong>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
