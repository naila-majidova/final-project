const İconHealthCenterGithub = document.querySelector(".health-center-github");
const İconHealthCenterSite = document.querySelector(".health-center");
const İconCurrencyConverterGithub = document.querySelector(
    ".currency-converter-github"
);
const İconCurrencyConverterSite = document.querySelector(
    ".currency-converter-site"
);
const İconToDoAppGithub = document.querySelector(".to-do-app-github");
const İconToDoAppSite = document.querySelector(".to-do-app-site");
const aboutTabs = document.querySelector(".about-tabs");
const aboutTabsAll = document.querySelectorAll(".about-tab");
const personalInfoTab = document.querySelector("#personal-info");
const skillsTab = document.querySelector("#skills");
const educationTab = document.querySelector("#education");
const aboutContents = document.querySelector(".about-contents");
const aboutContentAll = document.querySelectorAll(".about-content");
const personalInfoContent = document.querySelector("#personal-info-content");
const skillsContent = document.querySelector("#skills-content");
const educationContent = document.querySelector("#education-content  ");
const seeMoreButton = document.querySelector(".see-more");
const clipboardText = document.querySelector("span .cliboard-text");

aboutTabs.addEventListener("click", (e) => {
    aboutTabsAll.forEach((a) => {
        a.classList.remove("about-active-tab");
    });
    aboutContentAll.forEach((b) => {
        b.classList.remove("about-active-tab");
    });
    e.target.classList.add("about-active-tab");
});

personalInfoTab.addEventListener("click", () => {
    personalInfoContent.style = "display: block";
    skillsContent.style = "display: none";
    educationContent.style = "display: none";
});
skillsTab.addEventListener("click", () => {
    personalInfoContent.style = "display: none";
    skillsContent.style = "display: block";
    educationContent.style = "display: none";
});
educationTab.addEventListener("click", () => {
    personalInfoContent.style = "display: none";
    skillsContent.style = "display: none";
    educationContent.style = "display: block";
});

İconCurrencyConverterGithub.addEventListener("click", () => {
    window.open(
        "https://github.com/naila-majidova/converter",
        "_blank"
    );
});
İconToDoAppGithub.addEventListener("click", () => {
    window.open("https://github.com/naila-majidova/to-do-list", "_blank");
});


let counter = 0;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const sliderButton = document.querySelectorAll(".slider-button");
const slides = document.querySelector(".slides");
const slide = document.querySelector(".slide");
const max = document.querySelectorAll(".slide").length - 1;


const sliderFunction = () => {
    if (counter < max) {
        counter++;
        slides.style.left = 425 + -600 * counter + "px";
    } else {
        counter = 0;
        slides.style.left = 425 + -600 * counter + "px";
    }
};

//timer ile islemek ucun funksiyalar
let timer = setInterval(sliderFunction, 2000);
slides.addEventListener("mouseover", () => {
    clearInterval(timer);
    // console.log("dayandi")
});
slides.addEventListener("mouseout", () => {
    timer = setInterval(sliderFunction, 2000);
    // console.log("basladi")
});

//slider buttonlari ucun funksiyalar
nextButton.addEventListener("click", sliderFunction);
prevButton.addEventListener("click", () => {
    if (counter >= 1) {
        counter--;
        // console.log(counter);
        slides.style.left = 425 + -600 * counter + "px";
    } else {
        // console.log(counter);
        counter = max;
        slides.style.left = 425 + -600 * counter + "px";
    }
});

prevButton.addEventListener("mouseover", () => {
    clearInterval(timer);
    // console.log("maus butondadir dayandi")
});
prevButton.addEventListener("mouseout", () => {
    timer = setInterval(sliderFunction, 2000);
    // console.log("maus butonda deyil basladi")
});

nextButton.addEventListener("mouseover", () => {
    clearInterval(timer);
    // console.log("maus butondadir dayandi")
});
nextButton.addEventListener("mouseout", () => {
    timer = setInterval(sliderFunction, 2000);
    // console.log("maus butonda deyil basladi")
});

seeMoreButton.addEventListener("click", () => {
    window.open("https://github.com/naila-majidova", "_blank");
});

/*                  DİL DEYİSMEK FUNKSİYASİ             */

const languages = document.querySelector(".languages");
const language = document.querySelectorAll("#lang");

