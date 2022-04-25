const {ApolloServer} = require("apollo-server");
const { URL } = require("apollo-server-env");
const graphql = require('./src/graphql/index.js');
const UsuarioCadastroService = require("./src/service/UsuarioCadastroService.js");


const server = new ApolloServer({
   ...graphql,
   formatError: (err) => {
       if(err.message.startsWith("Usuario Existente:")) {
           return new Error(err.message)
       }

       return err;
   },
   context: () => ({
    usuarioCadastroService: UsuarioCadastroService,
   })

})

server.listen(3000).then(({url}) => console.log(`Server running in ${url}`));
