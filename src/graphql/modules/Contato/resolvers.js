module.exports = {
    Query: {
        contatos: async (obj,args,context,info) => {
            return await context.usuarioCadastroService.contatos()
        },
    },

    Mutation: {
        criarContato: async (_, { data }, { usuarioCadastroService }) => 
            await usuarioCadastroService.criarContato(data),
        
        atualizarContato: async (_, { id, data }, context) =>
            await context.usuarioCadastroService.atualizarContato(id, data),

        deletarContato: async (_, { filtro }, context) => 
           await context.usuarioCadastroService.deletarContato(filtro)
        
    }

    
}