/*              TERCUME OLUNACAQ ELEMENTLER         */
const tabTitleHome = document.querySelector("#tab-title-home");
const tabTitleAbout = document.querySelector("#tab-title-about");
const tabTitleProjects = document.querySelector("#tab-title-projects");
const tabTitleContact = document.querySelector("#tab-title-contact");
const sectionTitleHome = document.querySelector("#section-title-home");
const homeText = document.querySelector(".home-text");
const sectionTitleAbout = document.querySelector("#section-title-about");
const downloadCvText = document.querySelector(".info-left-col a");
const personalİnfo = document.querySelector("#personal-info");
const skills = document.querySelector("#skills");
const education = document.querySelector("#education");
const myName = document.querySelector("#my-name");
const myNameValue = document.querySelector("#my-name-value");
const mySurName = document.querySelector("#my-surname");
const mySurNameValue = document.querySelector("#my-surname-value");
const age = document.querySelector("#age");
const address = document.querySelector("#address");
const addressValue = document.querySelector(".address-value");
const phone = document.querySelector(".phone");
const algorithmics = document.querySelector("#algorithmics");
const algorithmicsDate = document.querySelector("#algorithmics-date");
const university = document.querySelector("#university");
const speciality = document.querySelector("#speciality");
const universityDate = document.querySelector("#university-date");
const seeMore = document.querySelector(".see-more");
const sectionTitleProjects = document.querySelector("#section-title-projects");

const sectionTitleContact = document.querySelector("#section-title-contact");
const nameInForm = document.querySelector("#name");
const emailInForm = document.querySelector("#email");
const messageInForm = document.querySelector("#message");
const submitButtonInForm = document.querySelector(".submit-button");

languages.querySelectorAll('a').forEach(otherButton => {
    otherButton.addEventListener('click', (e) => {
        language.forEach(a => {
            a.classList.remove('active-lang');
        })
        e.target.classList.add('active-lang');


        const attr = e.target.attributes[2].value;

        tabTitleHome.textContent = data[attr].tabTitleHome;
        tabTitleAbout.textContent = data[attr].tabTitleAbout;
        tabTitleProjects.textContent = data[attr].tabTitleProjects;
        tabTitleContact.textContent = data[attr].tabTitleContact;
        sectionTitleHome.textContent = data[attr].sectionTitleHome;
        homeText.textContent = data[attr].homeText;
        sectionTitleAbout.textContent = data[attr].sectionTitleAbout;
        downloadCvText.textContent = data[attr].downloadCvText;
        personalİnfo.textContent = data[attr].personalİnfo;
        skills.textContent = data[attr].skills;
        education.textContent = data[attr].education;
        myName.textContent = data[attr].myName;
        myNameValue.textContent = data[attr].myNameValue;
        mySurName.textContent = data[attr].mySurName;
        mySurNameValue.textContent = data[attr].mySurNameValue;
        age.textContent = data[attr].age;
        address.textContent = data[attr].address;
        addressValue.textContent = data[attr].addressValue;
        phone.textContent = data[attr].phone;
        algorithmics.textContent = data[attr].algorithmics;
        algorithmicsDate.textContent = data[attr].algorithmicsDate;
        university.textContent = data[attr].university;
        speciality.textContent = data[attr].speciality;
        universityDate.textContent = data[attr].universityDate;
        sectionTitleProjects.textContent = data[attr].sectionTitleProjects;
        seeMore.textContent = data[attr].seeMore;

        nameInForm.attributes[2].value = data[attr].nameInForm;
        emailInForm.attributes[2].value = data[attr].emailInForm;
        messageInForm.attributes[2].value = data[attr].messageInForm;
        submitButtonInForm.attributes[2].value = data[attr].submitButtonInForm;

        sectionTitleContact.textContent = data[attr].sectionTitleContact;

    })
})



