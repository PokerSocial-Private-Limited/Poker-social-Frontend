import { Row, Button } from 'native-base'
import React, { useState } from 'react'
import SearchBar from '../core/searchbar'
import { AddPostIcon } from 'app/assets/icons/add-post-icon'
import { CreatePostDialog } from './create-post-dialog'

export function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Row p={2} space={2} bg="#121724">
      <SearchBar key="search-bar" />
      {<CreatePostDialog isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Button
        onPress={() => {
          setIsOpen(true)
        }}
        m={0}
        p={0}
        bg="transparent"
        key="add-post"
        _hover={{ bg: 'transparent' }}
        _pressed={{
          bg: 'transparent',
        }}
      >
        <AddPostIcon />
      </Button>
    </Row>
  )
}
