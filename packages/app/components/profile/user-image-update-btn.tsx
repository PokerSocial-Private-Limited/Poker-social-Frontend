import { CameraIcon } from 'app/assets/icons/camera-icon'
import { IconButton, Image } from 'native-base'
import React from 'react'

type UserImageUpdateButtonProps = {
  onPress?: () => void
}

function UserImageUpdateButton({ onPress }: UserImageUpdateButtonProps) {
  return (
    <IconButton
      onPress={onPress}
      width="8"
      height="8"
      right={3}
      borderRadius={50 / 2}
      size={12}
      bottom={2}
      variant="solid"
      background="#3ABEFE"
      _icon={{
        color: 'red.700',
        size: 'md',
      }}
      _hover={{
        bg: '#007EBB',
      }}
      _pressed={{
        bg: '#3ABEFE',
      }}
    >
      <CameraIcon />
    </IconButton>
  )
}

export default UserImageUpdateButton
