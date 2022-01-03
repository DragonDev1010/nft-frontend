function Settings() {
    return(
        <div className="tab-pane fade" id="tab-4" role="tabpanel">
            <div className="row row--grid">
                {/* <!-- details form --> */}
                <div className="col-12 col-lg-6">
                    <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="sign__title">Profile Details</h4>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="username">Username</label>
                                    <input id="username" type="text" name="username" className="sign__input"
                                        placeholder="condrey21"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="email">Email</label>
                                    <input id="email" type="text" name="email" className="sign__input"
                                        placeholder="test@example.com"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="firstname">First Name</label>
                                    <input id="firstname" type="text" name="firstname"
                                        className="sign__input" placeholder="Susa"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="lastname">Last name</label>
                                    <input id="lastname" type="text" name="lastname" className="sign__input"
                                        placeholder="Condrey"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="sign__btn" type="button">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- end details form --> */}

                {/* <!-- socials form --> */}
                <div className="col-12 col-lg-6">
                    <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="sign__title">Socials</h4>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="facebook">Facebook</label>
                                    <input id="facebook" type="text" name="facebook" className="sign__input"
                                        placeholder="https://www.facebook.com/"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="twitter">Twitter</label>
                                    <input id="twitter" type="text" name="twitter" className="sign__input"
                                        placeholder="https://twitter.com/?lang=en"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="firstname">Instagram</label>
                                    <input id="instagram" type="text" name="instagram"
                                        className="sign__input" placeholder="https://www.instagram.com/"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="sign__group">
                                    <label className="sign__label" htmlFor="telegram">Telegram</label>
                                    <input id="telegram" type="text" name="telegram" className="sign__input"
                                        placeholder="t.me/"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="sign__btn" type="button">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- end socials form --> */}
            </div>
        </div>
    )
}

export default Settings