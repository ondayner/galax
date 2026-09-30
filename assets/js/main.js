lucide.createIcons();

let currentLang = 'es';
const i18n = {
    es: {
        nav_start: "Inicio", nav_services: "Servicios", nav_plans: "Planes", nav_contact: "Contacto", web_platform: "Plataforma Web",
        hero_title_1: "PROTEGE TU", hero_title_2: "INVERSIÓN", hero_title_3: "CON CONFIANZA",
        hero_subtitle: "Sistema de rastreo satelital de máxima precisión. Monitoreo en tiempo real, apagado de motor remoto y geocercas inteligentes para tu vehículo o motocicleta.",
        download_on: "DESCARGAR EN", get_on: "CONSÍGUELO EN EL", hero_btn_platform: "INGRESAR A LA PLATAFORMA",
        stat_latency: "Respuesta Telemetría", stat_coverage: "Cobertura Nacional", stat_support: "Soporte Continuo",
        services_subtitle: "TECNOLOGÍA DE TELEMETRÍA", services_title: "Servicios de Rastreo de Vanguardia", services_desc: "Ofrecemos el control total sobre la seguridad de tus unidades desde cualquier dispositivo.",
        serv_1_title: "Ubicación en Tiempo Real", serv_1_desc: "Sigue el recorrido exacto de tus vehículos con actualización constante de posición, velocidad y ruta.",
        serv_2_title: "Apagado de Motor Remoto", serv_2_desc: "Inmoviliza tu vehículo o moto de forma segura a través de nuestra App o comandos SMS instantáneos.",
        serv_3_title: "Geocercas & Alertas", serv_3_desc: "Define perímetros seguros y recibe alertas inmediatas cuando tu vehículo entre o salga de las zonas autorizadas.",
        serv_4_title: "Historial de Recorridos", serv_4_desc: "Accede al historial detallado de viajes, paradas, kilometraje y reportes de comportamiento de manejo.",
        serv_5_title: "Multi-Plataforma", serv_5_desc: "Monitorea desde tu celular Android, iPhone o desde cualquier navegador web a través de nuestro portal oficial.",
        serv_6_title: "Instalación Profesional", serv_6_desc: "Técnicos certificados realizan una instalación limpia, discreta y segura sin alterar el sistema eléctrico de tu unidad.",
        pricing_subtitle: "TARIFAS Y PLANES DE SERVICIO", pricing_title: "Inversión Transparente", pricing_desc: "Precios fijados en divisas USD para garantizar la mejor calidad de servicio continuo.",
        car_category: "VEHÍCULOS / PARTICULARES", car_title: "Plan Carros", moto_category: "MOTOCICLETAS", moto_title: "Plan Motos",
        equip_install: "Equipo + Instalación:", monthly_fee: "Mensualidad de Servicio:",
        inc_1: "Ubicación GPS en vivo 24/7", inc_2: "Apagado de motor vía celular", inc_3: "Acceso App Android, iOS y Web", inc_4: "Geocercas e historial de rutas", inc_moto: "GPS Ultra Compacto Impermeable",
        btn_solicitar_car: "Solicitar para Carro", btn_solicitar_moto: "Solicitar para Moto",
        contact_title: "¿Listo para proteger tu vehículo?", contact_desc: "Contáctanos hoy mismo para coordinar la instalación de tu equipo GPS satelital en cualquier parte de Venezuela.",
        whatsapp_btn: "Contactar por WhatsApp", label_name: "NOMBRE COMPLETO", label_phone: "TELÉFONO / WHATSAPP", label_vehicle: "TIPO DE VEHÍCULO",
        opt_car: "Carro / Camioneta ($100)", opt_moto: "Motocicleta ($80)", opt_fleet: "Flota Comercial", btn_send: "Enviar Solicitud", msg_sent: "¡Gracias! Nos pondremos en contacto contigo a la brevedad."
    },
    en: {
        nav_start: "Home", nav_services: "Services", nav_plans: "Plans", nav_contact: "Contact", web_platform: "Web Platform",
        hero_title_1: "PROTECT YOUR", hero_title_2: "INVESTMENT", hero_title_3: "WITH CONFIDENCE",
        hero_subtitle: "High precision satellite tracking system. Real-time monitoring, remote engine cutoff, and smart geofencing for your car or motorcycle.",
        download_on: "GET IT ON", get_on: "DOWNLOAD ON THE", hero_btn_platform: "ACCESS WEB PLATFORM",
        stat_latency: "Telemetry Response", stat_coverage: "National Coverage", stat_support: "24/7 Support",
        services_subtitle: "TELEMETRY TECHNOLOGY", services_title: "Next-Gen Tracking Services", services_desc: "We provide total control over your vehicle safety from any device.",
        serv_1_title: "Real-Time Tracking", serv_1_desc: "Track exact location with continuous updates on position, speed, and heading.",
        serv_2_title: "Remote Engine Cutoff", serv_2_desc: "Immobilize your vehicle or motorcycle safely via our Mobile App or instant SMS commands.",
        serv_3_title: "Geofencing & Alerts", serv_3_desc: "Set secure perimeters and get instant notifications upon entry or exit.",
        serv_4_title: "Route History", serv_4_desc: "Access detailed trip logs, stops, mileage, and driver behavior reports.",
        serv_5_title: "Multi-Platform Access", serv_5_desc: "Monitor from your Android device, iPhone, or any modern web browser.",
        serv_6_title: "Professional Installation", serv_6_desc: "Certified technicians perform clean, discreet, and safe installations.",
        pricing_subtitle: "RATES & SERVICE PLANS", pricing_title: "Transparent Pricing", pricing_desc: "Rates in USD currency to ensure continuous, high-quality service.",
        car_category: "CARS / PERSONAL VEHICLES", car_title: "Car Plan", moto_category: "MOTORCYCLES", moto_title: "Motorcycle Plan",
        equip_install: "Equipment + Installation:", monthly_fee: "Monthly Service Fee:",
        inc_1: "24/7 Live GPS tracking", inc_2: "Engine cutoff via phone", inc_3: "Android, iOS & Web access", inc_4: "Geofences & route history", inc_moto: "Ultra-compact Waterproof GPS",
        btn_solicitar_car: "Order for Car", btn_solicitar_moto: "Order for Motorcycle",
        contact_title: "Ready to protect your vehicle?", contact_desc: "Contact us today to schedule your satellite GPS installation anywhere in Venezuela.",
        whatsapp_btn: "Contact on WhatsApp", label_name: "FULL NAME", label_phone: "PHONE / WHATSAPP", label_vehicle: "VEHICLE TYPE",
        opt_car: "Car / SUV ($100)", opt_moto: "Motorcycle ($80)", opt_fleet: "Commercial Fleet", btn_send: "Submit Request", msg_sent: "Thank you! We will get in touch with you shortly."
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('lang-indicator').textContent = currentLang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
    });
}

