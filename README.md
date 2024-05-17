# Preset Eslint com suporte a Typescript, React e Prettier

Esse projeto é um preset do Eslint que inclui regras para projetos que utilizam Typescript, React (ou NEXT) e Prettier.

## Instalação

Para instalar esse preset, execute o seguinte comando:

```
pnpm i -D eslint-preset-test

ou

yarn add -D eslint-preset-test
```

## Configuração

Para utilizar esse preset em seu projeto, adicione o seguinte código ao arquivo **.eslintrc.json**:

```
{
  "extends": "eslint-preset-test"
}
```

## Recursos

Esse preset inclui as seguintes configurações:

### Extensões

* **plugin:react/recommended**: inclui as regras recomendadas pelo plugin React.
* **plugin:react-hooks/recommended**: inclui as regras recomendadas pelo plugin React Hooks.
* **plugin:jest/recommended**: inclui as regras recomendadas pelo plugin Jest.
* **airbnb**: inclui as regras recomendadas pelo estilo de código do Airbnb.
* **plugin:@typescript-eslint/recommended**: inclui as regras recomendadas pelo plugin @typescript-eslint.
* **airbnb-typescript**: inclui as regras recomendadas pelo estilo de código do Airbnb para projetos que utilizam Typescript.
* **plugin:prettier/recommended**: inclui as regras recomendadas pelo plugin Prettier.

### Regras adicionais

* **max-params**: limita o número máximo de parâmetros em uma função.
* **react/react-in-jsx-scope**: desativa o aviso de que o React deve ser importado em arquivos JSX.
* **react/prop-types**: desativa a verificação de tipos das props do React.
* **react/require-default-props**: desativa o aviso de que as props do React devem ter valores padrão.
* **import/prefer-default-export**: desativa a preferência por exports padrão em módulos.
* **react/function-component-definition**: desativa o aviso de que as funções do React devem ser definidas como componentes.
* **react/jsx-props-no-spreading**: desativa o aviso de que as props do JSX não devem ser espalhadas.
* **eslint-plugin-import/no-cycle**: desativa o aviso de importações cíclicas.
* **import/no-cycle**: desativa o aviso de importações cíclicas.
* **@typescript-eslint/no-var-requires**: desativa o aviso de uso da função require do Node.js.
* **global-require**: desativa o aviso de uso da função require do Node.js.
* **import/no-extraneous-dependencies**: impede a importação de dependências desnecessárias em arquivos de teste e mocks.
* **prefer-destructuring**: exige a desestruturação de objetos e arrays quando possível.
* **@typescript-eslint/ban-types**: proíbe o uso de tipos específicos do Typescript.
