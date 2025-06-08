# CA Odontología Integral - Official Website

## Project Overview

This repository contains the source code for the official website of **CA Odontología Integral**, a modern dental and orthodontic clinic located in Paraguay, led by Dr. Cynthia Anderson. The website is designed to provide prospective and current patients with comprehensive information about the clinic's services, team, locations, and contact details, all presented in a user-friendly and aesthetically pleasing manner.

## Features

* **Responsive Design:** Fully optimized for seamless viewing across all devices (desktops, tablets, and mobile phones).
* **Dynamic Welcome Section:** Features a subtle animated logo introduction (`CA`) and a welcoming hero section with key statistics (years of experience, transformed smiles, care percentage) and direct calls to action.
* **Comprehensive Services:** Detailed sections outlining general dentistry, specialized orthodontics (traditional and invisible alignment), cosmetic dentistry, pediatric care, emergency services, and oral surgery.
* **Dedicated Orthodontics Section:** Highlights the benefits of both traditional and invisible alignment treatments, including an embedded video for a visual explanation.
* **Meet Our Team:** Introduces Dr. Cynthia Anderson and specialist doctors (Dra. Nathalia Paniagua and Dr. Rubén Cáceres) with their respective areas of expertise.
* **Multi-Location Information:** Provides detailed information for both Asunción and Capiatá offices, including addresses, phone numbers, working hours, and embedded Google Maps for easy navigation.
* **Dental Care Tips:** A section offering practical advice for maintaining optimal oral health.
* **Contact Form:** A direct inquiry form powered by Formspree for easy patient communication.
* **Social Media Integration:** Links to the clinic's social media profiles (Instagram, Facebook).
* **Floating WhatsApp Button:** Provides immediate access to WhatsApp consultation for user convenience.

## Technologies Used

The website is built using standard web technologies:

* **HTML5:** For the core structure and content.
* **CSS3:** Custom styling to achieve a clean, modern aesthetic.
* **Tailwind CSS:** A utility-first CSS framework for rapid and responsive UI development.
* **JavaScript:** For interactive elements, animations (like scroll-triggered effects and number counting), and controlling the initial logo animation.
* **Font Awesome:** For professional and consistent iconography.
* **Formspree:** A third-party service enabling backendless form submissions for contact inquiries.

## Installation and Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-github-username/your-repo-name.git](https://github.com/your-github-username/your-repo-name.git)
    ```
    (Replace `your-github-username` and `your-repo-name` with your actual GitHub details.)
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html`:** Simply open the `index.html` file in your web browser.

## Customization

To make this website your own:

1.  **Update Contact Information:**
    * Edit phone numbers, email addresses, and office addresses in the `index.html` file.
2.  **Replace Placeholders:**
    * **Images:** Replace all placeholder images (`https://placehold.co/...` or Google Photos links) with actual photos of the clinic, Dr. Cynthia Anderson, the team, and patient before/after photos.
    * **Videos:** Replace the placeholder video URL in the "Historias que Inspiran Sonrisas" and "Alineación Invisible" sections with actual video links.
    * **Google Maps:** Update the `<iframe>` `src` attributes in the "Consultorios" section with the correct Google Maps embed codes for the Asunción and Capiatá offices.
3.  **Formspree Integration:**
    * Go to [Formspree.io](https://formspree.io/) and create a free account.
    * Create a new form to get your unique Formspree ID.
    * Replace `https://formspree.io/f/meokewko` in the `<form>` `action` attribute within the "Contacto" section with your actual Formspree endpoint.
4.  **Social Media Links:**
    * Update the `href` attributes for Instagram and Facebook links in the footer with the clinic's actual social media URLs.
5.  **Branding:**
    * Adjust `primary-blue` and `secondary-gray` colors in the `<style>` block to match the clinic's brand guidelines if desired.
    * Consider creating custom SVGs or using more specific Font Awesome icons if available for further visual enhancement.

## Deployment

This website is designed for static site hosting. 

---

## Author

* **Sebastian Ovelar** (Initial Development and Structure)
    * [LinkedIn Profile](https://www.linkedin.com/in/sebastian-anderson-3a0610170/) (Optional)
## License

This project is open source and available under the [MIT License](LICENSE).
