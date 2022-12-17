import {
  FormikConfirmmPassInputField,
  FormikNewPassInputField,
  FormikOtpInputField,
} from 'app/components/core/formik'
import { Column, Spacer } from 'native-base'

export function ResetFormContent() {
  return (
    <Column>
      <FormikOtpInputField />
      <Spacer h={2} />
      <FormikNewPassInputField />
      <Spacer h={2} />
      <FormikConfirmmPassInputField />
    </Column>
  )
}
