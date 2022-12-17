import React, { useMemo, useState } from 'react'
import { Box, Column, Flex, Pressable, Row, View, ScrollView } from 'native-base'
import { PostCardHeader } from './header'
import { PostCardContent } from './content'
import { PostCardMedia } from './media'
import { PostCardActions } from './actions'
import { PostCardFooter } from './footer'
import { Modal, FormControl, Input, Button, Center, VStack, Text } from 'native-base'
import Entypo from '@expo/vector-icons/Entypo'
export type PostCardProps = {
  username: string
  id: string
  content?: string
  createdAt: string
  media: { url: string; mimetype: string; hash: string }[]
  author: {
    name?: string
    profileImage?: {
      url: string
      hash: string
    }
    username: string
  }
  activity: {
    likesCount: number
    commentsCount: number
  }
  isLiked: boolean
  recentComments: {
    user: {
      username: string
      profileImage?: {
        hash: string
        url: string
        mimetype: string
      } | null
    }
    content: string
  }[]
  onLikePressed: (postId: string, isLiked: boolean) => void
  onCommentPressed: (postId: string) => void
  onRemoveButtonPressed: (postId: string) => void
}

export function PostCard({
  username,
  id,
  content,
  createdAt,
  media,
  author,
  isLiked,
  activity,
  recentComments,
  onLikePressed,
  onCommentPressed,
  onRemoveButtonPressed,
}: PostCardProps) {
  const showOptions = useMemo(() => username == author.username, [username])
  const [showModal, setShowModal] = useState(false);
  return (
    <Column py={3} bg="#1A2235" space={2}>
      <Row justifyContent="space-between" alignItems="center" px={4}>
        <PostCardHeader
          showOptions={showOptions}
          onRemoveButtonPressed={() => onRemoveButtonPressed(id)}
          {...author}
          createdAt={createdAt}


        />


        {/* <Pressable onPress={() => setIsOpen(true)}>
          <Entypo name="dots-three-horizontal" size={24} color="#A5AFCE" />
        </Pressable> */}
      </Row>

      <View onClick={() => setShowModal(true)} >
        {content != '' ? <PostCardContent content={content} /> : <Box py={0.2} />}
        {media.length > 0 && <PostCardMedia media={media} />}
      </View>
      <PostCardActions
        postId={id}
        isLiked={isLiked}
        activity={activity}
        onLikePressed={(isLiked) => onLikePressed(id, isLiked)}
        onCommentPressed={() => onCommentPressed(id)}
      />
      {recentComments.length > 0 && (
        <PostCardFooter comments={recentComments} />
      )}


      <Modal isOpen={showModal} onClose={() => setShowModal(false)}
        style={{
          width: "100%",
          height: "100%"
        }}
        _backdrop={{
          _dark: {
            bg: "coolGray.600"
          },
          bg: "#3ABEFE"

        }}>
        <Flex direction='row'>

          <Modal.Body bg="#1A2235" height={900} width={1500}>

            <Column flex={1} width="100%">
              <ScrollView maxW="1500" h="100" _contentContainerStyle={{
                width: "100%",
                height: "600%",
                minW: "500"
              }}>
                {content != '' ? <PostCardContent content={content} /> : <Box py={0.2} />}
                {media.length > 0 && <PostCardMedia media={media} />}

                <PostCardActions
                  postId={id}
                  isLiked={isLiked}
                  activity={activity}
                  onLikePressed={(isLiked) => onLikePressed(id, isLiked)}
                  onCommentPressed={() => onCommentPressed(id)}
                />
                {recentComments.length > 0 && (
                  <PostCardFooter comments={recentComments} />
                )}

              </ScrollView>
            </Column>

          </Modal.Body>

        </Flex>
        <Modal.CloseButton />
      </Modal>

    </Column >
  )
}

