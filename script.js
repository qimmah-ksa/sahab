/**
 * ملف البرمجة الخاص بموقع سحاب علي الصبيحي
 * مخصص للأنيميشن، قائمة الجوال، وزر العودة للأعلى
 */

// 1. تفعيل مكتبة الأنيميشن (AOS)
// ملاحظة: تأكد أن استدعاء المكتبة الخارجي موجود في صفحة HTML
AOS.init({
    duration: 1000, // مدة الحركة بالألف من الثانية
    once: true      // الحركة تحدث مرة واحدة فقط عند التمرير
});

// 2. وظيفة قائمة الجوال (إظهار وإخفاء الروابط)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
    }
}

// 3. وظيفة مراقبة التمرير (ظهور الزر واختفاؤه)
window.onscroll = function() {
    let saba_btn = document.getElementById("backToTop"); 
    if (saba_btn) {
        // إذا نزل المستخدم أكثر من 300 بكسل يظهر الزر
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            saba_btn.style.display = "block";
        } else {
            saba_btn.style.display = "none";
        }
    }
};

// 4. وظيفة العودة للأعلى بنعومة
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}