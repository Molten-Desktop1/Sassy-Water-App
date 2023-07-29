// Function to fetch a random reminder from the JSON data
async function getRandomReminder() {
    try {
      const response = await fetch('reminders.json');
      const data = await response.json();
      const reminders = data.reminders;
      const randomIndex = Math.floor(Math.random() * reminders.length);
      return reminders[randomIndex];
    } catch (error) {
      console.error('Error fetching reminders:', error);
      return 'Failed to fetch reminders. Please try again later.';
    }
  }
  
  // Function to update the displayed reminder on page load
  async function updateReminderOnLoad() {
    const reminderElement = document.getElementById('reminder');
    reminderElement.textContent = await getRandomReminder();
  }
  
  // Call the function to update the reminder on page load
  updateReminderOnLoad();