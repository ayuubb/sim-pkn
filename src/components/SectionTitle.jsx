import React from 'react'

export default function SectionTitle({title, route}) {
  return (
    <section id="title" className="emerald" style={{padding: '30px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1>Login</h1>
                </div>
                <div className="col-sm-6">
                    <ul className="breadcrumb pull-right">
                        <li><a href="https://simanta.umm.ac.id/~pkn_prod/">Home</a></li>
                        <li className="active">Login</li>
                    </ul>
                </div>
            </div>
        </div>
    </section> 
  )
}
