// Function to handle message sending in chatrooms
function handleChatSubmit(formId, chatBoxId, messageInputId) {
    const form = document.getElementById(formId);
    const chatBox = document.getElementById(chatBoxId);
    const messageInput = document.getElementById(messageInputId);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const message = messageInput.value.trim();
        if (message) {
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;

            // Append the message to the chat box
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message

            // Clear the input field
            messageInput.value = '';
        }
    });
}

// Initialize chat functionality for each club
handleChatSubmit('chelsea-chat-form', 'chelsea-chat-box', 'chelsea-message');
handleChatSubmit('manchester-united-chat-form', 'manchester-united-chat-box', 'manchester-united-message');
handleChatSubmit('barcelona-chat-form', 'barcelona-chat-box', 'barcelona-message');
handleChatSubmit('real-madrid-chat-form', 'real-madrid-chat-box', 'real-madrid-message');
