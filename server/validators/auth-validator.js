const { z } = require("zod");
const loginSchema = z.object({
    email: z
    .string({ required_error: "email is require" })
    .trim()
.min(3, { message: "email must be at lest of 3 chars." })
        .max(255, { message: "email must not be more than 255  chars." }),
    
    
        password: z
        .string({ required_error: "password is require" })
        .trim()
    .min(7, { message: "password must be at lest of 7 chars." })
    .max(20,{message:"password must not be more than 20  chars."}),
});


//create an object schema
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is require" })
        .trim()
        .min(3, { message: "Name must be at lest of 3 chars." })
        .max(255, { message: "Name must not be more than 255  chars." }),
    
        email: z
            .string({ required_error: "email is require" })
            .trim()
        .min(3, { message: "email must be at lest of 3 chars." })
        .max(255, { message: "email must not be more than 255  chars." }),

        phone: z
            .string({ required_error: "phone is require" })
            .trim()
        .min(10, { message: "phone must be at lest of 10 chars." })
        .max(20, { message: "phone must not be more than 20  chars." }),

        password: z
            .string({ required_error: "password is require" })
            .trim()
        .min(7, { message: "password must be at lest of 7 chars." })
        .max(20,{message:"password must not be more than 20  chars."}),
})

module.exports = {signupSchema,loginSchema};