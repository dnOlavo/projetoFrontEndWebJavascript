async function mostrarInfo() {
    const resposta = await fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json');
    const estudantes = await resposta.json();
    const opcao = document.getElementById('opcoes').value;
    const infoDiv = document.getElementById('info');

    infoDiv.innerHTML = '';

    switch (opcao) {
        case 'todos':
            estudantes.forEach(estudante => {
                const notaBim1 = estudante.notaBim1 || 0; // Tratando caso a nota seja undefined
                const notaBim2 = estudante.notaBim2 || 0; // Tratando caso a nota seja undefined
                infoDiv.innerHTML += `<p>${estudante.nome}: ${notaBim1} (1º Bimestre) e ${notaBim2} (2º Bimestre) = ${notaBim1 + notaBim2};</p>`;
            });
            break;
        case 'homens':
            estudantes.filter(estudante => estudante.sexo === 'M').forEach(estudante => {
                const notaBim1 = estudante.notaBim1 || 0; // Tratando caso a nota seja undefined
                const notaBim2 = estudante.notaBim2 || 0; // Tratando caso a nota seja undefined
                infoDiv.innerHTML += `<p>${estudante.nome}: ${notaBim1} (1º Bimestre) e ${notaBim2} (2º Bimestre) = ${notaBim1 + notaBim2};</p>`;
            });
            break;
        case 'mulheres':
            estudantes.filter(estudante => estudante.sexo === 'F').forEach(estudante => {
                const notaBim1 = estudante.notaBim1 || 0; // Tratando caso a nota seja undefined
                const notaBim2 = estudante.notaBim2 || 0; // Tratando caso a nota seja undefined
                infoDiv.innerHTML += `<p>${estudante.nome}: ${notaBim1} (1º Bimestre) e ${notaBim2} (2º Bimestre) = ${notaBim1 + notaBim2};</p>`;
            });
            break;
        case 'aprovados':
            estudantes.filter(estudante => estudante.notaBim1 + estudante.notaBim2 >= 60).forEach(estudante => {
                const notaBim1 = estudante.notaBim1 || 0; // Tratando caso a nota seja undefined
                const notaBim2 = estudante.notaBim2 || 0; // Tratando caso a nota seja undefined
                infoDiv.innerHTML += `<p>${estudante.nome}: ${notaBim1} (1º Bimestre) e ${notaBim2} (2º Bimestre) = ${notaBim1 + notaBim2} -> Aprovado;</p>`;
            });
            break;
        case 'reprovados':
            estudantes.filter(estudante => estudante.notaBim1 + estudante.notaBim2 < 60).forEach(estudante => {
                const notaBim1 = estudante.notaBim1 || 0; // Tratando caso a nota seja undefined
                const notaBim2 = estudante.notaBim2 || 0; // Tratando caso a nota seja undefined
                infoDiv.innerHTML += `<p>${estudante.nome}: ${notaBim1} (1º Bimestre) e ${notaBim2} (2º Bimestre) = ${notaBim1 + notaBim2} -> Reprovado;</p>`;
            });
            break;
        case 'todosAprovados':
            const todosAprovados = estudantes.every(estudante => estudante.notaBim1 + estudante.notaBim2 >= 60);
            infoDiv.innerHTML += `<p>Todos os alunos foram aprovados? ${todosAprovados ? 'Sim' : 'Não'};</p>`;
            break;
        case 'mediaTurma':
            const totalNotas = estudantes.reduce((total, estudante) => total + estudante.notaBim1 + estudante.notaBim2, 0);
            const media = totalNotas / (estudantes.length);
            infoDiv.innerHTML += `<p>Nota Média = ${media.toFixed(2)};</p>`;
            break;
        default:
            break;
    }
}

document.getElementById('opcoes').addEventListener('change', mostrarInfo);
document.addEventListener('DOMContentLoaded', mostrarInfo);


