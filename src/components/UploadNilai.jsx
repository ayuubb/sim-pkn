import React from 'react';

export default function UploadNilai() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">Upload Nilai [Individu]</div>
            </div>
            <div className="panel-body">
                <form>
                    <input
                        type="file"
                        name="userfile"
                        accept="image/jpeg"
                        required=""
                    />
                    <br />
                    <label style={{color:'red'}}> File Maximum 1024 Kb</label>
                    <br />
                    <label style={{color:'red'}}> File yang diijinkan .jpg</label>
                    <br />
                    <label style={{color:'red'}}>
                        Untuk mengganti dokumen tinggal upload aya file yg baru,
                        sans
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        name="go_upload"
                        className="btn btn-primary"
                    />
                    <a
                        href="https://simanta.umm.ac.id/~pkn_prod/assets/images/laporan/201810370311005.jpeg?uwu90798"
                        data-lightbox="roadtrip"
                        data-title="Scan Nilai Instansi"
                        className="btn btn-default"
                        target="_blank"
                    >
                        <i
                            className="fa fa-check fa-lg"
                            style={{color: '#5cb85c'}}
                        ></i>
                        Lihat Laporan
                    </a>
                </form>
            </div>
        </div>
    );
}
