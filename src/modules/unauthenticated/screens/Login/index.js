import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export const LoginScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      Password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.'),
      Password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres')
        .required('Senha é obrigatório.')
    }),
    onSubmit: (data) => {
      console.log({ data })
    }
  })

  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems={['center', 'flex-start']}
        justifyContent="center"
        padding={['24px', '48px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Image
            src="/img/logobook.svg"
            alt="BookClub Logo"
            w="160px"
            h="48px"
          />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            id="email"
            name="email"
            values={values.email}
            onChange={handleChange}
            mt="24px"
            placeholder="email@exemplo.com"
            error={errors.email}
          />
          <Input.Password
            id="Password"
            name="Password"
            values={values.Password}
            onChange={handleChange}
            mt="16px"
            placeholder="*********"
            error={errors.Password}
          />
          <Flex
            mt="8px"
            w="100%"
            alignItems="fle-end"
            justifyContent="flex-end"
          >
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu sua senha?
            </Link>
          </Flex>
          <Button onClick={handleSubmit} mb="12px" mt="24px">
            Login
          </Button>
          <Link.Action
            onClick={() => navigate('/cadastro')}
            mt="8px"
            text="Não possui uma conta?"
            actionText="Cadastra-se aqui"
          />
        </Flex>
      </Flex>

      <Flex
        w={['0%', '0%', '0%', '60%']}
        h="100%"
        backgroundImage="url('/img/imgbook.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
