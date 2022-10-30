import React from 'react';

export default function TambahLaporan() {
    return (
        <div id="page-wrapper">
            <div className="row">
                <div className="col-lg-6 col-lg-push-3">
                    <h1>
                        Laporan <small>Management</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li>
                            <a
                                href="https://simanta.umm.ac.id/~pkn_prod/"
                                title="base"
                                style={{ color: '#1e90ff' }}
                            >
                                <i className="fa fa-home"></i> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://simanta.umm.ac.id/~pkn_prod/index.php/laporan"
                                title="Laporan Management"
                                style={{ color: '#1e90ff' }}
                            >
                                <i className="fa fa-minus-circle"></i> Laporan
                                Management
                            </a>
                        </li>
                        <li>
                            <i className="fa fa-plus-circle fa-fw"></i> Tambah
                            Laporan
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-lg-push-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">Laporan Management</div>
                        <div className="panel-body">
                            <h5 className="text-right">Tanggal : 27-10-2022</h5>
                            <form
                                className="form-horizontal"
                                role="form"
                                method="post"
                                action="https://simanta.umm.ac.id/~pkn_prod/index.php/laporan?action=submit"
                            >
                                <input
                                    type="hidden"
                                    name="increment"
                                    value=""
                                />
                                <div className="form-group">
                                    <label
                                        // for="tanggal"
                                        className="col-sm-3 control-label"
                                        style={{ textAlign: 'left' }}
                                    >
                                        Tanggal
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control datepicker tanggal"
                                            name="tgl_laporan"
                                            placeholder="Tanggal Laporan"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-sm-3 control-label"
                                        style={{ textAlign: 'left' }}
                                    >
                                        Kegiatan
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            required=""
                                            id="isi_laporan"
                                            name="isi_laporan"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-8">
                                        <input
                                            type="submit"
                                            name="submit"
                                            className="btn btn-primary"
                                            value="Submit"
                                            style={{ marginRight: '4px' }}
                                        />
                                        <a
                                            href="/index.php/laporan"
                                            type="button"
                                            className="btn btn-danger"
                                        >
                                            Batal
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
