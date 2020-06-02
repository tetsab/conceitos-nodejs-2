module.exports = {
   presets: [
     '@babel/preset-env', // converte funcionalidade baseadas no que o ambiente da aplicação que esta sendo executada ainda não entende e converte
     '@babel/preset-react', // add nas funcionalidades do react nessa conversao. React add html dentro do JS, é esse preset-react q consegue entender o html dentro do JS e converter para que o browser também entenda
    ],
    plugins: [
      '@babel/plugin-transform-runtime'
    ]
 };