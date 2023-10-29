import { zodResolver } from '@hookform/resolvers/zod'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Form, Input } from 'antd'

import { CHARACTER_INFO, CHARACTER_INFO_KEYS } from '@/constants/components'
import { vRequiredString } from '@/helpers/validations'
import { Person } from '@/types/store'

import styles from './styles.module.scss'

const FormSchema = z.object({
  name: vRequiredString.min(3, 'Min name length 3').max(50, 'Max name length 100'),
  height: vRequiredString,
  mass: vRequiredString,
  hairColor: vRequiredString,
  skinColor: vRequiredString,
  eyeColor: vRequiredString,
  birthYear: vRequiredString,
  gender: vRequiredString,
  homeworld: vRequiredString,
})
export type FormSchema = z.infer<typeof FormSchema>

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /* Form default values */
  defaultValues?: Partial<Person>
  /* On Cancel callback */
  onCancel: () => void
  /* On Submit callback */
  onSubmitForm: (formData: FormSchema) => void
}

export default function CharacterForm({ defaultValues = {}, onCancel, onSubmitForm, className, ...otherProps }: Props) {
  const { control, handleSubmit } = useForm<FormSchema>({
    defaultValues,
    resolver: zodResolver(FormSchema),
  })

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }

  function handleCancel(event: MouseEvent) {
    event.preventDefault()
    onCancel && onCancel()
  }

  return (
    <div {...otherProps} className={className}>
      <Form {...formItemLayout} className={styles.CharacterForm} onFinish={handleSubmit(onSubmitForm)}>
        {CHARACTER_INFO_KEYS.map((fieldKey) => (
          <Controller
            key={fieldKey}
            name={fieldKey}
            control={control}
            render={({ field, fieldState }) => (
              <Form.Item
                label={CHARACTER_INFO[fieldKey]}
                help={fieldState.error?.message}
                validateStatus={fieldState.error?.message ? 'error' : ''}
              >
                <Input {...field} />
              </Form.Item>
            )}
          />
        ))}

        <div className={styles.CharacterForm__Buttons}>
          <Button className="mr-20" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}
