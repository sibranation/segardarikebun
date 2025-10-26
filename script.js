// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Simple alert - you can replace this with actual cart functionality
        alert(`Produk "${productName}" dengan harga ${productPrice} telah ditambahkan ke keranjang!\n\nSilakan hubungi kami untuk melanjutkan pesanan.`);
        
        // Add animation effect
        this.innerHTML = '<i class="fas fa-check"></i> Ditambahkan';
        this.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Beli';
            this.style.background = 'var(--primary-color)';
        }, 2000);
    });
});

// Quick view functionality
const quickViewButtons = document.querySelectorAll('.btn-quick-view');

quickViewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productDescription = productCard.querySelector('.product-description').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Simple modal - you can enhance this with a proper modal
        alert(`Detail Produk: ${productName}\n\n${productDescription}\n\nHarga: ${productPrice}\n\nProduk ini ditanam tanpa pestisida dan bahan kimia berbahaya. 100% organik dan aman untuk kesehatan.`);
    });
});

// Contact form submission - WhatsApp Integration
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const nama = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const telepon = this.querySelector('input[type="tel"]').value;
    const pesan = this.querySelector('textarea').value;
    
    // Simple validation
    if (!nama.trim() || !email.trim() || !telepon.trim() || !pesan.trim()) {
        alert('Mohon lengkapi semua field yang ada.');
        return;
    }
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, saya tertarik dengan produk Anda!\n\n` +
                            `📋 *Data Pemesanan:*\n` +
                            `👤 Nama: ${nama}\n` +
                            `📧 Email: ${email}\n` +
                            `📞 No. Telepon: ${telepon}\n\n` +
                            `💬 Pesan: ${pesan}`;
    
    // Nomor WhatsApp (Indonesia format: 62895347223822)
    const whatsappNumber = '62895347223822';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    this.reset();
    
    // Optional: Show success message
    alert('Mengirim pesan ke WhatsApp...');
});

// Scroll to top functionality
let scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .feature-card').forEach(card => {
    observer.observe(card);
});

// Gallery Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentImageIndex = 0;
let galleryImages = [];

// Store gallery images data
galleryItems.forEach(item => {
    const img = item.querySelector('img');
    galleryImages.push({
        src: img.src.replace('?w=600', ''),
        alt: img.alt
    });
});

// Open lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentImageIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = 'flex';
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateLightboxImage() {
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

// Close lightbox
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-next').addEventListener('click', nextImage);
document.querySelector('.lightbox-prev').addEventListener('click', prevImage);

// Close when clicking on overlay (but not on image)
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

