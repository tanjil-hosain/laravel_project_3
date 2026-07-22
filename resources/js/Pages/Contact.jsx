import Banner from "@/Parts/Banner";
import Footer from "@/Parts/Footer";
import Nav from "@/Parts/Nav";
import { Form } from "@inertiajs/react";
import React from "react";


export default function Contact() {
    return (
        <>
            <Banner />
            <Nav />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        {/* Form Card Start */}
                        <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5">
                            <div className="text-center mb-4">
                                <h3 className="fw-bold text-dark">
                                    Contact Us
                                </h3>
                                <p className="text-muted small">
                                    আপনার যেকোনো প্রশ্ন থাকলে নিচের ফর্মে লিখে
                                    জানান
                                </p>
                            </div>
                            <Form action="/send" method="POST">
                                {/* Name Input */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label fw-semibold"
                                    >
                                        Your Name
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light text-muted">
                                            <i className="bi bi-person" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="আপনার নাম লিখুন"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Email Input */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label fw-semibold"
                                    >
                                        Email Address
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light text-muted">
                                            <i className="bi bi-envelope" />
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Subject Input */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="subject"
                                        className="form-label fw-semibold"
                                    >
                                        Subject
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light text-muted">
                                            <i className="bi bi-tag" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            placeholder="বিষয় লিখুন"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Message Input */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="form-label fw-semibold"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="আপনার বার্তাটি এখানে লিখুন..."
                                        required
                                        defaultValue={""}
                                    />
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow-sm d-flex justify-content-center align-items-center gap-2"
                                >
                                    <i className="bi bi-send-fill" /> Send
                                    Message
                                </button>
                            </Form>
                        </div>
                        {/* Form Card End */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
