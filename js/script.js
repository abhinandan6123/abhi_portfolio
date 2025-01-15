function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const jobTitles = [
    "Machine Learning Engineer",
    "Data Scientist / Analyst",
    "Predictive Analytics Engineer",
    "Cloud ML Engineer",
    "Software Developer (AI Focused)"
];

let currentIndex = 0;
const jobTitleElement = document.getElementById("job-title");

function changeJobTitle() {
    jobTitleElement.textContent = jobTitles[currentIndex];
    currentIndex = (currentIndex + 1) % jobTitles.length; // Loop back to the first title
}

setInterval(changeJobTitle, 2000); // Change title every 2 seconds
changeJobTitle(); // Initial call to display the first job title

let currentAbhinandanSlide = 0;

function moveAbhinandanSlide(direction) {
    const slides = document.querySelector('.abhinandan-slides');
    const totalSlides = slides.children.length;

    // Update the current slide index
    currentAbhinandanSlide = (currentAbhinandanSlide + direction + totalSlides) % totalSlides;

    // Move the slider
    slides.style.transform = `translateX(-${currentAbhinandanSlide * 100}%)`;
}



// achievements

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    };

    // Intersection Observer API for Scroll Trigger
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    observer.unobserve(counter); // Prevent repeat animations
                }
            });
        },
        { threshold: 0.7 } // Trigger when 70% of card is visible
    );

    counters.forEach((counter) => observer.observe(counter));
});

// skills
function showTab(tabName) {
    // Hide all sections
    const sections = document.querySelectorAll('.progress-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Trigger progress bar animation
    const progressBars = selectedTab.querySelectorAll('.fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', () => showTab('technical'));


//Education Box
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.education-box');
    boxes.forEach(box => {
        box.style.opacity = 0;
        box.style.transform = "translateY(20px)";
    });

    window.addEventListener('scroll', () => {
        boxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                box.style.opacity = 1;
                box.style.transform = "translateY(0)";
            }
        });
    });
});

// Functional area
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });
});
// Testimonial Slider
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelector('.sliders');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let ci = 0; // Current Index
  
    // Function to update slider position
    function updateSlider() {
      sliders.style.transform = `translateX(-${ci * 100}%)`;
    }
  
    // Next Button Click
    nextButton.addEventListener('click', () => {
      ci = (ci + 1) % slides.length; // Increment index and loop back
      updateSlider();
    });
  
    // Previous Button Click
    prevButton.addEventListener('click', () => {
      ci = (ci - 1 + slides.length) % slides.length; // Decrement index and loop back
      updateSlider();
    });
  
    // Automatic Sliding
    setInterval(() => {
      ci = (ci + 1) % slides.length;
      updateSlider();
    }, 5000); // 5-second interval
  });
  
