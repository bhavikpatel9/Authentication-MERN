import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)

        try {
            const response = await fetch("http://localhost:3000/api/auth/signIn", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            // console.log(response)
            const resData = await response.json()
            console.log(resData)

            if(response.ok){
                navigate("/dashboard")
            }

        } catch (error) {
            console.log("error while registering user ", error)
        }

    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
  

                {/* include validation with required or other standard HTML validation rules */}
                <input type='email' placeholder='Enter your email' {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
                <br />

                <input type='password' placeholder='Enter your password' {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 4, message: "Minimum length should be 8" } })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>{errors.password.message}</span>}
                <br />

                <input type="submit" />
            </form>
    </div>
  )
}

export default SignIn