function initThemePreference() {
    const html = document.documentElement;
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (systemPrefersDark) {
        html.classList.add('dark'); html.classList.remove('light');
        iconSun.classList.add('hidden'); iconMoon.classList.remove('hidden');
    } else {
        html.classList.add('light'); html.classList.remove('dark');
        iconSun.classList.remove('hidden'); iconMoon.classList.add('hidden');
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark'); html.classList.add('light');
        iconSun.classList.remove('hidden'); iconMoon.classList.add('hidden');
    } else {
        html.classList.remove('light'); html.classList.add('dark');
        iconSun.classList.add('hidden'); iconMoon.classList.remove('hidden');
    }
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    drawer.classList.toggle('hidden');
    drawer.classList.toggle('flex');
}

let scene, camera, renderer, particleSystem, animFrameId;

function init3D() {
    const canvas = document.getElementById('webgl-canvas');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const count = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for(let i=0; i<count*3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0x00f0ff,
        size: 0.15,
        transparent: true,
        opacity: 0.35
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function animate3D() {
    animFrameId = requestAnimationFrame(animate3D);
    if(particleSystem) {
        particleSystem.rotation.y += 0.0003;
        particleSystem.rotation.x += 0.0001;
    }
    renderer.render(scene, camera);
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    const hologram = document.getElementById('scroll-hologram-wrapper');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    tl.to(hologram, { scale: 1.5, x: "22vw", rotation: 180, duration: 1, ease: "none" })
        .to(hologram, { scale: 0.85, x: "-25vw", rotation: 360, duration: 1, ease: "none" })
        .to(hologram, { scale: 0.45, opacity: 0.2, x: "0vw", rotation: 540, duration: 1, ease: "none" });
}

window.onload = function() {
    initThemePreference();
    init3D();
    animate3D();
    initScrollAnimations();
};
