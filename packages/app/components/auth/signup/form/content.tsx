import {
  FormikAgeInputField,
  FormikFullnameInputField,
  FormikUsernameInputField,
  FormikGenderInputField,
  FormikEmailInputField,
  FormikPasswordInputField,
} from 'app/components/core/formik'
import { Column, Text, Spacer } from 'native-base'

export function SignUpFormContent() {
  return (

    <Column >
      <FormikFullnameInputField />
      <Spacer h={1} />
      <FormikUsernameInputField />
      <Spacer h={1} />
      <FormikAgeInputField />
      <Spacer h={1} />
      <FormikGenderInputField />
      <Spacer h={1} />
      <FormikEmailInputField />
      <Spacer h={1} />
      <FormikPasswordInputField />
    </Column>


  )
}
