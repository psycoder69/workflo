"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState("");

    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const validateForm = () => {
        setIsValid(regex.test(email) && password.length >= 6);
    };

    const handleEmailChange = (event: ChangeEvent <HTMLInputElement>) => {
        let emailValue = event.target.value.replace(/\s/g, '').trim().toLowerCase();

        event.target.value = emailValue;

        setEmail(emailValue);
        validateForm();
    };

    const handlePasswordChange = (event: ChangeEvent <HTMLInputElement>) => {
        let passwordValue = event.target.value.replace(/\s/g, '').trim();

        event.target.value = passwordValue;

        setPassword(passwordValue);
        validateForm();
    };

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const formData = { email, password };

            const response = await fetch("http://127.0.0.1:8080/api/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log(`Form submitted successfully`);
            } else {
                console.log(`Error occured`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("unknown error");
            }
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[36%] max-w-[420px] flex flex-col items-center justify-center border border-slate-200 rounded-lg p-8 bg-white">
                <h1 className="text-[28px] font-semibold">
                    Welcome to <span className="text-indigo-800">Workflo</span>!
                </h1>

                <form
                    onSubmit={handleFormSubmit}
                    className="w-full flex flex-col items-center justify-center gap-4 py-6"
                >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        autoComplete="true"
                        autoFocus
                        onChange={handleEmailChange}
                        className="w-full text-[0.9rem] leading-6 text-gray-600 rounded-lg border border-transparent focus:border-gray-300 bg-gray-100 outline-none p-2" required
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        className="w-full text-[0.9rem] leading-6 rounded-lg border border-transparent focus:border-gray-300 bg-gray-100 outline-none p-2" required
                    />

                    <input
                        type="submit"
                        value="Login"
                        className="w-full text-base text-white rounded-lg border border-transparent cursor-pointer p-2 disabled:opacity-70 disabled:cursor-not-allowed app-button"
                        disabled={!isValid}
                    />
                </form>

                <span className="text-sm text-gray-600">
                    Don&apos;t have an account? Create a <button type="button" className="text-[#0054a1] cursor-pointer" onClick={() => router.push("/signup")}>new account</button>.
                </span>
            </div>
        </main>
    );
};

export default Login;
