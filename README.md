<!--

    RECOMENDO UTILIZAR A INTERFACE DE FRONT-END, MAS SEGUE AS INSTRUÇÕES PARA TESTE COM POSTMAN:

        OBS.: siga os passos de PROJETO (linhas 54 a 66)

        1. Rotas da API:
            http://localhost:3000/api/projetos
            http://localhost:3000/api/users

        2. Metodos:
            GET
            POST
            PUT
            DELETE

        3. 'Exemplo de Body (json) para POST'
            users: 
                {"name":"Nome Sobrenome", "username":"MeuUsername", "password":"minhaSenha"}
            
            projetos: 
                {
                    "title": "Projeto Residencial",
                    "description": "Este é um projeto residencial focado na integração de espaços.",
                    "type": "Arquitetônico",
                    "images": [
                        {
                        "data": "abc123",
                        "description": "Vista frontal da residência"
                        },
                        {
                        "data": "def456",
                        "description": "Planta baixa do térreo"
                        }
                    ]
                }

        4. Para PUT usar mesmo body, porém nas seguintes rotas:
            http://localhost:3000/api/projetos?id=<id>
            http://localhost:3000/api/users?id=<id>

    -----------------------------------------------------------------------------------------

    BANCO DE DADOS:

        1. Criar database 'rearqt' com MongoDB.

        2. Baixar Collections anexadas ao Moodle e importar no banco de dados.

    
    -----------------------------------------------------------------------------------------

    
    PROJETO:

        1. Clonar o repositório:
            git clone https://github.com/felipefacklam/rearqt/tree/api-routes

        2. Navegar até o diretório do projeto:
            cd rearqt

        3. Instalar as dependências usando npm ou yarn:
            npm install OU yarn install

        4. Iniciar o projeto:
            npm run dev OU yarn dev

        5. Acessar navegador em http://localhost:3000.

 -->
