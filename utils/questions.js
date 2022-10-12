const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'What are the guidelines for contributing?',
      name: 'contribution',
    },
    {
      type: 'input',
      messagae: 'write tests for your application and provide examples on how to run them here.',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Choose a license for your project:',
      choices: [ "MIT", "Apache 2.0 License", "GNU GLPv2"],
      name: 'license',
    },
    {
      type: 'input',
      message: 'what is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'what is your email address?',
      name: 'email',
    },
  ]

  module.exports = questions