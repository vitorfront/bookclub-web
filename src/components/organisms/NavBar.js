import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'
import { UserModal } from './UserModal'

export const NavBar = ({ query, setQuery }) => {
  const onCloseModal = () => {
    setShowModal(null)
  }
  const [showModal, setShowModal] = useState()

  const navigate = useNavigate()
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop={['24px', '48px']}
    >
      <Image
        src="/img/logobook.svg"
        alt="BookClub Logo"
        w={['100px', '160px']}
        h="48px"
        cursor="pointer"
        onClick={() => navigate('/home')}
      />
      <Flex display={['none', 'flex']}>
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
      <UserMenu setShowModal={setShowModal} />

      {showModal === 'user' && <UserModal onClose={onCloseModal} />}
    </Flex>
  )
}
