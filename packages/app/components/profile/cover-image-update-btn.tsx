import { CameraIcon } from 'app/assets/icons/camera-icon'
import { IconButton } from 'native-base'
import React from 'react'

type CoverImageUpdateButtonProps = {
  onPress?: () => void
}

function CoverImageUpdateButton({ onPress }: CoverImageUpdateButtonProps) {
  return (
    <IconButton
      onPress={onPress}
      width="8"
      height="8"
      bottom={12}
      left={12}
      borderRadius={50 / 2}
      size={8}
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

export default CoverImageUpdateButton
