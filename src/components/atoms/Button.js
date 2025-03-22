import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    borderRadius="16px"
    h="56px"
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    _hover={{
      bg: secondary ? 'brand.greyDark' : 'brand.primary'
    }}
    textColor={secondary ? 'brand.white' : 'brand.black'}
    fontSize="16px"
    {...props}
  >
    {children}
  </ChakraButton>
)
