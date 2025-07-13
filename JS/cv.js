// ================== CÓDIGO EXISTENTE ==================
// Función para el modo oscuro/claro
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Aplicar el tema guardado
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Manejar el clic del botón
    toggleButton.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Actualizar el año actual en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Efecto de scroll suave para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación de habilidades al aparecer
    const skillBars = document.querySelectorAll('.skill-level');
    
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };
    
    // Observador de intersección para animar habilidades cuando son visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Traductor de Google
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'es',
            includedLanguages: 'en,es,fr,de,it,pt',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    }
    
    // Cargar el script del traductor si no está ya cargado
    if (!window.google || !window.google.translate) {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
    }
    
    // Mejorar la accesibilidad del botón de descarga
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('focus', function() {
            this.style.outline = `2px solid ${getComputedStyle(document.documentElement).getPropertyValue('--primary-color')}`;
            this.style.outlineOffset = '2px';
        });
        
        downloadBtn.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    }
    
    // Efecto hover para las tarjetas de sección
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Corrección del modo oscuro mejorado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar el tema al cargar la página
    function checkTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const currentTheme = savedTheme === 'system' ? systemTheme : savedTheme;
        
        document.body.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        
        // Actualizar el icono del botón
        const toggleButton = document.getElementById('toggle-dark-mode');
        if (toggleButton) {
            const icon = toggleButton.querySelector('i');
            if (currentTheme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    
    // Escuchar cambios en las preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme);
    
    // Inicializar
    checkTheme();
});

