// Configurações do Safe Mode
export const SafeModeConfig = {
  // Variável de ambiente que controla o modo
  IS_WORKANA_MODE: process.env.REACT_APP_WORKANA_MODE === 'true',
  
  // Configurações específicas para cada modo
  modes: {
    workana: {
      name: 'Workana Safe Mode',
      description: 'Modo seguro para plataformas profissionais',
      hiddenSections: ['blog'],
      allowedSections: ['hero', 'about', 'projects', 'techstack'],
      theme: 'professional'
    },
    full: {
      name: 'Full Portfolio Mode',
      description: 'Modo completo com todas as funcionalidades',
      hiddenSections: [],
      allowedSections: ['hero', 'about', 'projects', 'techstack', 'blog'],
      theme: 'complete'
    }
  },

  // Função para verificar se uma seção deve ser exibida
  shouldShowSection: (sectionName) => {
    const currentMode = SafeModeConfig.IS_WORKANA_MODE ? 'workana' : 'full';
    const mode = SafeModeConfig.modes[currentMode];
    return !mode.hiddenSections.includes(sectionName.toLowerCase());
  },

  // Função para obter configurações do modo atual
  getCurrentMode: () => {
    return SafeModeConfig.IS_WORKANA_MODE ? SafeModeConfig.modes.workana : SafeModeConfig.modes.full;
  },

  // Função para debug - mostra informações do modo atual
  getDebugInfo: () => {
    const currentMode = SafeModeConfig.getCurrentMode();
    return {
      envVariable: process.env.REACT_APP_WORKANA_MODE,
      isWorkanaMode: SafeModeConfig.IS_WORKANA_MODE,
      currentMode: currentMode.name,
      hiddenSections: currentMode.hiddenSections,
      allowedSections: currentMode.allowedSections
    };
  }
};

export default SafeModeConfig;