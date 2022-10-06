import React from 'react';

export default function TableComp() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                Laporan
                <a
                    type="button"
                    className="btn btn-xs btn-primary pull-right myTooltip"
                    href="https://simanta.umm.ac.id/~pkn_prod/index.php/laporan?action=add"
                    title="Buat baru"
                >
                    <i className="fa fa-plus-circle"></i> Tambah
                </a>
            </div>
            <div className="panel-body">
                <div className="table-responsive">
                    <div
                        id="dataTables-laporan_wrapper"
                        className="dataTables_wrapper form-inline no-footer"
                    >
                        <div className="row">
                            <div className="col-sm-6">
                                <div
                                    className="dataTables_length"
                                    id="dataTables-laporan_length"
                                >
                                    <label>
                                        <select
                                            name="dataTables-laporan_length"
                                            aria-controls="dataTables-laporan"
                                            className="form-control input-sm"
                                        >
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>{' '}
                                        records per page
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    id="dataTables-laporan_filter"
                                    className="dataTables_filter"
                                >
                                    <label>
                                        Search:
                                        <input
                                            type="search"
                                            className="form-control input-sm"
                                            placeholder=""
                                            aria-controls="dataTables-laporan"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-bordered dataTable no-footer">
                            <thead>
                                <tr role="row">
                                    <th
                                        className="sorting_asc"
                                        tabindex="0"
                                        aria-controls="dataTables-laporan"
                                        rowspan="1"
                                        colspan="1"
                                        aria-sort="ascending"
                                        aria-label="NO: activate to sort column ascending"
                                        style={{ width: '55px' }}
                                    >
                                        NO
                                    </th>
                                    <th
                                        className="sorting"
                                        tabindex="0"
                                        aria-controls="dataTables-laporan"
                                        rowspan="1"
                                        colspan="1"
                                        aria-label="Kegiatan: activate to sort column ascending"
                                        style={{ width: '1269px' }}
                                    >
                                        Kegiatan
                                    </th>
                                    <th
                                        className="sorting"
                                        tabindex="0"
                                        aria-controls="dataTables-laporan"
                                        rowspan="1"
                                        colspan="1"
                                        aria-label="Tanggal: activate to sort column ascending"
                                        style={{ width: '170px' }}
                                    >
                                        Tanggal
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="gradeX odd" role="row">
                                    <input
                                        type="hidden"
                                        name="id"
                                        value="36134"
                                    />
                                    <td className="sorting_1">1</td>
                                    <td>pembukaan Internship Batch 4</td>{' '}
                                    <td>04-01-2021</td>{' '}
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-sm-6">
                                <div
                                    className="dataTables_info"
                                    id="dataTables-laporan_info"
                                    role="status"
                                    aria-live="polite"
                                >
                                    Showing 1 to 10 of 20 entries
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="dataTables-laporan_paginate"
                                >
                                    <ul className="pagination">
                                        <li
                                            className="paginate_button previous disabled"
                                            aria-controls="dataTables-laporan"
                                            tabindex="0"
                                            id="dataTables-laporan_previous"
                                        >
                                            <a href="#">Previous</a>
                                        </li>
                                        <li
                                            className="paginate_button active"
                                            aria-controls="dataTables-laporan"
                                            tabindex="0"
                                        >
                                            <a href="#">1</a>
                                        </li>
                                        <li
                                            className="paginate_button "
                                            aria-controls="dataTables-laporan"
                                            tabindex="0"
                                        >
                                            <a href="#">2</a>
                                        </li>
                                        <li
                                            class="paginate_button next"
                                            aria-controls="dataTables-laporan"
                                            tabindex="0"
                                            id="dataTables-laporan_next"
                                        >
                                            <a href="#">Next</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a
                            id="modal-delete>"
                            href="#modal-container-delete"
                            title="Hapus Data"
                            className="btn btn-danger btn-sm myTooltip"
                            data-toggle="modal"
                        >
                            <i className="fa fa-trash-o"></i> Hapus
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
