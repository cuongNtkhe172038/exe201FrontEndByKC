import React, { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string | { message: string }
    classNameInput?: string
    classNameError?: string
    register?: UseFormRegister<any>
    rules?: RegisterOptions
}
export default function Input({
    type, errorMessage, placeholder, className, name, register, rules, autoComplete,
    classNameInput = "p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",
    classNameError = "mt-1 text-red-600 min-h-[1.5rem] text-sm" }: Props) {
    const displayErrorMessage = typeof errorMessage === 'object' ? errorMessage.message : errorMessage;
    const registerResult = name && register ? register(name, rules) : {}
    return (
        <div className={className}>
            <input type={type} {...registerResult} placeholder={placeholder} autoComplete={autoComplete} className={classNameInput} />
            <div className={classNameError}>{displayErrorMessage}</div>

        </div>
    )
}
