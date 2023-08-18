//Função para criar o corpo do e-mail
export function criarCorpoEmail (nome){
    const body = `
    Olá, ${nome}! Essas são as ofertas da semana para você:

    🚨 Monza 2.0 a álcool por apenas R$ 40.000,00
    🚨 Marea Turbo 2.4 por apenas R$ 60.000,00
    🚨 Uno de firma com escada por apenas R$ 30.000,00
    🚨 Opala 67 por apenas R$25.000,00
    
    Aproveite e garanta seu veículo dividido em 36x sem entrada 🚗`
    
    return body;
}
