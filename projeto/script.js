const Modal = {
    // METODO OPEN
    open() {
        // Abrir modal
        // add a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    // METODO CLOSE
    close() {
        // Fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // entradas - saídas
    }

}

