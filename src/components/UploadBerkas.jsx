import React from 'react';

export default function UploadBerkas() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    Upload Berkas Kelengkapan [Individu]
                </div>
            </div>
            <div className="panel-body">
                <form
                    className="form-horizontal"
                    action="https://simanta.umm.ac.id/~pkn_prod/index.php/laporan?action=upload_berkas"
                    method="post"
                    accept-charset="utf-8"
                    enctype="multipart/form-data"
                    required=""
                >
                    <div className="form-group">
                        <label
                            className="col-sm-3   control-label"
                            style={{ textAlign: 'left' }}
                        >
                            Scan Lembar Pengesahan
                        </label>
                        <div className="col-sm-3">
                            <input
                                type="file"
                                name="berkas1"
                                accept="image/jpeg"
                            />
                        </div>
                        <div className="col-sm-3">
                            <a
                                href="https://simanta.umm.ac.id/~pkn_prod/assets/images/berkas/911-201810370311005-1.jpg?uwu84079"
                                data-lightbox="roadtrip"
                                data-title="Scan Nilai Institusi"
                                className="btn btn-default"
                                target="_blank"
                            >
                                <i
                                    className="fa fa-check fa-lg"
                                    style={{ color: '#5cb85c' }}
                                ></i>
                                Lihat Dokumen
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <label
                            className="col-sm-3   control-label"
                            style={{ textAlign: 'left' }}
                        >
                            Scan Lembar Persetujuan
                        </label>
                        <div className="col-sm-3">
                            <input
                                type="file"
                                name="berkas2"
                                accept="image/*"
                            />
                        </div>
                        <div className="col-sm-3">
                            <a
                                href="https://simanta.umm.ac.id/~pkn_prod/assets/images/berkas/911-201810370311005-2.jpg?uwu20073"
                                data-lightbox="roadtrip"
                                data-title="Scan Nilai Institusi"
                                className="btn btn-default"
                                target="_blank"
                            >
                                <i
                                    className="fa fa-check fa-lg"
                                    style={{ color: '#5cb85cs' }}
                                ></i>
                                Lihat Dokumen
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <label
                            className="col-sm-3   control-label"
                            style={{ textAlign: 'left' }}
                        >
                            Scan KSM
                        </label>
                        <div className="col-sm-3">
                            <input
                                type="file"
                                name="berkas3"
                                accept="image/*"
                            />
                        </div>
                        <div className="col-sm-3">
                            <a
                                href="https://simanta.umm.ac.id/~pkn_prod/assets/images/berkas/911-201810370311005-3.jpg?uwu96420"
                                data-lightbox="roadtrip"
                                data-title="Scan KSM"
                                className="btn btn-default"
                                target="_blank"
                            >
                                <i
                                    className="fa fa-check fa-lg"
                                    style={{ color: '#5cb85cs' }}
                                ></i>
                                Lihat Dokumen
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <label
                            className="col-sm-3   control-label"
                            style={{ textAlign: 'left' }}
                        >
                            Scan Kwitansi
                        </label>
                        <div className="col-sm-3">
                            <input
                                type="file"
                                name="berkas4"
                                accept="image/*"
                            />
                        </div>
                        <div className="col-sm-3">
                            <a
                                href="https://simanta.umm.ac.id/~pkn_prod/assets/images/berkas/911-201810370311005-4.jpg?uwu29912"
                                data-lightbox="roadtrip"
                                data-title="Scan Kwitansi"
                                className="btn btn-default"
                                target="_blank"
                            >
                                <i
                                    className="fa fa-check fa-lg"
                                    style={{ color: '#5cb85cs' }}
                                ></i>
                                Lihat Dokumen
                            </a>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label style={{ color: 'red' }}>
                                {' '}
                                File Maximum 1024 Kb
                            </label>
                        </div>
                        <div className="col-sm-12">
                            <label style={{ color: 'red' }}>
                                {' '}
                                File yang diijinkan .jpg
                            </label>
                            <label style={{ color: 'red' }}>
                                Untuk mengganti dokumen tinggal upload aya file
                                yg baru, sans
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-3">
                            <input
                                type="submit"
                                value="Submit"
                                name="go_upload2"
                                className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
