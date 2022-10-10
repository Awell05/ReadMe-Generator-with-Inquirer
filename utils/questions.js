const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'How would you describe your project?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the instructions to install your project?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Provide how to use your project:',
      name: 'Usage'
    },
    {
      type: 'input',
      message: 'What are the guidelines for contributing?',
      name: 'Contribution',
    },
    {
      type: 'input',
      messagae: 'Provide test instructions?',
      name: 'Tests',
    },
    {
      type: 'list',
      message: 'Choose a license for your project:',
      choices: ["Academic Free License v3.0","Apache License 2.0", "Artistic license 2.0", "Boost Software License 1.0", "Do What The F*ck You Want To Public License","Edcational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "MIT"],
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