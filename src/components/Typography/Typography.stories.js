import { Typography } from '.'

export default {
  title: 'Components/Typography',
  argTypes: {
    children: 'Sample text',
    color: {
      options: ['primary', 'secondary', 'grayscale'],
      control: {
        type: 'select'
      }
    },
    colorWeight: {
      options: ['darker', 'main', 'lighter', '100'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    bold: {
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template = (args) => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Sample text',
  colorWeight: 'main',
  color: 'primary',
  size: 'medium',
  bold: false
}
