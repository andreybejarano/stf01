async function createArtist(event) {
    event.preventDefault();
    const txfName = document.getElementById('txfName');
    try {
        const response = await fetch('/api/artistas', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre: txfName.value })
        })
        if (!response.ok) {
            const errors = await response.json()
            throw errors;
        }
        location.href = `${location.origin}/api/artistas`;
    } catch (error) {
        const errorsContainer = document.getElementById('errors-container');
        const errors = error.errors.map(e => e.msg);
        errorsContainer.innerHTML = errors.join(' ');
    }
}

const btnCreateArtist = document.getElementById('btnSave');
btnCreateArtist.addEventListener('click', createArtist);