// Project Data with Image URLs
const projects = [
    {
        title: "Movie Genre Classification",
        description: "Built classification models with TF-IDF and word embeddings, achieving 90% accuracy.",
        github: "https://github.com/abhinandan6123/Movie-Genre-Classification",
        domain: "ml",
        image: "images/Movie Genre.webp",
        technologies: ["TF-IDF", "Word Embeddings", "Python", "Scikit-learn"]
    },
    {
        title: "Credit Card Fraud Detection",
        description: "Developed fraud detection models using Random Forests and Logistic Regression, with 80% accuracy.",
        github: "https://github.com/abhinandan6123/Credit-Card-Fraud-Detection",
        domain: "ml",
        image: "images/fraud Detection.png",
        technologies: ["Random Forests", "Logistic Regression", "Python", "Pandas", "NumPy"]
    },
    {
        title: "Customer Churn Prediction",
        description: "Designed predictive models like Gradient Boosting, improving churn forecasting by 85%.",
        github: "https://github.com/abhinandan6123/Customer-Churn-Prediction",
        domain: "ml",
        image: "images/Customer Churn Prediction.jpg",
        technologies: ["Gradient Boosting", "Scikit-learn", "Python", "Pandas"]
    },
    {
        title: "Spam SMS Detection",
        description: "Trained classifiers with TF-IDF and word embeddings, achieving 90% accuracy in spam detection.",
        github: "https://github.com/abhinandan6123/Spam-SMS-Detection",
        domain: "ml",
        image: "images/Spam SMS Detection.jpg",
        technologies: ["TF-IDF", "Word Embeddings", "Natural Language Processing", "Scikit-learn"]
    },
    {
        title: "Handwritten Text Generation",
        description: "Implemented RNNs to simulate handwriting, achieving 85% realism in generated text.",
        github: "https://github.com/abhinandan6123/Handwritten-Text-Generation",
        domain: "nlp",
        image: "images/Handwritten Text Generation.jpg",
        technologies: ["Recurrent Neural Networks", "TensorFlow", "Python"]
    },
    {
        title: "Resume Optimization with AI",
        description: "Automated resume rewriting with OpenAI, streamlining the customization process by 40%.",
        github: "https://github.com/abhinandan6123/Resume-Optimization-with-AI",
        domain: "ai",
        image: "images/Resume Optimization with AI.jpg",
        technologies: ["OpenAI API", "Python", "Natural Language Processing"]
    },
    {
        title: "YouTube Lecture Summarizer",
        description: "Automated lecture summarization using GPT models and YouTube APIs, reducing analysis time by 50%.",
        github: "https://github.com/abhinandan6123/YouTube-Lecture-Summarizer",
        domain: "ai",
        image: "images/YouTube Lecture Summarizer.webp",
        technologies: ["OpenAI GPT", "YouTube API", "Python", "Natural Language Processing"]
    },
    {
        title: "Automatically Organizing PDFs Using AI",
        description: "Used K-Means clustering and text embeddings to categorize PDFs, automating organization.",
        github: "https://github.com/abhinandan6123/Automatically-Organizing-PDFs-Using-AI",
        domain: "ai",
        image: "images/Automatically Organizing PDFs Using AI.png",
        technologies: ["K-Means Clustering", "Text Embeddings", "Scikit-learn", "Python"]
    },
    {
        title: "Multimodal Search Engine for Knowledge Retrieval",
        description: "Built a search engine integrating text and image embeddings, achieving 85% accuracy.",
        github: "https://github.com/abhinandan6123/Multimodal-Search-Engine-for-Knowledge-Retrieval",
        domain: "ai",
        image: "images/Multimodal Search Engine for Knowledge Retrieval.jpg",
        technologies: ["Image Embeddings", "Text Embeddings", "Python", "TensorFlow"]
    },
    {
        title: "Knowledge Base QA System",
        description: "Created a multimodal RAG system for document querying with real-time interaction via Gradio.",
        github: "https://github.com/abhinandan6123/Knowledge-Base-QA-System",
        domain: "ai",
        image: "images/Knowledge Base QA System.jpg",
        technologies: ["RAG", "Gradio", "Python", "Hugging Face Transformers"]
    },
    {
        title: "AI-Powered Student Assistance Chatbot",
        description: "Deployed a multilingual chatbot with 95% query resolution and seamless NLU integration.",
        github: "https://github.com/abhinandan6123/AI-Powered-Student-Assistance-Chatbot",
        domain: "ai",
        image: "images/Ai power.png",
        technologies: ["NLU", "Multilingual Chatbot", "Python", "Dialogflow"]
    },
    {
        title: "SyncLip_AI",
        description: "Leveraged GANs and fine-tuned SyncNet for advanced audio-visual alignment and high-fidelity video synthesis, enhancing lip synchronization and video quality.",
        github: "https://github.com/abhinandan6123/SyncLip_AI",
        domain: "ai",
        image: "images/lipsync.avif",
        technologies: ["GANs", "SyncNet", "TensorFlow", "Python"]
    },
    {
        title: "Netflix-SVD-Recommender",
        description: "Engineered a scalable movie recommendation system using Singular Value Decomposition (SVD) and collaborative filtering techniques for personalized content delivery.",
        github: "https://github.com/abhinandan6123/Netflix-SVD-Recommender",
        domain: "ml",
        image: "images/netflix.jpg",
        technologies: ["SVD", "Collaborative Filtering", "Python", "NumPy", "Pandas"]
    },
    {
        title: "Predictive Analysis of Delivery Logistics",
        description: "Achieved 90%+ accuracy in delivery predictions, reducing shipment delays by 20%.",
        github: "https://github.com/abhinandan6123/Predictive_nalysis_of_Delhivery_Logistics",
        domain: "ml",
        image: "images/delivery.jpg",
        technologies: ["Time Series Analysis", "Scikit-learn", "Python", "Pandas"]
    },
    {
        title: "Ride Pricing Models",
        description: "Boosted revenue by 20% through ride-demand forecasting models.",
        github: "https://github.com/abhinandan6123/Real-Time-Pricing-Predictor",
        domain: "ml",
        image: "images/ride.jpg",
        technologies: ["Forecasting Models", "Scikit-learn", "Python", "Data Visualization"]
    }
];