const data = {
    en: {
        "tabTitleHome": "Home",
        "tabTitleAbout": "About me",
        "tabTitleProjects": "My projects",
        "tabTitleContact": "Contact",

        "sectionTitleHome": "HOME",
        "homeText": "Hello, I'm Naila Majidova. Have been active in the IT field  for 3 years, actively participating in related meetings, events, and projects. My goal is to become one of the best cybersecurity specialists in the country and continuously develop this field in our nation.",

        "sectionTitleAbout": "ABOUT ME",
        "downloadCvText": "Download  my CV",
        "personalİnfo": "Personal Info",
        "skills": "Skills",
        "education": "Education",
        "myName": "Name:",
        "myNameValue": "Naila",
        "mySurName": "Surname:",
        "mySurNameValue": "Majidova",
        "age": "Age:",
        "address": "Address:",
        "addressValue": "Yasamal, Baku, Azerbaijan",
        "phone": "Phone:",
        "algorithmics": "Algorithmics Azerbaijan - Code for Future",
        "algorithmicsDate": "02/2024 - Currently",
        "university": "Azerbaijan State Oil and Industry University",
        "speciality": "Bachelor’s Degree - İnformation Security",
        "universityDate": "09/2020 - Currently",

        "sectionTitleProjects": "MY PROJECTS",
        "seeMore": "See More",

        "sectionTitleContact": "CONTACT ME",
        "nameInForm": "YOUR NAME",
        "emailInForm": "YOUR EMAIL",
        "messageInForm": "YOUR MESSAGE",
        "submitButtonInForm": "SUBMIT",
    },
    az: {
        "tabTitleHome": "Əsas",
        "tabTitleAbout": "Haqqımda",
        "tabTitleProjects": "Proyektlərim",
        "tabTitleContact": "Əlaqə",

        "sectionTitleHome": "ƏSAS",
        "homeText": "Salam, mən Nailə Məcidova. 3 ildir ki, İT sahəsində fəaliyyət göstərir, müvafiq görüşlərdə, tədbirlərdə və layihələrdə fəal iştirak edir. Məqsədim ölkədə ən yaxşı kibertəhlükəsizlik mütəxəssislərindən biri olmaq və bu sahəni ölkəmizdə davamlı olaraq inkişaf etdirməkdir.",

        "sectionTitleAbout": "HAQQIMDA",
        "downloadCvText": "CV-mi yüklə",
        "personalİnfo": "Şəxsi Məlumat",
        "skills": "Bacarıqlar",
        "education": "Təhsil",
        "myName": "Ad:",
        "myNameValue": "Nailə",
        "mySurName": "Soyad:",
        "mySurNameValue": "Məcidova",
        "age": "Yaş:",
        "address": "Ünvan:",
        "addressValue": "Yasamal, Bakı, Azərbaycan",
        "phone": "Telefon:",
        "algorithmics": "Alqoritmika Azərbaycan - Code for Future",
        "algorithmicsDate": "02/2024 - Hal-hazırda",
        "university": "Azərbaycan Dövlət Neft və Sənaye Universiteti",
        "speciality": "Bakalavr - İnformasiya Təhlükəsizliyi",
        "universityDate": "09/2020 - Hal-hazırda",

        "sectionTitleProjects": "LAYİHƏLƏRİM",
        "seeMore": "Daha çox gör",

        "sectionTitleContact": "MƏNİMLƏ ƏLAQƏ",
        "nameInForm": "ADINIZ",
        "emailInForm": "EMAİLİNİZ",
        "messageInForm": "MESAJINIZ",
        "submitButtonInForm": "GÖNDƏRİN",
    },
    ru: {
        "tabTitleHome": "Главная",
        "tabTitleAbout": "Обо мне",
        "tabTitleProjects": "Проекты",
        "tabTitleContact": "Контакт",

        "sectionTitleHome": "ГЛАВНАЯ",
        "homeText": "Здравствуйте, я Наиля Меджидова. Работаю в сфере ИТ уже 3 года, активно участвуя в соответствующих встречах, мероприятиях и проектах. Моя цель — стать одним из лучших специалистов по кибербезопасности в стране и постоянно развивать эту область в нашей стране.",

        "sectionTitleAbout": "ОБО МНЕ",
        "downloadCvText": "Загрузите мое резюме",
        "personalİnfo": "Персональная инфо",
        "skills": "Навыки",
        "education": "Образование",
        "myName": "Имя:",
        "myNameValue": "Наиля",
        "mySurName": "Фамилия:",
        "mySurNameValue": "Меджидова",
        "age": "Возраст:",
        "address": "Адрес:",
        "addressValue": "Ясамал, Баку, Азербайджан",
        "phone": "Телефон:",
        "algorithmics": "Алгоритмиka Азербайджан - Code for Future",
        "algorithmicsDate": "02/2024 - В настоящее время",
        "university": "Азербайджанский Государственный Университет Нефти и Промышленности",
        "speciality": "Бакалавр - Информационная безопасность",
        "universityDate": "09/2020 - В настоящее время",

        "sectionTitleProjects": "МОИ ПРОЕКТЫ",
        "seeMore": "Узнать больше",

        "sectionTitleContact": "КОНТАКТ",
        "nameInForm": "ВАШЕ ИМЯ",
        "emailInForm": "ВАШ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ",
        "messageInForm": "ВАШЕ СООБЩЕНИЕ",
        "submitButtonInForm": "ОТПРАВЬ",
    }
};