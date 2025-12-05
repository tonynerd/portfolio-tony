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

### **Opção 1: Via Vercel CLI**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy versão completa
vercel --prod

# Deploy versão Workana (novo projeto)
vercel --prod --local-config vercel-workana.json
```

### **Opção 2: Via Vercel Dashboard**

#### **Projeto 1 - Portfolio Completo:**
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Conecte o repositório `portfolio-tony`
3. Configure:
   - **Project Name**: `portfolio-tony`
   - **Environment Variables**: `REACT_APP_WORKANA_MODE = false`
4. Deploy

#### **Projeto 2 - Portfolio Workana:**
1. Crie novo projeto na Vercel
2. Conecte o mesmo repositório `portfolio-tony`
3. Configure:
   - **Project Name**: `portfolio-tony-workana`
   - **Environment Variables**: `REACT_APP_WORKANA_MODE = true`
4. Deploy

---

## 🎯 **Resultado Final**

✅ **Duas URLs ativas:**
- Portfolio Completo: `https://portfolio-tony.vercel.app`
- Portfolio Workana: `https://portfolio-tony-workana.vercel.app`

✅ **Mesmo código base**
✅ **Deploy automático no push**
✅ **Ambientes isolados**

---

## 🔧 **Scripts Úteis**
```bash
# Testar builds localmente
npm run build:full     # Versão completa
npm run build:workana  # Versão Workana

# Preview local dos builds
npx serve -s build
```