// Function to display projects
function displayProjects(filteredProjects) {
    const gallery = document.getElementById('portfolio-gallery');
    gallery.innerHTML = '';

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <div class="card-inner">
                <!-- Front Side -->
                <div class="card-front">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    
                </div>
                <!-- Back Side -->
                <div class="card-back">
                    <h3>Technologies Used</h3>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                    <a href="${project.github}" target="_blank">View on GitHub</a>
                </div>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function filterProjects(domain) {
    if (domain === 'all') {
        displayProjects(projects);
    } else {
        const filteredProjects = projects.filter(project => project.domain === domain);
        displayProjects(filteredProjects);
    }
}

// Initialize with all projects
filterProjects('all');




// Certificates Slider
document.addEventListener('DOMContentLoaded', () => {
    const certSliders = document.querySelector('.cert-sliders');
    const certSlides = document.querySelectorAll('.cert-slide');
    const certPrevButton = document.querySelector('.cert-prev');
    const certNextButton = document.querySelector('.cert-next');

    let currentCertIndex = 0;

    // Function to update slider position
    function updateCertSlider() {
        certSliders.style.transform = `translateX(-${currentCertIndex * 100}%)`;
    }

    // Next Button Click
    certNextButton.addEventListener('click', () => {
        currentCertIndex = (currentCertIndex + 1) % certSlides.length;
        updateCertSlider();
    });

    // Previous Button Click
    certPrevButton.addEventListener('click', () => {
        currentCertIndex = (currentCertIndex - 1 + certSlides.length) % certSlides.length;
        updateCertSlider();
    });

    // Automatic Sliding
    setInterval(() => {
        currentCertIndex = (currentCertIndex + 1) % certSlides.length;
        updateCertSlider();
    }, 5000); // 5-second interval
});

function toggleVolunteerExperience() {
    const volunteerSection = document.getElementById('volunteer-experience');
    
    // Check and toggle visibility
    if (volunteerSection.style.display === 'none' || volunteerSection.style.display === '') {
        volunteerSection.style.display = 'block';
    } else {
        volunteerSection.style.display = 'none';
    }
}


// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default anchor link behavior

        // Scroll smoothly to the target element
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',  // Smooth scrolling effect
            block: 'start'       // Align to the top of the element
        });
    });
});


//for gmail to my acc using contact section


// Initialize EmailJS with your public key
emailjs.init("cy8qINzpKOSM2OeVW"); // Replace with your EmailJS public key

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send the form data using EmailJS
    emailjs.sendForm('service_bkp5i0p', 'template_xkjqt6h', this)
        .then(function(response) {
            // Success: Notify the user
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            // Failure: Notify the user
            alert('Failed to send message. Please try again.');
            console.error('FAILED...', error);
        });
});