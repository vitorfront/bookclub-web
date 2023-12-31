import { useState } from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <ChakraInput
    h="56px"
    fontSize="16px"
    focusBorderColor="brand.primary"
    {...props}
  />
)

Input.Password = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup
      alignItems="center"
      justifyContent="center"
      display="flex"
      h="56px"
      size="md"
      {...props}
    >
      <Input
        focusBorderColor="brand.primary"
        pr="4.5rem"
        fontSize="16px"
        type={show ? 'text' : 'password'}
        placeholder="*************"
      />
      <InputRightElement h="100%">
        <Button
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          h="1.75rem"
          size="sm"
          onClick={handleClick}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {show ? (
            <ViewOffIcon boxSize="18px" color="brand.primary" />
          ) : (
            <ViewIcon boxSize="18px" color="brand.primary" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

Input.Password.displayName = 'InputPassword'
