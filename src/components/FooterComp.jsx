import React from 'react'

export default function FooterComp() {
  return (
    <>
    <footer id="footer" className="midnight-blue">
        <div className="container">
            <div className="row" style={{paddingTop: "10px"}}>
                <div className="col-sm-6">
                    © 2013-2022 Informatika UMM powered by <a href="http://brixzen.com" title="Developer">Brixzen.com</a>.
                </div>
                <div className="col-sm-6">
                    <ul className="pull-right">
                        <li><a id="gototop" className="gototop" href="#a">Top <i className="fa fa-chevron-up"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
