document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
  