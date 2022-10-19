import React from 'react';
const Common =(props)=> {
    return (
        <>
        <section id="header" >
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>
                                
                                <strong className="brand-name" >Welcome to HR</strong>
                                {props.name}
                            </h1>
                            <h2 className="my-3">
                                Team Work makes the dream work
                            </h2>
                            <div className="mt-3">
                                <a href= {props.visit} className="btn-get-started">
                                    {props.btname}
                                </a>
                            </div>
                          </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="common img" style={{height:"500px",width:"600px"}}  />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Common;