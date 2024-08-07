const Modal = {
        // CRIAÇÃO DE UM MÉTODO (FUNCTION)
        open() {
                // OPEN Modal
                // ADD CLASS ACTIVE AT Modal
                document
                        .querySelector('.modal-overlay')
                        .classList.add('active')

        },
        close() {
                // CLOSE Modal
                // REMOVE CLASS ACTIVE
                document
                        .querySelector('.modal-overlay')
                        .classList.remove('active')
        }
}