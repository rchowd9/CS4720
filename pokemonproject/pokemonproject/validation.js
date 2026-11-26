document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input[type="text"]');
        let valid = true;
        let errorMsg = "";

        inputs.forEach((input, index) => {
            const name = input.value.trim();

            if (name === "") 
            {
                valid = false;
                errorMsg = "Fill in all 3 Pokémon slots.";
                input.style.borderColor = "red";
            }

            else if (name.length < 3)
            {
                valid = false;
                errorMsg = "Pokemon names need to be at least 3 characters.";
                input.style.borderColor = "red";
            }

            else
            {
                input.style.borderColor = "#ddd";
            }
        });

        if (!valid) 
        {
            event.preventDefault();
            alert(errorMsg);
        }
    });  
});