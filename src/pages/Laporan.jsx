import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import DownloadLaporan from '../components/DownloadLaporan';
import TableComp from '../components/TableComp';
import TanggalPelakasaan from '../components/TanggalPelakasaan';
import UploadBerkas from '../components/UploadBerkas';
import UploadLaporan from '../components/UploadLaporan';
import UploadNilai from '../components/UploadNilai';

export default function Laporan() {
    const [dataLaporan, setDataLaporan] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        UserService.getAllLaporan().then(
            (response) => {
                const data = response.data.data;
                console.log(data);
                setDataLaporan(data);
            },
            (error) => {
                console.log('Private page', error.response);
            }
        );
    }, []);

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
                    <TableComp dataLaporan={dataLaporan} />
                    <TanggalPelakasaan />
                    <DownloadLaporan />
                    <UploadNilai />
                    <UploadLaporan />
                    <UploadBerkas />
                </div>
            </div>
        </>
    );
}
