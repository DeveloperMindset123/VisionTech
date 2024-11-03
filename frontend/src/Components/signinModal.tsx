"use client";

import { useState } from "react";

export default function LoginModal() {
  const [modal, showModal] = useState(false);

  return (
    <div className="flex flex-1">
      <span className="aboslute my-2 bg-white rounded-full text-gray-500 border-gray-400 hover:bg-gray-100 p-20 py-5 justify-end">
        <button
          className="text-3xl"
          type="button"
          onClick={() => showModal((prevCheck) => !prevCheck)}
        >
          {
            // add the conditional check
            modal ? (
              <div className="relative z-10 ">
                <div className="fixed inset-0 bg-gray-500 opacity-75 z-10">
                  <div className="fixed inset-set overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center z-10">
                      <div className="flex justify-end">
                        <button type="button">Close</button>
                      </div>
                      <h1>Login</h1>
                      <div>
                        <form>
                          <label>Email Addres</label>
                          <input
                            type="text"
                            placeholder="Enter Your Email..."
                          />
                          <label>Password</label>
                          <input
                            type="text"
                            placeholder="Enter Your Password..."
                          />
                          <button>Sign In</button>
                          <p>Forgot password?</p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              `Sign In`
            )
          }
        </button>
      </span>
    </div>
  );
}
