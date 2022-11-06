import { db } from '../config/firebase';
import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

export default function TambahLaporan() {
    const [tanggalLaporan, setTanggalLaporan] = useState(0);
    const [kegiatan, setKegiatan] = useState('');

    const laporanCollectionRef = collection(
        db,
        'mahasiswa/GcQHisxXVrraAN1dx198/laporan'
    );

    const createEvent = async () => {
        await addDoc(laporanCollectionRef, {
            tanggal_laporan: tanggalLaporan,
            isi_laporan: kegiatan,
        });
    };
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
                            <form className="form-horizontal">
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
                                            onChange={(e) => {
                                                setTanggalLaporan(
                                                    e.target.value
                                                );
                                            }}
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
                                            onChange={(e) => {
                                                setKegiatan(e.target.value);
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-8">
                                        <input
                                            name="submit"
                                            className="btn btn-primary"
                                            style={{ marginRight: '4px' }}
                                            onClick={createEvent}
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
