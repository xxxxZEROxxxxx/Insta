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






const SigninForm = () => {

  const form = useForm<z.infer<typeof SiginValidation>>({
    resolver: zodResolver(SiginValidation),
    defaultValues: {
      name:"",
      username: "",
      email:"",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SiginValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
   
       <Form {...form}>
        <div className="sm:w-420 flex items-center justify-center flex-col">
<img src="/assets/imaga\es" alt="" />
        </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
   
  )
}

export default SigninForm