import Button from 'elements/Button'
import React from 'react'
import IconText from './IconText'

export default function Footer() {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-auto" style={{width: 350}}>
                    <IconText/>
                    <p className="brand-tagline">
                        We kaboom your beauty holiday instantly and memorable.
                    </p>
                </div>
                <div className="col-auto mr-5">
                    <h6 className="mt-2">For Beginners</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">New Account</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/properties">Start booking room</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/payments">Use Payments</Button>
                        </li>
                    </ul>
                </div>
                <div className="col-auto mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="">Our Carreers</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="">Privacy</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="">Terms and Conditions</Button>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h6 className="mt-2">Connect Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="mailto:support@staycation.id" isExternal>support@staycation.id</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="tel:+6285659122410" isExternal>021-2208-2910</Button>
                        </li>
                        <li className="list-group-item">
                            <span>Staycation Indonesia</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col text-center copyright">
                    Copyright 2020 - All rights reserved - Staycation
                </div>
            </div>
        </footer>
    )
}
