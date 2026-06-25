// ---- DEMO: Console Visual ----
function log(msg, tipo) {
    const output = document.getElementById('console-output');
    const linha = document.createElement('div');
    linha.className = 'console-linha ' + (tipo || '');
    linha.textContent = '> ' + msg;
    output.appendChild(linha);
}

function limparConsole() {
    document.getElementById('console-output').innerHTML = '';
}

function demoVariaveis() {
    limparConsole();
    let firstName = 'João';
    const lastName = 'Silva';
    const idade = 25;
    const ativo = true;
    log('let firstName = "João"  →  ' + firstName);
    log('const lastName = "Silva"  →  ' + lastName);
    log('const idade = 25  →  ' + idade);
    log('const ativo = true  →  ' + ativo);
    log('Template string: `Olá, ${firstName} ${lastName}!`  →  `Olá, ${firstName} ${lastName}!`');
}

function demoCondicional() {
    limparConsole();
    const nota = 7;
    let resultado;
    if (nota >= 9) {
        resultado = 'Excelente';
    } else if (nota >= 7) {
        resultado = 'Aprovado';
    } else if (nota >= 5) {
        resultado = 'Recuperação';
    } else {
        resultado = 'Reprovado';
    }
    log('const nota = ' + nota);
    log('if (nota >= 9) → "Excelente"');
    log('else if (nota >= 7) → "Aprovado"  ✓ Este foi executado');
    log('Resultado: ' + resultado);
}

function demoLaco() {
    limparConsole();
    log('for (let i = 1; i <= 5; i++) { console.log(i); }');
    for (let i = 1; i <= 5; i++) {
        log('i = ' + i);
    }
}

function demoFuncao() {
    limparConsole();
    function soma(x, y) {
        return x + y;
    }
    const resultado = soma(8, 4);
    log('function soma(x, y) { return x + y; }');
    log('soma(8, 4)  →  ' + resultado);

    const quadrado = (n) => n * n;
    log('const quadrado = (n) => n * n;');
    log('quadrado(6)  →  ' + quadrado(6));
}

function demoArray() {
    limparConsole();
    const cores = ['vermelho', 'verde', 'azul'];
    cores.push('amarelo');
    log('const cores = ["vermelho", "verde", "azul"]');
    log('cores.push("amarelo")');
    log('cores  →  [' + cores.join(', ') + ']');
    log('cores[0]  →  ' + cores[0]);
    log('cores.length  →  ' + cores.length);
    const maiusculas = cores.map(c => c.toUpperCase());
    log('cores.map(c => c.toUpperCase())  →  [' + maiusculas.join(', ') + ']');
}

// ---- DEMO: Validador de Senha ----
function validarSenha() {
    const senha = document.getElementById('senhaInput').value;
    const el = document.getElementById('resultado-senha');
    let mensagem = '';
    let classe = '';

    if (senha.length === 0) {
        mensagem = '⚠️ Digite uma senha primeiro.';
        classe = 'aviso';
    } else if (senha.length < 10) {
        mensagem = '❌ Senha muito curta! Deve ter ao menos 10 caracteres. (atual: ' + senha.length + ')';
        classe = 'erro';
    } else if (senha.length > 50) {
        mensagem = '❌ Senha muito longa! Não pode ter mais de 50 caracteres.';
        classe = 'erro';
    } else {
        mensagem = '✅ Senha válida! (' + senha.length + ' caracteres)';
        classe = 'sucesso';
    }

    el.textContent = mensagem;
    el.className = classe;
}

// ---- DEMO: Calculadora ----
function calcularSoma() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const el = document.getElementById('resultado-soma');

    try {
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error('Por favor, insira dois números válidos.');
        }
        const resultado = n1 + n2;
        el.textContent = '✅ soma(' + n1 + ', ' + n2 + ') = ' + resultado;
        el.className = 'sucesso';
    } catch (erro) {
        el.textContent = '❌ Erro: ' + erro.message;
        el.className = 'erro';
    }
}

// ---- DEMO: Array / Lista ----
const nomes = [];

function renderizarLista() {
    const ul = document.getElementById('lista-nomes');
    ul.innerHTML = '';
    for (let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');
        li.textContent = nomes[i];
        ul.appendChild(li);
    }
}

function adicionarNome() {
    const input = document.getElementById('nomeInput');
    const nome = input.value.trim();
    if (nome !== '') {
        nomes.push(nome);
        input.value = '';
        renderizarLista();
    }
}

function removerUltimo() {
    nomes.pop();
    renderizarLista();
}

function ordenarLista() {
    nomes.sort();
    renderizarLista();
}