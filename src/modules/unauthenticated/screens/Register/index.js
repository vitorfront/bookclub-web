import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { registerCall } from 'services/api/requests'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  const Toast = useToast()
  const mutation = useMutation((newUser) => registerCall(newUser), {
    onError: (error) => {
      Toast({
        title: 'Falha ao criar a conta.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      Toast({
        title: 'Conta criada com sucesso.',
        status: 'success',
        duration: 7000,
        isClosable: true
      })
      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      Password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve ter ao menos 3 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres')
        .required('Senha é obrigatório.'),
      confirmpassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres')
        .required('Confirmar a senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            mt="24px"
            placeholder="Nome completo"
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="16px"
            placeholder="E-mail"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="16px"
            placeholder="Senha"
          />
          <Input.Password
            id="confirmpassword"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            error={errors.confirmpassword}
            mt="16px"
            placeholder="Confirmar Senha"
          />

          <Button
            isLoading={mutation.isLoading}
            mb="12px"
            mt="24px"
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt="8px"
            text="Já possui uma conta?"
            actionText="Faça login aqui"
          />
        </Flex>
      </Flex>

      <Flex
        w={['0%', '0%', '0%', '0%', '60%']}
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
