# CODEX.AI Landing Page

Uma landing page completa para a CODEX.AI, plataforma de codificação CID por Inteligência Artificial.

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Ícones
- **Framer Motion** - Animações (pré-instalado)

## 📋 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Menu de navegação com scroll suave
- ✅ Seção Hero com CTAs
- ✅ Seção de problemas com ícones
- ✅ Seção de soluções
- ✅ Seção "Como Funciona" com infográfico
- ✅ Seção da equipe (substituindo casos de sucesso)
- ✅ Formulário de contato funcional
- ✅ FAQ com accordion
- ✅ Footer completo
- ✅ Otimizado para performance

## 🛠️ Como executar localmente

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd codex-landing
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm run dev
```

4. Acesse http://localhost:5173

## 📦 Deploy no Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Suba o código para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CODEX.AI landing page"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/codex-landing.git
   git push -u origin main
   ```

2. **Configure o Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione o repositório `codex-landing`
   - Configure as seguintes opções:
     - **Framework Preset:** Vite
     - **Build Command:** `pnpm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `pnpm install`

3. **Deploy automático:**
   - O Vercel fará o deploy automaticamente
   - Qualquer push para a branch `main` acionará um novo deploy

### Opção 2: Deploy via CLI do Vercel

1. **Instale o Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🔧 Configurações do Projeto

### Estrutura de Pastas
```
codex-landing/
├── public/
├── src/
│   ├── assets/          # Imagens e assets
│   ├── components/
│   │   └── ui/         # Componentes shadcn/ui
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globais
│   └── main.jsx        # Entry point
├── dist/               # Build de produção
├── package.json
└── vite.config.js
```

### Scripts Disponíveis

- `pnpm run dev` - Servidor de desenvolvimento
- `pnpm run build` - Build de produção
- `pnpm run preview` - Preview do build
- `pnpm run lint` - Linting do código

## 🎨 Customização

### Cores
As cores principais estão definidas no Tailwind CSS:
- **Azul primário:** `blue-600`
- **Verde:** `green-600`
- **Roxo:** `purple-600`
- **Cinza:** `gray-900`, `gray-600`, etc.

### Imagens
Todas as imagens estão na pasta `src/assets/`:
- `hero-image.jpg` - Imagem principal da seção hero
- `process-infographic.jpg` - Infográfico do processo
- `team-image.jpg` - Imagem da equipe
- Ícones dos problemas (PNG/JPG)

### Conteúdo
O conteúdo pode ser editado diretamente no arquivo `src/App.jsx` nas seguintes seções:
- `problems` - Array com os problemas
- `solutions` - Array com as soluções
- `processSteps` - Array com os passos do processo
- `teamMembers` - Array com membros da equipe
- `faqs` - Array com perguntas frequentes

## 📱 Responsividade

A landing page foi desenvolvida com abordagem mobile-first e é totalmente responsiva:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔒 Formulário de Contato

O formulário está configurado para capturar:
- Nome completo
- E-mail corporativo
- Nome da empresa
- Cargo
- Mensagem (opcional)

**Nota:** Atualmente o formulário exibe um alert. Para produção, integre com um serviço de e-mail como:
- Formspree
- Netlify Forms
- EmailJS
- API própria

## 📊 Performance

O build otimizado inclui:
- ✅ Minificação de CSS e JS
- ✅ Otimização de imagens
- ✅ Tree shaking
- ✅ Code splitting
- ✅ Compressão gzip

## 🐛 Solução de Problemas

### Erro de build
Se houver erro no build, verifique:
1. Todas as dependências estão instaladas
2. Não há erros de sintaxe no código
3. Todas as imagens existem na pasta assets

### Problemas de deploy no Vercel
1. Verifique se o repositório está público
2. Confirme as configurações de build
3. Verifique os logs de deploy no dashboard do Vercel

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação do [Vite](https://vitejs.dev/)
2. Consulte a documentação do [Vercel](https://vercel.com/docs)
3. Verifique a documentação do [Tailwind CSS](https://tailwindcss.com/)

---

**Desenvolvido com ❤️ para CODEX.AI**

