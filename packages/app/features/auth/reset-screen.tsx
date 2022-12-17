import React from 'react'
import { ResetForm } from 'app/components/auth/reset/form'
import { Flex } from 'native-base'
import { ImageBackground } from 'react-native'
import { createParam } from 'solito'
import { IMAGES } from 'app/assets/images'

const image = { uri: 'https://i.ibb.co/3mJQcFY/bgmain-3.png' }

type Query = { id: string }

const { useParam } = createParam<Query>()

function ResetScreen() {
  const [id] = useParam('id')

  return (
    <ImageBackground
      source={IMAGES.BackgroundImage}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <Flex flex="1" flexDirection="row" justifyContent="center">
        <ResetForm email={id ?? ''} />
      </Flex>
    </ImageBackground>
  )
}

export default ResetScreen
