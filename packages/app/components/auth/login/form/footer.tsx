import { Center, Row, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

export function LoginFormFooter() {
  return (
    <Center >
      <Row >
        <Text fontSize="xs" fontWeight="medium" >
          By creating an acount you accept our{' '}
        </Text>

        <SolitoLink href="/terms">
          <Text color="#3ABEFE" font-family='RussoOne-Regular' fontSize="xs" fontWeight="medium" underline>
            Terms & Conditions
          </Text>
        </SolitoLink>
      </Row>
    </Center>
  )
}
