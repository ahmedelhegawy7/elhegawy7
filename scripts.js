// إعدادات canvas للرسم التفاعلي
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

// تحديد أبعاد canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ألوان الموجات
const colors = ['#FF0000', '#FF6347', '#FF4500'];

// دالة رسم الموجات
function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // مسح الـ Canvas

    // إعداد خصائص الموجة
    const waveCount = 5; // عدد الموجات
    const waveAmplitude = 40; // سعة الموجة
    const waveFrequency = 0.02; // تردد الموجة
    const waveSpeed = 0.05; // سرعة الموجة
    const centerY = canvas.height / 2;

    // رسم كل موجة
    for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.moveTo(0, centerY + Math.sin(i + waveFrequency * (Date.now() * waveSpeed)) * waveAmplitude);

        // رسم الموجة
        for (let x = 0; x < canvas.width; x++) {
            const y = centerY + Math.sin(x * waveFrequency + waveFrequency * (Date.now() * waveSpeed)) * waveAmplitude;
            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    requestAnimationFrame(drawWaves); // تكرار رسم الموجة
}

// بدء الحركة عند تحميل الصفحة
drawWaves();
