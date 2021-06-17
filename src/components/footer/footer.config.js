export const FORM_INPUTS = {
  firstname: {
    type: 'input',
    fieldName: 'First Name',
    value: '',
    validate: value => value.length > 0,
    statusMsg: "First Name can't be empty.",
  },
  lastname: {
    type: 'input',
    fieldName: 'Last Name',
    value: '',
    validate: value => value.length > 0,
    statusMsg: "Last Name can't be empty.",
  },
  email: {
    type: 'input',
    fieldName: 'Email',
    value: '',
    validate: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    statusMsg: "Please enter a valid Email.",
  },
  phone: {
    type: 'input',
    fieldName: 'Phone',
    value: '',
    validate: value => value.length > 0,
    statusMsg: "Please enter a Phone number."
  },
  comments: {
    type: 'textarea',
    fieldName: 'Comments',
    value: '',
    validate: value => value.length > 0,
    statusMsg: "Please enter a Comment."
  },
};