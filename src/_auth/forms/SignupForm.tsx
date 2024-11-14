
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SiginValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appWrite/api"







const SignupForm = () => {
  const isLoading = false;

  const form = useForm<z.infer<typeof SiginValidation>>({
    resolver: zodResolver(SiginValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SiginValidation>) {
    try {
        const newUser = await createUserAccount(values);
        console.log(newUser);
    } catch (error) {
        console.error("Error creating user:", error); 
    }
}
  return (

    <Form {...form}>
      <div className="w-full sm:w-420 flex flex-col justify-center items-center">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-1">Create anew account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2 ">To use Snapgram enter your account details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col  mt-2 w-full  ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input"  {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input"  {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input"  {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input"  {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (<div className="flex-center gap-2">
            <Loader /> Loading...
          </div>) : "Sign up"}</Button>
          <p className="text-small-regular text-light-2 text-center mt-2">Already have an account? 
            <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1 " > Log in</Link>
          </p>
        </form>
      </div>
    </Form>

  )
}

export default SignupForm