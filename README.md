Website Institucional - InfoTech Solutions
1. Sobre o Projeto
Este projeto consiste na criação de um website institucional para a empresa fictícia InfoTech Solutions. O seu principal objetivo é servir como um trabalho prático para demonstrar a aplicação dos três pilares fundamentais da Segurança da Informação: Integridade, Confidencialidade e Disponibilidade (CID) num ambiente web real.

O site foi desenvolvido para ser moderno e responsivo, incluindo funcionalidades como um seletor de tema claro/escuro e transições suaves, mas o seu foco principal é a implementação e simulação de conceitos de segurança.

2. Tecnologias Utilizadas
O projeto foi construído utilizando tecnologias web padrão, sem a necessidade de frameworks complexos, para focar nos conceitos fundamentais.

HTML5: Para a estruturação semântica do conteúdo.

CSS3: Para a estilização, layout responsivo e animações.

JavaScript (Vanilla): Para a interatividade, como o menu móvel, o seletor de tema e a simulação de segurança no formulário.

3. Demonstração dos Pilares de Segurança
Cada pilar da Tríade CID foi abordado através de uma implementação ou simulação específica no site.

🛡️ 3.1 Integridade
A integridade foi garantida através da implementação de uma Política de Segurança de Conteúdo (Content Security Policy - CSP).

O quê? Uma meta tag CSP foi adicionada ao <head> de todas as páginas.

Como? A política define uma "lista de permissões" de fontes confiáveis a partir das quais o navegador pode carregar recursos (scripts, estilos, fontes, imagens).

Porquê? Isso previne ataques de injeção de código, como Cross-Site Scripting (XSS), garantindo que o conteúdo exibido ao utilizador não seja modificado por terceiros mal-intencionados.

🔒 3.2 Confidencialidade
A confidencialidade foi simulada no formulário da página de contato para demonstrar a proteção de dados sensíveis.

O quê? Uma simulação de criptografia de ponta a ponta.

Como? Ao submeter o formulário, o JavaScript exibe uma mensagem de "a encriptar dados..." e, no console do navegador, os dados do formulário são codificados em Base64.

Porquê? A codificação em Base64 representa visualmente que os dados não são enviados em texto plano, simulando como a encriptação os tornaria ilegíveis para qualquer pessoa que intercetasse a comunicação.

☁️ 3.3 Disponibilidade
A disponibilidade foi abordada de forma conceitual, descrevendo a infraestrutura ideal para garantir que o site permaneça sempre online.

O quê? Uma estratégia de hospedagem resiliente e distribuída.

Como? No relatório do projeto, detalhamos o uso de:

Hospedagem em Nuvem com CDN (Content Delivery Network): Para distribuir o site globalmente e garantir que não haja um ponto único de falha.

Proteção contra Ataques DDoS: Utilizando serviços como a Cloudflare para filtrar tráfego malicioso.

Monitorização 24/7 e Backups Diários: Para uma resposta rápida a incidentes e recuperação de desastres.

Porquê? Para demonstrar que a disponibilidade vai além do servidor e envolve uma estratégia proativa contra falhas e ataques.

4. Relatório Completo
Para uma análise aprofundada de todas as medidas de segurança implementadas e das estratégias consideradas, consulte o relatório completo do projeto.

[Clique aqui para aceder ao Relatório do Projeto](COLE O LINK PARA O SEU RELATÓRIO AQUI)

5. Acesso e Visualização do Projeto
Visualização Online (GitHub Pages)
O projeto está publicado e pode ser acedido através do link abaixo. Substitua seu-usuario e nome-do-repositorio pelos seus dados.

Link para o site: https://seu-usuario.github.io/nome-do-repositorio/

Acesso ao Código-Fonte
Para clonar e visualizar o código-fonte localmente:

# Clone este repositório (substitua com o nome que escolheu)
git clone [https://github.com/seu-usuario/projeto-seguranca-infotech.git](https://github.com/seu-usuario/projeto-seguranca-infotech.git)

# Navegue até à pasta do projeto e explore os ficheiros
