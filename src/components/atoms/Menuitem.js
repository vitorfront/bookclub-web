import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'

import { Text } from 'components/atoms'

export const MenuItem = ({ icon, text, divider, onClick }) => (
  <ChakraMenuItem
    h="48px"
    borderBottomWidth={divider ? '1px' : '0px'}
    borderBottomStyle="solid"
    borderBottomColor="brande.greyLight"
    onClick={onClick}
  >
    <Icon mr="8px" color="brand.greyDark" boxSize="18px" as={icon} />
    <Text color="brand.greyDark" size="14px" fontWeight="600">
      {text}
    </Text>
  </ChakraMenuItem>
)
