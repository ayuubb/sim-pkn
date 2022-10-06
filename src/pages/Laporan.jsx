import React from 'react';
import DownloadLaporan from '../components/DownloadLaporan';
import TableComp from '../components/TableComp';
import TanggalPelakasaan from '../components/TanggalPelakasaan';
import UploadNilai from '../components/UploadNilai';

export default function Laporan() {
    return (
        <>
            <div className="row">
                <div className="col-lg-10 col-lg-push-1">
                    <h1>
                        Laporan <small>Harian</small>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 col-lg-push-1">
                    <TableComp />
                    <TanggalPelakasaan />
                    <DownloadLaporan/>
                    <UploadNilai/>
                </div>
            </div>
        </>
    );
}
