$(document).ready(function() {
    var $marquee = $('.marquee-content');
    var marqueeWidth = $marquee.width();
    var containerWidth = $('.marquee').width();
  
    console.log("Marquee Width: ", marqueeWidth); // Debugging ukuran konten
    console.log("Container Width: ", containerWidth); // Debugging ukuran container
  
    function startMarquee() {
      // Mulai marquee dari posisi di luar layar kanan
      $marquee.css({ left: containerWidth });
  
      // Hitung durasi animasi berdasarkan panjang konten
      var duration = (marqueeWidth + containerWidth) / 100 * 5000; // Sesuaikan kecepatan
  
      console.log("Duration: ", duration); // Debugging durasi animasi
  
      // Buat animasi berjalan dari kanan ke kiri
      $marquee.animate({ left: -marqueeWidth }, duration, 'linear', function() {
        // Setelah selesai, ulangi animasinya
        startMarquee();
      });
    }
  
    // Jalankan marquee saat halaman siap
    startMarquee();
  });
  