// ================== SISTEMA DE TRADUCCIÓN MEJORADO ==================
document.addEventListener('DOMContentLoaded', function() {
    // Textos traducidos para 10 idiomas (actualizado y completo)
    const translations = {
        'en': {
            'page_title': 'Pedro Ortiz Plaza - Professional CV',
            'header_title': 'Pedro Ortiz Plaza',
            'header_subtitle': 'Administrative & Systems Programmer',
            'location': 'Castilla-La Mancha, Spain',
            'menu_experience': 'Experience',
            'menu_education': 'Education',
            'menu_skills': 'Skills',
            'menu_other': 'Other Info',
            'menu_language': 'Language',
            'download_cv': 'Download CV',
            'experience_title': 'Professional Experience',
            'internship_title': 'Vocational Training Internship',
            'internship_description': 'Systems Programming - CEAT. Internship consisting of 120 hours.',
            'admin_degree': 'Alcomasa - 520 hours of internships',
            'basic_admin': 'Virtual Internships - 520 hours of internships',
            'systems_programming_degree': 'Level 3 Training Title in Computer Systems Programming',
            'equivalent_degree': 'Systems Programming, equivalent to a higher degree',
            'ceat_course': 'CEAT - Computer Systems Programming',
            'firebase_deploy': 'Deployment with Firebase and CPanel',
            'springboot_use': 'Use of Spring Boot and its modules (Thymeleaf, Security and database)',
            'wordpress_training': 'Use and training in WordPress with Elementor',
            'intellij_use': 'Use of IntelliJ IDEA and Java',
            'phpmyadmin_use': 'Database use with PHP MyAdmin and XAMPP',
            'vscode_use': 'Use of Visual Studio Code (HTML, CSS and JavaScript)',
            'bootstrap_use': 'Use of Bootstrap',
            'daw_course': 'Higher degree course in (DAW) Web Application Development',
            'netbeans_java': 'Apache NetBeans and Java',
            'windows_software': 'Use of Windows software',
            'linux_software': 'Use of software from different Linux distributions',
            'command_line': 'Use of command line in Windows and different Linux distributions',
            'virtualbox_use': 'Use of virtual machines with VirtualBox',
            'vscode_php': 'Use of Visual Studio Code (HTML, CSS and PHP)',
            'mysql_use': 'Use of MySQL Server',
            'hardware_knowledge': 'Knowledge about internal computer hardware',
            'administration': 'Administration',
            'typing_course': 'Medium grade course in typing and computer programs',
            'windows': 'Windows',
            'sol_software': 'SOL software',
            'office_package': 'Office package',
            'typing': 'Typing',
            'basic_degree': 'Basic Training Title / ESO',
            'secondary_education': 'Compulsory Secondary Education',
            'basic_admin_course': 'Basic Vocational Training in Administration',
            'technical_skills': 'Technical',
            'windows_systems': 'Windows Systems',
            'paqute_office': 'Office package',
            'software_sol': 'SOL Software',
            'bios_config': 'BIOS Configuration',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Databases',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Hardware Components',
            'personal_skills': 'Personal',
            'responsible': 'Responsible and punctual',
            'organized': 'Organized',
            'resolute': 'Resolute',
            'teamwork': 'Ability to work in a team',
            'good_presence': 'Good presence and treatment',
            'spanish_native': 'Spanish (Native)',
            'english_b1': 'English (B1)',
            'disability': 'Recognized disability of 40%',
            'politics_interest': 'Interest in national and international politics',
            'portfolio_available': 'Portfolio available on',
            'connect_with_me': 'Connect with me',
            'quick_links': 'Quick links',
            'my_portfolio': 'My Portfolio',
            'contact': 'Contact',
            'all_rights': 'All rights reserved.'
        },
        'es': {
            'page_title': 'Pedro Ortiz Plaza - CV Profesional',
            'header_title': 'Pedro Ortiz Plaza',
            'header_subtitle': 'Administrativo & Programador de Sistemas',
            'location': 'Castilla-La Mancha, España',
            'menu_experience': 'Experiencia',
            'menu_education': 'Formación',
            'menu_skills': 'Habilidades',
            'menu_other': 'Otros datos',
            'menu_language': 'Idioma',
            'download_cv': 'Descargar CV',
            'experience_title': 'Experiencia Profesional',
            'internship_title': 'Prácticas de Formación Profesional',
            'internship_description': 'Programación de Sistemas - CEAT. Prácticas que constan de 120 horas.',
            'admin_degree': 'Alcomasa - 520 horas de practicas',
            'basic_admin': 'Practicas Virtuales - 520 horas de practicas',
            'systems_programming_degree': 'Título Formación de grado 3 en Programación de Sistemas Informáticos',
            'equivalent_degree': 'Programación de Sistemas, equivalente a un grado superior',
            'ceat_course': 'CEAT - Programación de Sistemas Informáticos',
            'firebase_deploy': 'Despliegue con Firebase y CPanel',
            'springboot_use': 'Uso de Spring Boot y sus módulos (Thymeleaf, Security y base de datos)',
            'wordpress_training': 'Uso y formación en WordPress con Elementor',
            'intellij_use': 'Uso de IntelliJ IDEA y Java',
            'phpmyadmin_use': 'Uso de BDD con PHP MyAdmin y XAMPP',
            'vscode_use': 'Uso de Visual Studio Code (HTML, CSS y JavaScript)',
            'bootstrap_use': 'Uso de Bootstrap',
            'daw_course': 'Curso de grado superior de (DAW) Desarrollo de Aplicaciones Web',
            'netbeans_java': 'Apache NetBeans y Java',
            'windows_software': 'Uso de software de Windows',
            'linux_software': 'Uso de software de diferentes distribuciones de Linux',
            'command_line': 'Uso de línea de comandos en Windows y diferentes distribuciones de Linux',
            'virtualbox_use': 'Uso de máquinas virtuales con VirtualBox',
            'vscode_php': 'Uso de Visual Studio Code (HTML, CSS y PHP)',
            'mysql_use': 'Uso de MySQL Server',
            'hardware_knowledge': 'Conocimientos sobre el hardware interno de los equipos',
            'administration': 'Administración',
            'typing_course': 'Curso de grado Medio de mecanografía y programas informáticos',
            'windows': 'Windows',
            'sol_software': 'Software del SOL',
            'office_package': 'Paquete Office',
            'typing': 'Mecanografía',
            'basic_degree': 'Título Ciclo Formativo Básico / ESO',
            'secondary_education': 'Educación Secundaria Obligatoria',
            'basic_admin_course': 'Formación Profesional Básica de Administración',
            'technical_skills': 'Técnicas',
            'windows_systems': 'Sistemas Windows',
            'paqute_office': 'Paquete Office',
            'software_sol': 'Software del SOL',
            'bios_config': 'Configuración BIOS',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Bases de datos',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Componentes Hardware',
            'personal_skills': 'Personales',
            'responsible': 'Responsable y puntual',
            'organized': 'Organizado',
            'resolute': 'Resolutivo',
            'teamwork': 'Capacidad para trabajar en equipo',
            'good_presence': 'Buena presencia y trato',
            'spanish_native': 'Español (Nativo)',
            'english_b1': 'Inglés (B1)',
            'disability': 'Discapacidad reconocida del 40%',
            'politics_interest': 'Interés en política nacional e internacional',
            'portfolio_available': 'Portfolio disponible en',
            'connect_with_me': 'Conecta conmigo',
            'quick_links': 'Enlaces rápidos',
            'my_portfolio': 'Mi Portfolio',
            'contact': 'Contacto',
            'all_rights': 'Todos los derechos reservados.'
        },
        'fr': {
            'page_title': 'Pedro Ortiz Plaza - CV Professionnel',
            'header_title': 'Pedro Ortiz Plaza',
            'header_subtitle': 'Administratif & Programmeur de Systèmes',
            'location': 'Castille-La Manche, Espagne',
            'menu_experience': 'Expérience',
            'menu_education': 'Formation',
            'menu_skills': 'Compétences',
            'menu_other': 'Autres informations',
            'menu_language': 'Langue',
            'download_cv': 'Télécharger CV',
            'experience_title': 'Expérience Professionnelle',
            'internship_title': 'Stage de Formation Professionnelle',
            'internship_description': 'Programmation de Systèmes - CEAT. Stage de 120 heures.',
            'admin_degree': 'Alcomasa - 520 heures de stage',
            'basic_admin': 'Stages virtuels - 520 heures de stage',
            'systems_programming_degree': 'Titre de Formation de Niveau 3 en Programmation de Systèmes Informatiques',
            'equivalent_degree': 'Programmation de Systèmes, équivalent à un diplôme supérieur',
            'ceat_course': 'CEAT - Programmation de Systèmes Informatiques',
            'firebase_deploy': 'Déploiement avec Firebase et CPanel',
            'springboot_use': 'Utilisation de Spring Boot et ses modules (Thymeleaf, Security et base de données)',
            'wordpress_training': 'Utilisation et formation sur WordPress avec Elementor',
            'intellij_use': 'Utilisation de IntelliJ IDEA et Java',
            'phpmyadmin_use': 'Utilisation de bases de données avec PHP MyAdmin et XAMPP',
            'vscode_use': 'Utilisation de Visual Studio Code (HTML, CSS et JavaScript)',
            'bootstrap_use': 'Utilisation de Bootstrap',
            'daw_course': 'Cours de diplôme supérieur en (DAW) Développement d\'Applications Web',
            'netbeans_java': 'Apache NetBeans et Java',
            'windows_software': 'Utilisation de logiciels Windows',
            'linux_software': 'Utilisation de logiciels de différentes distributions Linux',
            'command_line': 'Utilisation de la ligne de commande sous Windows et différentes distributions Linux',
            'virtualbox_use': 'Utilisation de machines virtuelles avec VirtualBox',
            'vscode_php': 'Utilisation de Visual Studio Code (HTML, CSS et PHP)',
            'mysql_use': 'Utilisation de MySQL Server',
            'hardware_knowledge': 'Connaissances sur le matériel interne des ordinateurs',
            'administration': 'Administration',
            'typing_course': 'Cours de niveau moyen en dactylographie et programmes informatiques',
            'windows': 'Windows',
            'sol_software': 'Logiciel SOL',
            'office_package': 'Suite Office',
            'typing': 'Dactylographie',
            'basic_degree': 'Titre de Formation de Base / ESO',
            'secondary_education': 'Enseignement Secondaire Obligatoire',
            'basic_admin_course': 'Formation Professionnelle de Base en Administration',
            'technical_skills': 'Techniques',
            'windows_systems': 'Systèmes Windows',
            'paqute_office': 'Suite Office',
            'software_sol': 'Logiciel SOL',
            'bios_config': 'Configuration BIOS',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Bases de données',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Composants Matériels',
            'personal_skills': 'Personnelles',
            'responsible': 'Responsable et ponctuel',
            'organized': 'Organisé',
            'resolute': 'Résolutif',
            'teamwork': 'Capacité à travailler en équipe',
            'good_presence': 'Bonne présence et traitement',
            'spanish_native': 'Espagnol (Natif)',
            'english_b1': 'Anglais (B1)',
            'disability': 'Handicap reconnu à 40%',
            'politics_interest': 'Intérêt pour la politique nationale et internationale',
            'portfolio_available': 'Portfolio disponible sur',
            'connect_with_me': 'Connectez avec moi',
            'quick_links': 'Liens rapides',
            'my_portfolio': 'Mon Portfolio',
            'contact': 'Contact',
            'all_rights': 'Tous droits réservés.'
        },
        'de': {
            'page_title': 'Pedro Ortiz Plaza - Professioneller Lebenslauf',
            'header_title': 'Pedro Ortiz Plaza',
            'header_subtitle': 'Verwaltungsangestellter & Systemprogrammierer',
            'location': 'Kastilien-La Mancha, Spanien',
            'menu_experience': 'Berufserfahrung',
            'menu_education': 'Ausbildung',
            'menu_skills': 'Fähigkeiten',
            'menu_other': 'Weitere Informationen',
            'menu_language': 'Sprache',
            'download_cv': 'Lebenslauf herunterladen',
            'experience_title': 'Berufserfahrung',
            'internship_title': 'Berufspraktikum',
            'internship_description': 'Systemprogrammierung - CEAT. Praktikum mit 120 Stunden.',
            'admin_degree': 'Alcomasa – 520 Stunden Praktikum',
            'basic_admin': 'Virtuelle Praktika – 520 Stunden Praktikum',
            'systems_programming_degree': 'Ausbildungsabschluss Stufe 3 in der Programmierung von Computersystemen',
            'equivalent_degree': 'Systemprogrammierung, gleichwertig mit einem höheren Abschluss',
            'ceat_course': 'CEAT - Programmierung von Computersystemen',
            'firebase_deploy': 'Bereitstellung mit Firebase und CPanel',
            'springboot_use': 'Verwendung von Spring Boot und seinen Modulen (Thymeleaf, Security und Datenbank)',
            'wordpress_training': 'Nutzung und Schulung in WordPress mit Elementor',
            'intellij_use': 'Verwendung von IntelliJ IDEA und Java',
            'phpmyadmin_use': 'Datenbanknutzung mit PHP MyAdmin und XAMPP',
            'vscode_use': 'Verwendung von Visual Studio Code (HTML, CSS und JavaScript)',
            'bootstrap_use': 'Verwendung von Bootstrap',
            'daw_course': 'Höherer Studiengang in (DAW) Webanwendungsentwicklung',
            'netbeans_java': 'Apache NetBeans und Java',
            'windows_software': 'Nutzung von Windows-Software',
            'linux_software': 'Nutzung von Software verschiedener Linux-Distributionen',
            'command_line': 'Verwendung der Befehlszeile in Windows und verschiedenen Linux-Distributionen',
            'virtualbox_use': 'Verwendung virtueller Maschinen mit VirtualBox',
            'vscode_php': 'Verwendung von Visual Studio Code (HTML, CSS und PHP)',
            'mysql_use': 'Verwendung von MySQL Server',
            'hardware_knowledge': 'Kenntnisse über interne Computerhardware',
            'administration': 'Verwaltung',
            'typing_course': 'Mittlerer Kurs in Maschinenschreiben und Computerprogrammen',
            'windows': 'Windows',
            'sol_software': 'SOL-Software',
            'office_package': 'Office-Paket',
            'typing': 'Maschinenschreiben',
            'basic_degree': 'Grundausbildungsabschluss / ESO',
            'secondary_education': 'Obligatorische Sekundarschulbildung',
            'basic_admin_course': 'Grundberufsausbildung in Verwaltung',
            'technical_skills': 'Technisch',
            'windows_systems': 'Windows-Systeme',
            'paqute_office': 'Office-Paket',
            'software_sol': 'SOL-Software',
            'bios_config': 'BIOS-Konfiguration',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Datenbanken',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Hardware-Komponenten',
            'personal_skills': 'Persönlich',
            'responsible': 'Verantwortungsbewusst und pünktlich',
            'organized': 'Organisiert',
            'resolute': 'Entschlossen',
            'teamwork': 'Fähigkeit zur Teamarbeit',
            'good_presence': 'Gutes Auftreten und Umgang',
            'spanish_native': 'Spanisch (Muttersprache)',
            'english_b1': 'Englisch (B1)',
            'disability': 'Anerkannte Behinderung von 40%',
            'politics_interest': 'Interesse an nationaler und internationaler Politik',
            'portfolio_available': 'Portfolio verfügbar auf',
            'connect_with_me': 'Verbinden Sie sich mit mir',
            'quick_links': 'Schnelllinks',
            'my_portfolio': 'Mein Portfolio',
            'contact': 'Kontakt',
            'all_rights': 'Alle Rechte vorbehalten.'
        },
        'it': {
            'page_title': 'Pedro Ortiz Plaza - CV Professionale',
            'header_title': 'Pedro Ortiz Plaza',
            'header_subtitle': 'Amministrativo & Programmatore di Sistemi',
            'location': 'Castiglia-La Mancia, Spagna',
            'menu_experience': 'Esperienza',
            'menu_education': 'Formazione',
            'menu_skills': 'Competenze',
            'menu_other': 'Altre informazioni',
            'menu_language': 'Lingua',
            'download_cv': 'Scarica CV',
            'experience_title': 'Esperienza Professionale',
            'internship_title': 'Tirocinio di Formazione Professionale',
            'internship_description': 'Programmazione di Sistemi - CEAT. Tirocinio di 120 ore.',
            'admin_degree': 'Alcomasa - 520 ore di tirocinio in Amministrazione',
            'basic_admin': 'Tirocini virtuali - 520 ore di tirocinio',
            'systems_programming_degree': 'Titolo di Formazione di Livello 3 in Programmazione di Sistemi Informatici',
            'equivalent_degree': 'Programmazione di Sistemi, equivalente a un diploma superiore',
            'ceat_course': 'CEAT - Programmazione di Sistemi Informatici',
            'firebase_deploy': 'Distribuzione con Firebase e CPanel',
            'springboot_use': 'Uso di Spring Boot e suoi moduli (Thymeleaf, Security e database)',
            'wordpress_training': 'Uso e formazione in WordPress con Elementor',
            'intellij_use': 'Uso di IntelliJ IDEA e Java',
            'phpmyadmin_use': 'Uso di database con PHP MyAdmin e XAMPP',
            'vscode_use': 'Uso di Visual Studio Code (HTML, CSS e JavaScript)',
            'bootstrap_use': 'Uso di Bootstrap',
            'daw_course': 'Corso di diploma superiore in (DAW) Sviluppo di Applicazioni Web',
            'netbeans_java': 'Apache NetBeans e Java',
            'windows_software': 'Uso di software Windows',
            'linux_software': 'Uso di software di diverse distribuzioni Linux',
            'command_line': 'Uso della riga di comando in Windows e diverse distribuzioni Linux',
            'virtualbox_use': 'Uso di macchine virtuali con VirtualBox',
            'vscode_php': 'Uso di Visual Studio Code (HTML, CSS e PHP)',
            'mysql_use': 'Uso di MySQL Server',
            'hardware_knowledge': 'Conoscenze sull\'hardware interno dei computer',
            'administration': 'Amministrazione',
            'typing_course': 'Corso di diploma medio in dattilografia e programmi informatici',
            'windows': 'Windows',
            'sol_software': 'Software SOL',
            'office_package': 'Pacchetto Office',
            'typing': 'Dattilografia',
            'basic_degree': 'Titolo di Formazione di Base / ESO',
            'secondary_education': 'Istruzione Secondaria Obbligatoria',
            'basic_admin_course': 'Formazione Professionale di Base in Amministrazione',
            'technical_skills': 'Tecniche',
            'windows_systems': 'Sistemi Windows',
            'paqute_office': 'Pacchetto Office',
            'software_sol': 'Software SOL',
            'bios_config': 'Configurazione BIOS',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Basi di dati',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Componenti Hardware',
            'personal_skills': 'Personali',
            'responsible': 'Responsabile e puntuale',
            'organized': 'Organizzato',
            'resolute': 'Risoluto',
            'teamwork': 'Capacità di lavorare in team',
            'good_presence': 'Buona presenza e trattamento',
            'spanish_native': 'Spagnolo (Madrelingua)',
            'english_b1': 'Inglese (B1)',
            'disability': 'Disabilità riconosciuta del 40%',
            'politics_interest': 'Interesse per la politica nazionale e internazionale',
            'portfolio_available': 'Portfolio disponibile su',
            'connect_with_me': 'Connettiti con me',
            'quick_links': 'Link rapidi',
            'my_portfolio': 'Il mio Portfolio',
            'contact': 'Contatto',
            'all_rights': 'Tutti i diritti riservati.'
        },
        'pt': {
            'page_title': 'Pedro Ortiz Plaza - Currículo Profissional',
            'header_title': 'Pedro Ortiz Plaza',
            'header_subtitle': 'Administrativo & Programador de Sistemas',
            'location': 'Castilla-La Mancha, Espanha',
            'menu_experience': 'Experiência',
            'menu_education': 'Formação',
            'menu_skills': 'Habilidades',
            'menu_other': 'Outras informações',
            'menu_language': 'Idioma',
            'download_cv': 'Baixar CV',
            'experience_title': 'Experiência Profissional',
            'internship_title': 'Estágio de Formação Profissional',
            'internship_description': 'Programação de Sistemas - CEAT. Estágio com 120 horas.',
            'admin_degree': 'Alcomasa - 520 horas de estágio',
            'basic_admin': 'Estágios Virtuais - 520 horas de estágio',
            'systems_programming_degree': 'Título de Formação de Nível 3 em Programação de Sistemas Informáticos',
            'equivalent_degree': 'Programação de Sistemas, equivalente a um diploma superior',
            'ceat_course': 'CEAT - Programação de Sistemas Informáticos',
            'firebase_deploy': 'Implantaçao com Firebase e CPanel',
            'springboot_use': 'Uso de Spring Boot e seus módulos (Thymeleaf, Security e banco de dados)',
            'wordpress_training': 'Uso e formação em WordPress com Elementor',
            'intellij_use': 'Uso de IntelliJ IDEA e Java',
            'phpmyadmin_use': 'Uso de banco de dados com PHP MyAdmin e XAMPP',
            'vscode_use': 'Uso de Visual Studio Code (HTML, CSS e JavaScript)',
            'bootstrap_use': 'Uso de Bootstrap',
            'daw_course': 'Curso de diploma superior em (DAW) Desenvolvimento de Aplicações Web',
            'netbeans_java': 'Apache NetBeans e Java',
            'windows_software': 'Uso de software Windows',
            'linux_software': 'Uso de software de diferentes distribuições Linux',
            'command_line': 'Uso da linha de comando no Windows e diferentes distribuições Linux',
            'virtualbox_use': 'Uso de máquinas virtuais com VirtualBox',
            'vscode_php': 'Uso de Visual Studio Code (HTML, CSS e PHP)',
            'mysql_use': 'Uso de MySQL Server',
            'hardware_knowledge': 'Conhecimentos sobre hardware interno de computadores',
            'administration': 'Administração',
            'typing_course': 'Curso de nível médio em datilografia e programas de computador',
            'windows': 'Windows',
            'sol_software': 'Software SOL',
            'office_package': 'Pacote Office',
            'typing': 'Datilografia',
            'basic_degree': 'Título de Formação Básica / ESO',
            'secondary_education': 'Educação Secundária Obrigatória',
            'basic_admin_course': 'Formação Profissional Básica em Administração',
            'technical_skills': 'Técnicas',
            'windows_systems': 'Sistemas Windows',
            'paqute_office': 'Pacote Office',
            'software_sol': 'Software SOL',
            'bios_config': 'Configuração BIOS',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Bancos de dados',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Componentes de Hardware',
            'personal_skills': 'Pessoais',
            'responsible': 'Responsável e pontual',
            'organized': 'Organizado',
            'resolute': 'Resoluto',
            'teamwork': 'Capacidade de trabalhar em equipe',
            'good_presence': 'Boa presença e tratamento',
            'spanish_native': 'Espanhol (Nativo)',
            'english_b1': 'Inglês (B1)',
            'disability': 'Deficiência reconhecida de 40%',
            'politics_interest': 'Interesse em política nacional e internacional',
            'portfolio_available': 'Portfólio disponível em',
            'connect_with_me': 'Conecte-se comigo',
            'quick_links': 'Links rápidos',
            'my_portfolio': 'Meu Portfólio',
            'contact': 'Contato',
            'all_rights': 'Todos os direitos reservados.'
        },
        'ru': {
            'page_title': 'Педро Ортис Пласа - Профессиональное резюме',
            'header_title': 'Педро Ортис Пласа',
            'header_subtitle': 'Администратор и программист систем',
            'location': 'Кастилия-Ла-Манча, Испания',
            'menu_experience': 'Опыт работы',
            'menu_education': 'Образование',
            'menu_skills': 'Навыки',
            'menu_other': 'Другая информация',
            'menu_language': 'Язык',
            'download_cv': 'Скачать резюме',
            'experience_title': 'Профессиональный опыт',
            'internship_title': 'Профессиональная стажировка',
            'internship_description': 'Программирование систем - CEAT. Стажировка продолжительностью 120 часов.',
            'admin_degree': 'Alcomasa - 520 часов практики',
            'basic_admin': 'Виртуальная практика - 520 часов практики',
            'systems_programming_degree': 'Квалификация 3-го уровня по программированию компьютерных систем',
            'equivalent_degree': 'Программирование систем, эквивалентное высшему образованию',
            'ceat_course': 'CEAT - Программирование компьютерных систем',
            'firebase_deploy': 'Развертывание с Firebase и CPanel',
            'springboot_use': 'Использование Spring Boot и его модулей (Thymeleaf, Security и база данных)',
            'wordpress_training': 'Использование и обучение WordPress с Elementor',
            'intellij_use': 'Использование IntelliJ IDEA и Java',
            'phpmyadmin_use': 'Использование баз данных с PHP MyAdmin и XAMPP',
            'vscode_use': 'Использование Visual Studio Code (HTML, CSS и JavaScript)',
            'bootstrap_use': 'Использование Bootstrap',
            'daw_course': 'Курс высшего образования по (DAW) разработке веб-приложений',
            'netbeans_java': 'Apache NetBeans и Java',
            'windows_software': 'Использование программного обеспечения Windows',
            'linux_software': 'Использование программного обеспечения различных дистрибутивов Linux',
            'command_line': 'Использование командной строки в Windows и различных дистрибутивах Linux',
            'virtualbox_use': 'Использование виртуальных машин с VirtualBox',
            'vscode_php': 'Использование Visual Studio Code (HTML, CSS и PHP)',
            'mysql_use': 'Использование MySQL Server',
            'hardware_knowledge': 'Знания о внутреннем оборудовании компьютеров',
            'administration': 'Администрирование',
            'typing_course': 'Средний курс машинописи и компьютерных программ',
            'windows': 'Windows',
            'sol_software': 'Программное обеспечение SOL',
            'office_package': 'Офисный пакет',
            'typing': 'Машинопись',
            'basic_degree': 'Базовый уровень образования / ESO',
            'secondary_education': 'Обязательное среднее образование',
            'basic_admin_course': 'Базовая профессиональная подготовка по администрированию',
            'technical_skills': 'Технические',
            'windows_systems': 'Системы Windows',
            'paqute_office': 'Офисный пакет',
            'software_sol': 'Программное обеспечение SOL',
            'bios_config': 'Конфигурация BIOS',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'Базы данных',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'Аппаратные компоненты',
            'personal_skills': 'Личные',
            'responsible': 'Ответственный и пунктуальный',
            'organized': 'Организованный',
            'resolute': 'Решительный',
            'teamwork': 'Способность работать в команде',
            'good_presence': 'Хорошее присутствие и обращение',
            'spanish_native': 'Испанский (родной)',
            'english_b1': 'Английский (B1)',
            'disability': 'Признанная инвалидность 40%',
            'politics_interest': 'Интерес к национальной и международной политике',
            'portfolio_available': 'Портфолио доступно на',
            'connect_with_me': 'Свяжитесь со мной',
            'quick_links': 'Быстрые ссылки',
            'my_portfolio': 'Мое портфолио',
            'contact': 'Контакт',
            'all_rights': 'Все права защищены.'
        },
        'zh': {
            'page_title': '佩德罗·奥尔蒂斯·普拉萨 - 专业简历',
            'header_title': '佩德罗·奥尔蒂斯·普拉萨',
            'header_subtitle': '行政与系统程序员',
            'location': '卡斯蒂利亚-拉曼查, 西班牙',
            'menu_experience': '工作经验',
            'menu_education': '教育',
            'menu_skills': '技能',
            'menu_other': '其他信息',
            'menu_language': '语言',
            'download_cv': '下载简历',
            'experience_title': '专业经验',
            'internship_title': '职业培训实习',
            'internship_description': '系统编程 - CEAT。实习时间为120小时。',
            'admin_degree': 'Alcomasa - 520小时实习',
            'basic_admin': '虚拟实习 - 520小时实习',
            'systems_programming_degree': '计算机系统编程3级培训证书',
            'equivalent_degree': '系统编程，相当于高等学位',
            'ceat_course': 'CEAT - 计算机系统编程',
            'firebase_deploy': '使用Firebase和CPanel部署',
            'springboot_use': '使用Spring Boot及其模块（Thymeleaf、Security和数据库）',
            'wordpress_training': '使用和培训WordPress与Elementor',
            'intellij_use': '使用IntelliJ IDEA和Java',
            'phpmyadmin_use': '使用PHP MyAdmin和XAMPP进行数据库操作',
            'vscode_use': '使用Visual Studio Code（HTML、CSS和JavaScript）',
            'bootstrap_use': '使用Bootstrap',
            'daw_course': '高等课程（DAW）Web应用开发',
            'netbeans_java': 'Apache NetBeans和Java',
            'windows_software': '使用Windows软件',
            'linux_software': '使用不同Linux发行版的软件',
            'command_line': '在Windows和不同Linux发行版中使用命令行',
            'virtualbox_use': '使用VirtualBox虚拟机',
            'vscode_php': '使用Visual Studio Code（HTML、CSS和PHP）',
            'mysql_use': '使用MySQL Server',
            'hardware_knowledge': '关于计算机内部硬件的知识',
            'administration': '行政管理',
            'typing_course': '中级打字和计算机程序课程',
            'windows': 'Windows',
            'sol_software': 'SOL软件',
            'office_package': '办公套件',
            'typing': '打字',
            'basic_degree': '基础教育证书 / ESO',
            'secondary_education': '义务教育',
            'basic_admin_course': '基础行政管理职业培训',
            'technical_skills': '技术',
            'windows_systems': 'Windows系统',
            'paqute_office': '办公套件',
            'software_sol': 'SOL软件',
            'bios_config': 'BIOS配置',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': '数据库',
            'vbox': 'VirtualBox',
            'componentes_hardware': '硬件组件',
            'personal_skills': '个人',
            'responsible': '负责和准时',
            'organized': '有条理',
            'resolute': '果断',
            'teamwork': '团队合作能力',
            'good_presence': '良好的形象和待人接物',
            'spanish_native': '西班牙语（母语）',
            'english_b1': '英语（B1）',
            'disability': '认可的40%残疾',
            'politics_interest': '对国家和国际政治的兴趣',
            'portfolio_available': '作品集可在',
            'connect_with_me': '与我联系',
            'quick_links': '快速链接',
            'my_portfolio': '我的作品集',
            'contact': '联系方式',
            'all_rights': '保留所有权利。'
        },
        'ja': {
            'page_title': 'ペドロ・オルティス・プラザ - プロフェッショナル履歴書',
            'header_title': 'ペドロ・オルティス・プラザ',
            'header_subtitle': '事務 & システムプログラマー',
            'location': 'カスティーリャ・ラ・マンチャ, スペイン',
            'menu_experience': '職務経験',
            'menu_education': '学歴',
            'menu_skills': 'スキル',
            'menu_other': 'その他の情報',
            'menu_language': '言語',
            'download_cv': '履歴書をダウンロード',
            'experience_title': '職務経験',
            'internship_title': '職業訓練インターンシップ',
            'internship_description': 'システムプログラミング - CEAT。120時間のインターンシップ。',
            'admin_degree': '「Alcomasa - 520時間のインターンシップ」',
            'basic_admin': '「バーチャルインターンシップ - 520時間の実習」',
            'systems_programming_degree': 'コンピュータシステムプログラミングのレベル3トレーニングタイトル',
            'equivalent_degree': 'システムプログラミング、高等学位に相当',
            'ceat_course': 'CEAT - コンピュータシステムプログラミング',
            'firebase_deploy': 'FirebaseとCPanelを使用したデプロイ',
            'springboot_use': 'Spring Bootとそのモジュールの使用（Thymeleaf、Security、データベース）',
            'wordpress_training': 'WordPressとElementorの使用とトレーニング',
            'intellij_use': 'IntelliJ IDEAとJavaの使用',
            'phpmyadmin_use': 'PHP MyAdminとXAMPPを使用したデータベース操作',
            'vscode_use': 'Visual Studio Codeの使用（HTML、CSS、JavaScript）',
            'bootstrap_use': 'Bootstrapの使用',
            'daw_course': '高等コース（DAW）ウェブアプリケーション開発',
            'netbeans_java': 'Apache NetBeansとJava',
            'windows_software': 'Windowsソフトウェアの使用',
            'linux_software': 'さまざまなLinuxディストリビューションのソフトウェアの使用',
            'command_line': 'WindowsおよびさまざまなLinuxディストリビューションでのコマンドラインの使用',
            'virtualbox_use': 'VirtualBoxを使用した仮想マシンの使用',
            'vscode_php': 'Visual Studio Codeの使用（HTML、CSS、PHP）',
            'mysql_use': 'MySQL Serverの使用',
            'hardware_knowledge': 'コンピュータ内部ハードウェアに関する知識',
            'administration': '管理',
            'typing_course': '中級タイピングとコンピュータプログラムのコース',
            'windows': 'Windows',
            'sol_software': 'SOLソフトウェア',
            'office_package': 'オフィススイート',
            'typing': 'タイピング',
            'basic_degree': '基礎教育証明書 / ESO',
            'secondary_education': '義務中等教育',
            'basic_admin_course': '基礎管理職業訓練',
            'technical_skills': '技術',
            'windows_systems': 'Windowsシステム',
            'paqute_office': 'オフィススイート',
            'software_sol': 'SOLソフトウェア',
            'bios_config': 'BIOS設定',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'データベース',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'ハードウェアコンポーネント',
            'personal_skills': '個人',
            'responsible': '責任感があり時間厳守',
            'organized': '整理整頓',
            'resolute': '決断力がある',
            'teamwork': 'チームワーク能力',
            'good_presence': '良い印象と対応',
            'spanish_native': 'スペイン語（母国語）',
            'english_b1': '英語（B1）',
            'disability': '認定障害40％',
            'politics_interest': '国内および国際政治への関心',
            'portfolio_available': 'ポートフォリオはこちら',
            'connect_with_me': '連絡する',
            'quick_links': 'クイックリンク',
            'my_portfolio': '私のポートフォリオ',
            'contact': '連絡先',
            'all_rights': '全著作権所有。'
        },
        'ar': {
            'page_title': 'بيدرو أورتيز بلازا - السيرة الذاتية المهنية',
            'header_title': 'بيدرو أورتيز بلازا',
            'header_subtitle': 'إداري ومبرمج أنظمة',
            'location': 'كاستيا لا مانتشا، إسبانيا',
            'menu_experience': 'الخبرة',
            'menu_education': 'التعليم',
            'menu_skills': 'المهارات',
            'menu_other': 'معلومات أخرى',
            'menu_language': 'اللغة',
            'download_cv': 'تحميل السيرة الذاتية',
            'experience_title': 'الخبرة المهنية',
            'internship_title': 'تدريب مهني',
            'internship_description': 'برمجة الأنظمة - CEAT. تدريب مدته 120 ساعة.',
            'admin_degree': 'ألكوماسا - 520 ساعة من التدريب العملي',
            'basic_admin':'تدريب عملي افتراضي - 520 ساعة من التدريب',
            'systems_programming_degree': 'عنوان التدريب من المستوى 3 في برمجة أنظمة الكمبيوتر',
            'equivalent_degree': 'برمجة الأنظمة، تعادل درجة أعلى',
            'ceat_course': 'CEAT - برمجة أنظمة الكمبيوتر',
            'firebase_deploy': 'النشر باستخدام Firebase وCPanel',
            'springboot_use': 'استخدام Spring Boot ووحداته (Thymeleaf، Security وقاعدة البيانات)',
            'wordpress_training': 'استخدام وتدريب WordPress مع Elementor',
            'intellij_use': 'استخدام IntelliJ IDEA وJava',
            'phpmyadmin_use': 'استخدام قاعدة البيانات مع PHP MyAdmin وXAMPP',
            'vscode_use': 'استخدام Visual Studio Code (HTML، CSS وJavaScript)',
            'bootstrap_use': 'استخدام Bootstrap',
            'daw_course': 'دورة درجة عليا في (DAW) تطوير تطبيقات الويب',
            'netbeans_java': 'Apache NetBeans وJava',
            'windows_software': 'استخدام برامج Windows',
            'linux_software': 'استخدام برامج توزيعات Linux المختلفة',
            'command_line': 'استخدام سطر الأوامر في Windows وتوزيعات Linux المختلفة',
            'virtualbox_use': 'استخدام الأجهزة الافتراضية مع VirtualBox',
            'vscode_php': 'استخدام Visual Studio Code (HTML، CSS وPHP)',
            'mysql_use': 'استخدام MySQL Server',
            'hardware_knowledge': 'المعرفة حول أجهزة الكمبيوتر الداخلية',
            'administration': 'الإدارة',
            'typing_course': 'دورة متوسطة في الكتابة على الآلة الكاتبة وبرامج الكمبيوتر',
            'windows': 'Windows',
            'sol_software': 'برنامج SOL',
            'office_package': 'حزمة Office',
            'typing': 'الكتابة على الآلة الكاتبة',
            'basic_degree': 'عنوان التدريب الأساسي / ESO',
            'secondary_education': 'التعليم الثانوي الإلزامي',
            'basic_admin_course': 'التدريب المهني الأساسي في الإدارة',
            'technical_skills': 'تقنية',
            'windows_systems': 'أنظمة Windows',
            'paqute_office': 'حزمة Office',
            'software_sol': 'برنامج SOL',
            'bios_config': 'تكوين BIOS',
            'java': 'Java',
            'html': 'HTML',
            'css': 'CSS',
            'js': 'JavaScript',
            'php': 'PHP',
            'bdd': 'قواعد البيانات',
            'vbox': 'VirtualBox',
            'componentes_hardware': 'مكونات الأجهزة',
            'personal_skills': 'شخصية',
            'responsible': 'مسؤول وملتزم بالمواعيد',
            'organized': 'منظم',
            'resolute': 'حازم',
            'teamwork': 'القدرة على العمل ضمن فريق',
            'good_presence': 'حضور جيد ومعاملة',
            'spanish_native': 'الإسبانية (اللغة الأم)',
            'english_b1': 'الإنجليزية (B1)',
            'disability': 'إعاقة معترف بها بنسبة 40٪',
            'politics_interest': 'الاهتمام بالسياسة الوطنية والدولية',
            'portfolio_available': 'المحفظة متاحة على',
            'connect_with_me': 'تواصل معي',
            'quick_links': 'روابط سريعة',
            'my_portfolio': 'محفظتي',
            'contact': 'اتصال',
            'all_rights': 'جميع الحقوق محفوظة.'
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Cambiar el atributo lang del html
        document.documentElement.lang = lang;
        
        // Traducir todos los elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Actualizar el idioma activo en los botones
        document.querySelectorAll('.language-dropdown-content a').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Guardar el idioma seleccionado
        localStorage.setItem('language', lang);
    }

    // Inicializar el idioma (español por defecto)
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);

    // Manejar clics en los botones de idioma
    document.querySelectorAll('.language-dropdown-content a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});