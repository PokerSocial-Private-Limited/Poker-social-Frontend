import { Button, Row, Text } from 'native-base'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

type FacebookLoginButtonProps = {
  onPress?: () => void
}

function FacebookLoginButton({ onPress }: FacebookLoginButtonProps) {
  return (
    <Button
      onPress={onPress}
      bg="brand.fbBtn"
      _hover={{ bg: 'brand.fbBtn' }}
      _pressed={{ bg: 'brand.fbBtn' }}
      borderRadius={8}
    >
      <Row alignItems="center" space={0} >
        <FontAwesome5 name="facebook" size={26} color="white" />
      </Row>
    </Button>
  )
}

export default FacebookLoginButton
