import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        paddingLeft="112px"
        flexDir="column"
        w="40%"
        h="100%"
      >
        <Flex flexDir="column" w="416px">
          <Image
            src="/img/logobook.svg"
            alt="BookClub Logo"
            w="160px"
            h="48px"
          />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input mt="24px" placeholder="email@exemplo.com" />
          <Input.Password mt="16px" placeholder="*********" />
          <Flex
            mt="8px"
            w="100%"
            alignItems="fle-end"
            justifyContent="flex-end"
          >
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="24px">Login</Button>
          <Link.Action
            mt="48px"
            text="Não possui uma conta?"
            actionText="Cadastra-se aqui"
          />
        </Flex>
      </Flex>

      <Flex
        w="60%"
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
