import React, { useMemo } from 'react'
import { Image, View } from 'native-base'
import { Video } from 'expo-av'
import { usePlatform } from 'app/hooks/platform'
// import VideoPlayer from 'expo-video-player'

export type PostCardMediaProps = {
  media: { url: string; mimetype: string; hash: string }[]
}

export function PostCardMedia({ media }: PostCardMediaProps) {
  const { isDesktop } = usePlatform()

  const component = useMemo(() => {
    if (!media.length) {
      return <View />
    }

    const mediaType = media[0]?.mimetype.split('/')[0] ?? ''

    if (mediaType === 'image') {
      return (
        <Image
          source={{
            uri: media[0]!.url,
          }}
          alt="Alternate Text"
          width="100%"
          height={isDesktop ? 547 : 362}
        />
      )
    }

    // else if (mediaType === 'video') {
    //   return (
    //     <Video
    //       source={{
    //         uri: media[0]!.url,
    //       }}
    //       rate={1.0}
    //       volume={1.0}
    //       isMuted={false}
    //     />
    //   )
    // }

    return <View />
  }, [JSON.stringify(media), isDesktop])

  return <>{component}</>
}
