# 🚗 Go Drive

Aplicativo mobile desenvolvido em React Native que oferece uma plataforma de aluguel de carros sob demanda, com foco na experiência do locatário (usuário que deseja alugar um veículo). O app permite que os usuários escolham veículos disponíveis em estacionamentos credenciados e selecionem planos de aluguel com diferentes durações (diário, semanal ou mensal).

> Este projeto foi desenvolvido como parte da disciplina de Dispositivos Móveis no curso de Análise e Desenvolvimento de Sistemas.

## 🚀 Tecnologias Utilizadas

- **React Native** com **Expo**  
- **Firebase (Auth + Firestore)** — autenticação e banco de dados
- **React Navigation** — navegação entre telas
- **React Hook Form** — controle e validação de formulários
- **AsyncStorage** — persistência local de dados
- **Fetch API** — requisições HTTP
- **Google Maps API** — exibição de localização dos veículos
- **Mercado Pago API** — integração de pagamentos
- **Vercel** — hospedagem do backend (criação de preferências de pagamento)

> A integração com o Mercado Pago foi feita utilizando uma função backend separada, hospedada na Vercel, para evitar expor dados sensíveis no frontend. Isso garante maior segurança no processo de pagamento.
