import React from 'react'
import { Input, SearchIcon } from 'native-base'
import { useRouter } from 'solito/router'
import { usePlatform } from 'app/hooks/platform'
import { useState } from 'react'

type SearchBarProps = {
  backgroundColor?: string
  onPress?: () => void
  showSoftInputOnFocus?: boolean
  innerRef?: any
  state?: [string, React.Dispatch<React.SetStateAction<string>>]
  onSearchBlur?: () => void

}

function SearchBar({
  backgroundColor,
  onPress,
  showSoftInputOnFocus = false,
  innerRef,
  state,
  onSearchBlur,

}: SearchBarProps) {
  const router = useRouter()
  const { isDesktop } = usePlatform()

  const [, setSearchText] = state || React.useState('')
  // const [value, setValue] = useState('');
  // const [result, setResult] = useState('');

  // const filter = e => {
  //   const keyword = e.target.value;
  //   if (keyword !== '') {
  //     const results =SeatrchText.filter((user) => {
  //       return user.value.toLowerCase().startsWith(keyword.toLowerCase());

  //     });
  //     setResult(results);
  //   } else {
  //     setValue(keyword);

  //   }


  // };

  const [search, setSearch] = useState('')

  // const searchItem = userData.filter((item) => {
  //   if (search == "") {
  //     return item
  //   }
  //   else if (item.name.toLowerCase().includes(search.toLowerCase())) {
  //     return item
  //   }
  // })


  return (
    <Input
      onBlur={() => onSearchBlur && onSearchBlur()}
      onTouchEndCapture={() => console.log('onTouchEndCapture')}
      ref={innerRef}
      showSoftInputOnFocus={showSoftInputOnFocus}
      flexGrow={1}
      size="lg"
      h={isDesktop ? 43 : 8}
      placeholder="Search"
      placeholderTextColor="white"
      borderRadius={20}
      color="white"
      variant="unstyled"
      backgroundColor={backgroundColor}
      _hover={{ borderColor: 'transparent' }}
      borderWidth="1"
      px={4}
      py={1}
      // onChange={event => setSearch(event.target.value)}

      // value={value}
      // onChange={filter}
      onChangeText={setSearchText}
      InputRightElement={<SearchIcon size="6" mr="2" mt="1" color="white" />}

      onPressIn={() => {
        if (onPress) {
          onPress()
        } else {
          router.push('/search')
        }
      }}

    />
  )
}

export default SearchBar
