import React from 'react';

export default function Portfolio() {
    return (
        <section id="about-us" className="container">
            <div className="row" id="meet-the-team">
                <div className="col-sm-3">
                    <div className="center">
                        <p>
                            <img
                                className="img-responsive img-thumbnail img-circle"
                                src="http://krs.umm.ac.id/Poto/2018/201810370311005.JPG"
                                alt=""
                                style={{ width: '200px' }}
                            />
                        </p>
                        <h5>
                            AYUB MAULANA
                            <small className="designation muted">
                                201810370311005
                            </small>
                        </h5>
                        <p>Pendidikan :</p>
                        <p>SDN 013 BATU SOPANG</p>
                        <p>SMPN 1 BATU SOPANG</p>
                        <p>SMK BUDI UTOMO </p>
                        <a
                            id="ganti_pass_btn"
                            href="#a"
                            className="btn btn-info btn-block"
                        >
                            Ubah Password
                        </a>
                    </div>
                </div>
                <div className="col-sm-9">
                    <form className='form-horizontal'>
                        <input
                            type="hidden"
                            name="nim"
                            id="nim"
                            // value="201810370311005"
                        />
                        <div className="form-group">
                            <div className="col-sm-7">
                                <center>
                                    <label
                                        // for="Riwayat Pendidikan"
                                        className="control-label"
                                    >
                                        Bidang Minat
                                    </label>
                                </center>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <select name="bidang_minat" className="form-control" style={{height:"35px"}} required="">
                                    <option value="rpl">RPL</option>
                                    <option value="gamecerdas">GAME CERDAS</option>
                                    <option value="rpl">REKAYASA PERANGKAT LUNAK</option>
                                    <option value="skj">SISTEM KEAMANAN JARINGAN</option>
                                    <option value="data science">DATA SCIENCE</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <center>
                                    <label
                                        // for="Riwayat Pendidikan"
                                        className="control-label"
                                    >
                                        Data Mahasiswa
                                    </label>
                                </center>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="alamat" name="alamat" placeholder="(required) Alamat" value="JL.TIRTO UTOMO GANG 5, KEC.DAU ,KAB.MALANG ,JAWA TIMUR" required=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="email" name="email" placeholder="(required) E-Mail" value="ayubmaulana@webmail.umm.ac.id" required=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="telp" name="telp" placeholder="(required) Telepon" value="081216444924" required=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="tempat_lhr" name="tempat_lhr" placeholder="(required) Tempat Tanggal Lahir" value="BALIKPAPAN" required=""/>
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control datepicker tanggal" id="tgl_lahir" name="tgl_lahir" placeholder="(required) Tanggal lahir" value="22-05-1999" required=""/>
                                {/* <input type="text" className="form-control datepicker tanggal" name="tgl_laporan" placeholder="Tanggal Mulai" required/> */}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <center><label for="Riwayat Pendidikan" className="control-label">Riwayat Pendidikan</label></center>
                            </div>
                            <div className="col-sm-5">
                                <center><label for="Riwayat Pendidikan" className="hidden-xs control-label"><center>Tahun</center></label></center>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="sd" name="sd" placeholder="(required) SD/MI" value="SDN 013 BATU SOPANG" required=""/>
                            </div>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" id="tahun_sd" name="tahun_sd" placeholder="(required) Tahun Lulus" value="2011" required=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="smp" name="smp" placeholder="(required) SMP/MTS" value="SMPN 1 BATU SOPANG" required=""/>
                            </div>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" id="tahun_smp" name="tahun_smp" placeholder="(required) Tahun Lulus" value="2014" required=""/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="sma" name="sma" placeholder="(required) SMA/SMK/MA" value="SMK BUDI UTOMO " required=""/>
                            </div>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" id="tahun_sma" name="tahun_sma" placeholder="(required) Tahun Lulus" value="2017" required=""/>
                            </div>
                        </div>
                        <div className="form-group" style={{marginTop : '50px'}}>
                            <div className="col-sm-12">
                                <input type="submit" name="submit" className="btn btn-primary" value="Submit"/>
                                &nbsp;&nbsp;<label>Harap Melakukan submit terlebih dahulu sebelum menambah keahlian</label>
                            </div>
                            <div className="col-sm-7">
                            </div>
                        </div>
                        <div className="form-group" style={{marginTop : '50px'}}>
                            <div className="col-sm-7">

                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-7">
                                <center><label className="control-label">Portofolio</label></center>
                            </div>
                            <div className="col-sm-5">
                                <center><label className="hidden-xs control-label"><center>Tahun</center></label></center>
                            </div>
                        </div>
                        <a id="modal-add-portofolio" href="#modal-container-add-portofolio" role="button" class="btn" data-toggle="modal" style={{color : 'dodgerblue'}}><i class="fa fa-plus"></i> Tambah Portofolio</a>

                    </form>
                </div>
            </div>
            <div className="form-horizontal col-sm-9 col-sm-offset-3">
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="col-sm-7">
                                        <input disabled="" type="text" class="form-control" placeholder="Nama Project" value="Front-end developer"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <input disabled="" type="text" class="form-control" placeholder="Tahun Pengerjaan" value="2021"/>
                                        <input type="hidden" class="form-control" name="tahun_keahlian_6867" value=""/>
                                    </div>
                                    <div className="col-sm-1">
                                        <a type="button" class="btn btn-xs btn-danger pull-right" href="#modal-container-delete-portofolio-6867" role="button" title="Delete" data-toggle="modal" style={{ height:'32px', lineHeight: '25px'}}>
                                            <i class="icon-trash"></i> Hapus
                                        </a>
                                    </div>
                                </div>
                            </div>
            </div>
        </section>
    );
}
