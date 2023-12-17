import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, { message: "Password must be at least 10 characters" }),
    confirmPassword: z.string().min(1, { message: "Must confirm password." }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <Box>
      <Container as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading textAlign="center" mb="3">
          Register
        </Heading>

        <Stack spacing="3">
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} type="text" />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input {...register("password")} type="password" />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <Input {...register("confirmPassword")} type="password" />
            <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" type="submit" mt="3">
            Submit
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Register;
