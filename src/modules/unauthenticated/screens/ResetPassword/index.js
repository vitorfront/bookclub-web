import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const toast = useToast()

  const mutation = useMutation((data) => resetPasswordCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha na requisição.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha alterada com sucesso!.',
        status: 'success',
        duration: 4000,
        isClosable: true
      })

      navigate('/')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, 'Token deve conter 6 caracteres.')
        .required('Token é obrigatório.'),

      password: Yup.string()
        .min(6, 'Senha deve ter ao menos 6 caracteres')
        .required('Senha é obrigatório.'),
      confirmpassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter ao menos 6 caracteres')
        .required('Confirmar a senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não são iguais')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            mt="24px"
            placeholder="Ex: 000000"
            maxLength={6}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="24px"
            placeholder="Nova senha"
          />
          <Input.Password
            id="confirmpassword"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            error={errors.confirmpassword}
            mt="24px"
            placeholder="Confirmar nova senha"
          />

          <Button
            isLoading={mutation.isLoading}
            mb="12px"
            mt="24px"
            onClick={handleSubmit}
          >
            Salvar
          </Button>
          <Link.Action
            mt="8px"
            text="Não recebeu o código?"
            actionText="Clique aqui para reenviar"
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
