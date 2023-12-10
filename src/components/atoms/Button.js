import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    borderRadius="16px"
    h="56px"
    bg="brand.primary"
    _hover={{
      bg: 'brand.primary'
    }}
    fontSize="16px"
    {...props}
  >
    {children}
  </ChakraButton>
)
