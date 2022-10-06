import React from 'react';

export default function TanggalPelakasaan() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    Tanggal Pelaksanaan PKN <span className="">-- </span>
                </div>
            </div>
            <div className="panel-body">
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-3">
                            <label for="tgl_mulai">Tanggal Mulai</label>
                            <input
                                type="text"
                                className="form-control mulai"
                                // data-provide="datepicker"
                                // name="tgl_mulai"
                                placeholder="Tanggal Mulai"
                                value="04-01-2021"
                                // data-date-format="dd-mm-yyyy"
                            />
                        </div>
                        <div className="col-sm-3">
                            <label for="tgl_mulai">Tanggal Selesai</label>
                            <input
                                type="text"
                                className="form-control akhir"
                                // name="tgl_selesai"
                                placeholder="Tanggal Selesai"
                                value="04-04-2021"
                                // data-date-format="dd-mm-yyyy"
                            />
                        </div>

                        <div className="col-sm-2">
                            <label
                                // for="tgl_mulai"
                                style={{ paddingBottom: '4px' }}
                            >
                                &nbsp;
                            </label>
                            <input
                                type="submit"
                                className="btn-primary form-control"
                                name="submit_tgl_pelaksanaan"
                                value="Submit"
                            />
                        </div>
                        <div className="col-sm-4">
                            <p className="alert alert-warning">
                                ** Perlu diketahui, dengan mengganti tanggal ini
                                maka seluruh tanggal pelaksanaan anggota
                                kelompok juga akan berubah.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
