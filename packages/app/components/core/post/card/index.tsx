import React, { useMemo, useState } from 'react'
import { Box, Column, Flex, Pressable, Row, View, ScrollView, List } from 'native-base'
import { PostCardHeader } from './header'
import { PostCardContent } from './content'
import { PostCardMedia } from './media'
import { PostCardActions } from './actions'
import { PostCardFooter } from './footer'
import { Modal, FormControl, Input, Button, Center, VStack, Text } from 'native-base'
import Entypo from '@expo/vector-icons/Entypo'
import { CommentsList } from '../../comments/list'
import { CreateComment } from '../../comments/create-comment'
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
        <Row mx={8} >  {media.length > 0 && <PostCardMedia media={media} />} </Row>
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
          height: "50%",
          top: "27%",
          right: "5%"
        }}
        _backdrop={{
          _dark: {
            bg: "coolGray.500"
          },
          bg: "#3ABEFE"

        }}>
        <Flex direction='row'>

          <Modal.Body bg="#1A2235" height={800} width={1000} px={0} my={0}>

            <Column flex={1} width="100%" height="150%">
              {/* <ScrollView maxW="1000" h="90" _contentContainerStyle={{
                width: "100%",
                height: "150%",
                minW: "300",

              }}> */}
              <Column top={2}>
                <PostCardHeader
                  showOptions={showOptions}
                  onRemoveButtonPressed={() => onRemoveButtonPressed(id)}
                  {...author}
                  createdAt={createdAt}


                />
                <Modal.CloseButton />
                <Column left={5} width={900} height={100}>

                  <Row top={2}>  {content != '' ? <PostCardContent content={content} /> : <Box py={0.2} />} </Row>
                  <Row left={45} top={4} px={2}> {media.length > 0 && <PostCardMedia media={media} />}


                  </Row>

                  <Column top={4}>
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
                  </Column>
                </Column>
              </Column>
              {/* </ScrollView> */}
            </Column>

          </Modal.Body>

        </Flex>

      </Modal>

    </Column >
  )
}

