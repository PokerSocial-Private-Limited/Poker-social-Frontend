import { Column, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

import SiteLogo from '../../../core/site-logo'

export function LoginFormHeader() {
  return (
    <Column my={2} safeAreaTop alignItems="center" space={20}>
      <SolitoLink href="/login">
        <SiteLogo height={57} width={341} />
      </SolitoLink>
      <Text fontFamily="heading" color="white" fontSize="2xl" py={8}>
        SIGN IN
      </Text>
    </Column>
  )
}
