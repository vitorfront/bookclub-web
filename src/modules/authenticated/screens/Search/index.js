import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookList, AuthorList } from 'components'
import { useState } from 'react'
import { searchQuery } from 'services/api/requests'
import { useQuery } from 'react-query'

export const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const { data, isLoading } = useQuery(
    ['search', query],
    () => searchQuery(query),
    {
      enabled: query.length >= 3
    }
  )

  console.log({ data })

  return (
    <Flex flexDir="column">
      <NavBar query={query} setQuery={setQuery} />
      <Flex
        flexDir="column"
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
        mt={['24px', '48px']}
        w="100%"
        maxW="100vw"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex paddingX={['24px', '48px', '80px', '112px']}>
          <Text.ScreenTitle>Resultados da Pesquisa</Text.ScreenTitle>
        </Flex>

        <Flex w="100%" alignItems="flex-start" justifyContent="flex-start">
          <BookList
            title="Livros"
            data={data?.data?.books}
            isLoading={isLoading}
          />
        </Flex>
        <Flex w="100%" alignItems="flex-start" justifyContent="flex-start">
          <AuthorList data={data?.data?.authors} isLoading={isLoading} />
        </Flex>
      </Flex>
    </Flex>
  )
}
