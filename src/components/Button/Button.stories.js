import { Button } from '.'

export default {
  title: 'Components/Button',
  argTypes: {
    children: 'Sample text',
    color: {
      options: ['primary', 'secondary', 'grayscale'],
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['contained', 'outlined'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Sample text',
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  fullWidth: false,
  disabled: false
}
