import React from "react";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                        <div className="card border-3">
                            <div className="card-body p-5">
                                <img
                                    src="assets/images/logo-icon.png"
                                    className="mb-4"
                                    width={45}
                                    alt
                                />
                                <h4 className="fw-bold">Get Started Now</h4>
                                <p className="mb-0">
                                    Enter your credentials to login your account
                                </p>
                                <div className="row g-3 my-4">
                                    <div className="col-12 col-lg-6">
                                        <button className="btn btn-light py-2 font-text1 fw-bold d-flex align-items-center justify-content-center w-100">
                                            <img
                                                src="assets/images/icons/google-2.png"
                                                width={18}
                                                className="me-2"
                                                alt
                                            />
                                            Log In with Google
                                        </button>
                                    </div>
                                    <div className="col col-lg-6">
                                        <button className="btn btn-light py-2 font-text1 fw-bold d-flex align-items-center justify-content-center w-100">
                                            <img
                                                src="assets/images/icons/apple-logo.png"
                                                width={18}
                                                className="me-2"
                                                alt
                                            />
                                            Log In with Apple
                                        </button>
                                    </div>
                                </div>
                                <div className="separator section-padding">
                                    <div className="line" />
                                    <p className="mb-0 fw-bold">OR</p>
                                    <div className="line" />
                                </div>
                                <div className="form-body mt-4">
                                    <form className="row g-3" onSubmit={submit}>
                                        <div className="col-12">
                                            <label
                                                htmlFor="inputEmailAddress"
                                                className="form-label"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label
                                                htmlFor="inputChoosePassword"
                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <div
                                                className="input-group"
                                                id="show_hide_password"
                                            >
                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="mt-1 block w-full"
                                                    autoComplete="current-password"
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <a
                                                    href="javascript:;"
                                                    className="input-group-text bg-transparent"
                                                >
                                                    <i className="bi bi-eye-slash-fill" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckChecked"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckChecked"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            {" "}
                                            <a href="auth-basic-forgot-password.html">
                                                Forgot Password ?
                                            </a>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="text-start">
                                                <p className="mb-0">
                                                    Don't have an account yet?{" "}
                                                    <a href="auth-basic-register.html">
                                                        Sign up here
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end row*/}
            </div>
        </>
    );
}
