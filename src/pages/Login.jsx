import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function Login() {
    return (
    <>
            <SectionTitle title={"Login"} />
            <section id="registration" class="container" style={{marginBottom: '18px'}}>
                <form class="center">
                    <input type="hidden" name="token" value="4266943e414b46cc6212488558922c1becb7bf28" />
                        <input type="hidden" name="request_form" value="login" />
                            <fieldset class="registration-form">
                                <div class="form-group">
                                    <h3>Form Login</h3>
                                    <hr />
                                </div>
                                <div class="form-group">
                                    <input type="text" id="username" name="username" placeholder="NIM" class="form-control" required="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" id="password" name="password" placeholder="Password" class="form-control" required="" />
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success btn-md btn-block">Login</button>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                </>
                );
}
