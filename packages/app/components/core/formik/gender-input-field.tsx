import { Column, Text } from 'native-base'
import { FormikRadioButton } from './radio-button-input'

export function FormikGenderInputField() {
  return (
    <Column py={2} mb={2}>
      <Text color="#556080" bold >
        Gender
      </Text>
      <FormikRadioButton
        name="gender"
        items={['Male', 'Female', 'Other']}
        placeholder="Select Gender"
      />
    </Column>
  )
}
