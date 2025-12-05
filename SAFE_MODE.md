# Portfolio Tony - Safe Mode Implementation

## 🔒 Safe Mode via Environment Variables

Este portfólio implementa um sistema de "Safe Mode" que permite controlar a visibilidade de certas seções baseado em variáveis de ambiente.

### 📋 Configuração

#### Variáveis de Ambiente

- **REACT_APP_WORKANA_MODE**: Controla o modo de visualização
  - `true`: Modo Workana (Safe Mode) - Oculta seções sensíveis
  - `false`: Modo Completo - Mostra todas as seções

#### Arquivos de Configuração

- `.env`: Configuração para desenvolvimento (modo completo)
- `.env.production`: Configuração para produção (modo Workana)

### 🚀 Scripts Disponíveis

#### Desenvolvimento
```bash
# Modo completo (padrão)
npm start
npm run start:full

# Modo Workana (safe mode)
npm run start:workana
```

#### Build para Produção
```bash
# Build completo
npm run build
npm run build:full

# Build para Workana (safe mode)
npm run build:workana
```

### 🎯 Funcionalidades do Safe Mode

#### Modo Workana (Safe Mode)
- ✅ Hero Section
- ✅ About Section  
- ✅ Projects Section
- ✅ Tech Stack Section
- ❌ Blog Section (oculta)

#### Modo Completo
- ✅ Hero Section
- ✅ About Section
- ✅ Projects Section
- ✅ Tech Stack Section
- ✅ Blog Section

### 🔧 Debug

No modo de desenvolvimento, o sistema exibe:
- Indicador visual do modo atual (canto superior direito)
- Logs no console com informações de debug

### 📁 Arquivos Principais

```
src/
├── Portfolio.js              # Componente principal com lógica Safe Mode
├── config/
│   └── SafeModeConfig.js     # Configurações e utilitários
└── components/...            # Componentes das seções

.env                          # Variáveis desenvolvimento
.env.production               # Variáveis produção
```

### 🎨 Como Funciona

1. **Verificação de Ambiente**: `process.env.REACT_APP_WORKANA_MODE === 'true'`
2. **Renderização Condicional**: `SafeModeConfig.shouldShowSection('blog')`
3. **Configuração Centralizada**: Todas as regras em `SafeModeConfig.js`

### 📝 Exemplos de Uso

```javascript
// Verificar modo atual
const IS_WORKANA_MODE = process.env.REACT_APP_WORKANA_MODE === 'true';

// Usar configuração
import SafeModeConfig from './config/SafeModeConfig';
const shouldShow = SafeModeConfig.shouldShowSection('blog');

// Debug
console.log(SafeModeConfig.getDebugInfo());
```

### 🔄 Deploy

Para diferentes ambientes, certifique-se de definir a variável correta:

- **Workana/LinkedIn**: `REACT_APP_WORKANA_MODE=true`
- **Portfolio Pessoal**: `REACT_APP_WORKANA_MODE=false`