import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';
import DownloadLaporan from '../components/DownloadLaporan';
import TableComp from '../components/TableComp';
import TanggalPelakasaan from '../components/TanggalPelakasaan';
import UploadBerkas from '../components/UploadBerkas';
import UploadLaporan from '../components/UploadLaporan';
import UploadNilai from '../components/UploadNilai';
import { db } from '../config/firebase';
import {
    collection,
    doc,
    getDoc,
    onSnapshot,
    getDocs,
    query,
    QuerySnapshot,
    enableIndexedDbPersistence,
} from 'firebase/firestore';
const laporanCollectionRef = query(
    collection(db, 'mahasiswa/GcQHisxXVrraAN1dx198/laporan')
);

export default function Laporan() {
    const [dataLaporan, setDataLaporan] = useState([]);

    useEffect(() => {
        const offline = async () => {
            await enableIndexedDbPersistence(db).catch((err) => {
                if (err.code == 'failed-precondition') {
                    // Multiple tabs open, persistence can only be enabled
                    // in one tab at a a time.
                    // ...
                } else if (err.code == 'unimplemented') {
                    // The current browser does not support all of the
                    // features required to enable persistence
                    // ...
                }
            });
        };
        const getLaporan = async () => {
            const unsubscribe = await onSnapshot(
                laporanCollectionRef,
                { includeMetadataChanges: true },
                (snapShot) => {
                    const laporans = [];
                    snapShot.docChanges().forEach((change) => {
                        if (change.type === 'added') {
                            console.log('data baru: ', change.doc.data());
                        }

                        const source = snapShot.metadata.fromCache
                            ? 'local cache'
                            : 'server';
                        console.log('data dari ' + source);
                        laporans.push(change.doc.data());
                    });
                    console.log(laporans);
                    setDataLaporan(laporans);
                }
            );
        };

        // Sub

        getLaporan();
    }, []);

    useEffect(() => {
        // const user = AuthService.getCurrentUser();
        // UserService.getAllLaporan().then(
        //     (response) => {
        //         const data = response.data.data;
        //         console.log(data);
        //         setDataLaporan(data);
        //     },
        //     (error) => {
        //         console.log('Private page', error.response);
        //     }
        // );
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-lg-10 col-lg-push-1">
                    <h1>
                        Laporan <small>Harian tes</small>
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
