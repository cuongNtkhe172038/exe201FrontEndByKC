import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup';
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRule= (getValue?:UseFormGetValues<any>):Rules  => ({
    email: {
        required: { value: true, message: "Email is require" },
        minLength: { value: 6, message: "Email need more than 6 character" },
        maxLength: { value: 150, message: "Email need less than 150" },
        pattern: { value: /^\S+@\S+\.\S+$/, message: "Email need right validate" }
    },
    password: {
        required: { value: true, message: "Password is require" },
        minLength: { value: 6, message: "Password need more than 6 character" },
        maxLength: { value: 150, message: "Password need less than 150" },
    },
    confirm_password: {
        required: { value: true, message: "Confirm password pls!" },
        validate:typeof getValue === 'function' ? ((value) => value=== getValue("password") || "Nhập lại pass không khớp") : undefined
    },
})
function tesstPriceMinMax(this:yup.TestContext<yup.AnyObject>){
    const {price_min,price_max} = this.parent as {price_min:string;price_max:string}
    if(price_min !== "" && price_max !=="" ){
        return Number(price_max) >= Number(price_min)
    }
    return price_min !=="" || price_max !== ""
}
export const schema = yup.object({
    email: yup.string().required("Email is require").email("Email need right validate").min(5, { message: "Must be 5 or more characters long" })
    .max(150, { message: "Email need less than 150" }),
    password: yup.string().required("Password is require").min(6, { message: "Password need more than 6 character" })
    .max(150, { message: "Password need less than 150" }),
    confirm_password:yup.string().required("Confirm password pls!").oneOf([yup.ref("password")],"Nhập lại pass không khớp"),
    price_min:yup.string().test({
        name:"price-not allowed",
        message: "Price invalided",
        test: tesstPriceMinMax
    }),
    price_max:yup.string().test({
        name:"price-not allowed",
        message: "Price invalided",
        test: tesstPriceMinMax
    }),
    name:yup.string().required("Tên sp là bắt buộc").trim()
});

export  type Schema = yup.InferType<typeof schema>;