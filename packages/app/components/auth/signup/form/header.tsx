import { Column, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

import SiteLogo from '../../../core/site-logo'

export function SignUpFormHeader() {
  return (
    <Column safeAreaTop alignItems="center" my={2} space={20} >
      <SolitoLink href="/login">
        <SiteLogo height={57} width={341} />
      </SolitoLink>
      <Text fontFamily="heading" color="white" fontSize="2xl" py={4}>
        SIGN UP
      </Text>
    </Column>
  )
}
