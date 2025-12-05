# Deploy do Portfólio na Vercel - Duas URLs

## 🚀 Configuração de Deploy com Duas URLs

Este portfólio está configurado para deploy na Vercel com **duas URLs diferentes**:

### 📋 **URLs de Deploy:**

1. **🔒 URL Workana (Safe Mode)**
   - URL: `https://portfolio-tony-workana.vercel.app` 
   - Variável: `REACT_APP_WORKANA_MODE=true`
   - Oculta: Seção Blog
   - Ideal para: Workana, LinkedIn, plataformas profissionais

2. **🌟 URL Completa**
   - URL: `https://portfolio-tony.vercel.app`
   - Variável: `REACT_APP_WORKANA_MODE=false`
   - Mostra: Todas as seções
   - Ideal para: Portfolio pessoal, GitHub

---

## 🛠️ **Como Fazer o Deploy**

### **1. Deploy da Versão Completa**
```bash
# Via Vercel CLI
vercel --prod

# Ou conecte o repositório na Vercel Dashboard
# https://vercel.com/new
```

### **2. Deploy da Versão Workana (Safe Mode)**
```bash
# Deploy com configuração específica
vercel --prod --local-config vercel-workana.json

# Ou criar projeto separado na Vercel com:
# Environment Variable: REACT_APP_WORKANA_MODE = true
```

---

## ⚙️ **Configurações dos Arquivos**

### **vercel.json** (Versão Completa)
- `REACT_APP_WORKANA_MODE: "false"`
- Build padrão com todas as seções

### **vercel-workana.json** (Versão Workana)
- `REACT_APP_WORKANA_MODE: "true"`
- Build com seção Blog oculta

---

## 📝 **Passos para Deploy Manual**

### **⚠️ Solução para Erro 404: DEPLOYMENT_NOT_FOUND**

Se você recebeu o erro `404: NOT_FOUND - DEPLOYMENT_NOT_FOUND`, siga estes passos:

### **Opção 1: Via Vercel Dashboard (RECOMENDADO)**

#### **🔥 PASSO A PASSO DETALHADO:**

**Projeto 1 - Portfolio Completo:**
1. **Acesse**: [vercel.com/new](https://vercel.com/new)
2. **Faça login** com GitHub
3. **Import Git Repository**: 
   - Procure por `tonynerd/portfolio-tony`
   - Clique em **Import**
4. **Configure Deploy Settings:**
   - **Project Name**: `portfolio-tony-complete` (ou outro nome)
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `.` (raiz)
   - **Build Command**: `npm run build:full`
   - **Output Directory**: `build`
5. **Environment Variables**:
   - **Name**: `REACT_APP_WORKANA_MODE`
   - **Value**: `false`
6. Clique em **Deploy**

**Projeto 2 - Portfolio Workana (Safe Mode):**
1. **Acesse**: [vercel.com/new](https://vercel.com/new) (nova aba)
2. **Import** o mesmo repositório `tonynerd/portfolio-tony`
3. **Configure Deploy Settings:**
   - **Project Name**: `portfolio-tony-workana`
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `.` (raiz)
   - **Build Command**: `npm run build:workana`
   - **Output Directory**: `build`
4. **Environment Variables**:
   - **Name**: `REACT_APP_WORKANA_MODE`
   - **Value**: `true`
5. Clique em **Deploy**

---

## 🎯 **Resultado Final**

✅ **Duas URLs ativas:**
- Portfolio Completo: `https://portfolio-tony.vercel.app`
- Portfolio Workana: `https://portfolio-tony-workana.vercel.app`

✅ **Mesmo código base**
✅ **Deploy automático no push**
✅ **Ambientes isolados**

---

## 🚨 **Troubleshooting - Erro 404**

### **Erro: `404: NOT_FOUND - DEPLOYMENT_NOT_FOUND`**

**Possíveis causas e soluções:**

1. **Deploy não foi criado ainda**:
   - Siga os passos acima para criar os deploys

2. **URL incorreta**:
   - Verifique se a URL está correta no dashboard da Vercel
   - Exemplo: `https://seu-projeto-nome.vercel.app`

3. **Deploy em progresso**:
   - Aguarde alguns minutos após o deploy
   - Verifique o status no dashboard

4. **Build falhou**:
   - Verifique os logs no dashboard da Vercel
   - Execute `npm run build:full` localmente para testar

### **URLs de exemplo após deploy:**
- Portfolio Completo: `https://portfolio-tony-complete-abc123.vercel.app`
- Portfolio Workana: `https://portfolio-tony-workana-xyz789.vercel.app`

## 🔧 **Scripts Úteis**
```bash
# Testar builds localmente
npm run build:full     # Versão completa
npm run build:workana  # Versão Workana

# Preview local dos builds
npx serve -s build

# Verificar se build está funcionando
npm start              # Desenvolvimento
```

## 🆘 **Se ainda não funcionar:**
1. Exclua o projeto na Vercel
2. Crie novamente seguindo os passos detalhados
3. Certifique-se que o repositório é público no GitHub
4. Verifique se as environment variables estão corretas