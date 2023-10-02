export default function (plop) {
  plop.setGenerator('component', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Where is the path to create components? (e.g. components)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name? (e.g. button)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '.plop/component.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: './src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: '.plop/component.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/component.stories.tsx.hbs',
      },
    ],
  })
}