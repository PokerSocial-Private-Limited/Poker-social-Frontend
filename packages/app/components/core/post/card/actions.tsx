import React, { useState } from 'react'
import { Row, IconButton, Text } from 'native-base'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useEvent, useEventDispatch } from 'app/hooks/event'

type PostCardActionsProps = {
  postId: string
  isLiked: boolean
  activity: {
    likesCount: number
    commentsCount: number
  }
  onLikePressed: (isLiked: boolean) => void
  onCommentPressed: () => void
}

export function PostCardActions({
  activity,
  onLikePressed,
  onCommentPressed,
  postId,
  ...props
}: PostCardActionsProps) {
  const [isLiked, setIsLiked] = useState(props.isLiked)
  const [likesCount, setLikesCount] = useState(activity.likesCount)

  const dispatch = useEventDispatch()

  function setCount(isLiked: boolean) {
    if (isLiked) {
      setLikesCount(likesCount + 1)
    } else {
      setLikesCount(likesCount - 1)
    }
  }

  useEvent('post-like-' + postId, onLikeEvent)

  function onLikeEvent(isLiked: boolean) {
    setIsLiked(isLiked)
    setCount(isLiked)
  }

  return (
    <Row justifyContent="space-between" px={12} pt={2} left={2} right={12}>
      <Row alignItems="center" space={1}>
        <IconButton
          onPress={() => {
            dispatch('post-like-' + postId, !isLiked)
            onLikePressed(!isLiked)
          }}
          icon={
            <AntDesign
              name={isLiked ? 'like1' : 'like2'}
              size={18}
              color={isLiked ? '#3ABEFE' : 'white'}
            />
          }
          p={1}
        />
        <Text color={likesCount != 0 ? '#A5AFCE' : 'transparent'} fontSize="xs">
          {likesCount}
        </Text>
      </Row>

      <Row alignItems="center" space={1}>
        <IconButton
          onPress={onCommentPressed}
          icon={<Ionicons name="chatbubble-outline" size={18} color="white" />}
          p={1}
          _pressed={{ bg: 'transparent' }}
          _hover={{ bg: 'transparent' }}
        />

        <Text color="#A5AFCE" fontSize="xs">
          {activity.commentsCount}
        </Text>
      </Row>

      <Row alignItems="center" space={1}>
        <IconButton
          icon={<FontAwesome5 name="share" size={18} color="white" />}
          p={1}
        />
        <Text fontSize="xs" color="#A5AFCE">
          Share
        </Text>
      </Row>
    </Row>
  )
}
