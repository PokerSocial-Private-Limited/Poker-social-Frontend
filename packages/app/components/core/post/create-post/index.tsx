import { CreatePostInfo } from './create-post-info'
import { useCreatePostMutation } from 'app/generates'
import { useAuth } from 'app/hooks/auth'
import { Box, Image, Spacer, useToast } from 'native-base'
import { useState } from 'react'
import { useRouter } from 'solito/router'
import { useEventDispatch } from 'app/hooks/event'
// import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
// import { ImageInfo } from 'expo-image-picker/build/ImagePicker'
import { generateRNFile } from 'app/utils/file'
import { CreatePostHeader } from './create-post-header'
import { CreatePostActions } from './create-post-action'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'
import { Keyboard } from 'react-native'

export function CreatePost() {
  const { user } = useAuth()

  const router = useRouter()
  const dispatch = useEventDispatch()

  const [textAreaValue, setTextAreaValue] = useState('')
  const [image, setImage] = useState<any | null>(null)

  const [{ fetching }, createPost] = useCreatePostMutation()

  async function onPostCreateHandler() {
    if (!textAreaValue && !image) {
      return showSuccessToast("Can't create empty post")
    }

    Keyboard.dismiss()

    try {
      const images: any[] = []

      if (image) {
        const imageName = image.uri.split('/').pop()
        if (!imageName) {
          throw new Error('Image name is empty')
        }
        images.push(generateRNFile(image.uri, imageName, image.type ?? 'image'))
      }

      // Calling API to create post
      const res = await createPost({
        content: textAreaValue,
        media: images,
      })
      if (res.error) {
        throw res.error
      }

      // Redirect back to home page
      dispatch('home-posts-refresh', {})
      router.back()
      showSuccessToast('Post created successfully')
    } catch (err) {
      showErrorToast(err.message)
    }
  }

  return (
    <>
      <CreatePostHeader
        onPostCreate={onPostCreateHandler}
        isLoading={fetching}
      />
      <CreatePostInfo
        name={user!?.username}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
      {image && (
        <Box px={4}>
          <Image
            borderRadius={8}
            source={{ uri: image.uri }}
            w="full"
            style={{
              aspectRatio: image.width / image.height,
            }}
            alt="selected-image"
          />
        </Box>
      )}
      <Spacer />
      <CreatePostActions image={image} setImage={setImage} />
    </>
  )
}

/* <Video
  style={{
    height: 300,
    borderRadius: 8,
  }}
  useNativeControls={false}
  shouldPlay={true}
  resizeMode={Video.RESIZE_MODE_CONTAIN}
  source={{ uri: image.uri }}
/> */
