initSquad();
initKlasmen();
initNews();

let slideIndex = 1;
showSlides(slideIndex);

let squadIndex = 1;
showSquad(squadIndex);

function plusSquad(n){
    showSquad(squadIndex += n);
}

function currentSquad(n){
    showSquad(squadIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}

function showSquad(n) {
  let i;
  let squad = document.getElementsByClassName("squad");

  if (n > squad.length) {squadIndex = 1}    
  if (n < 1) {squadIndex = squad.length}
  for (i = 0; i < squad.length; i++) {
    squad[i].style.display = "none";  
  }

  squad[squadIndex-1].style.display = "block";  

}



function initSquad(){
    var squads = [
        { image: 'assets/image/squad-0.png', name: 'Muhammad Hadi Selamet Hariyanto', role: 'manajer' },
        { image: 'assets/image/squad-1.png', name: 'Ari Wijayanto', role: 'Center Back' },
        { image: 'assets/image/squad-2.png', name: 'Yulia Dwi Candra', role: 'Central Forward' },
        { image: 'assets/image/squad-3.png', name: 'Mohammad Akmal', role: 'Central Midfielder' },
        { image: 'assets/image/squad-4.png', name: 'Iswanto', role: 'Winger' }
    ];

    var list_squad = '';

    for (let index = 0; index < squads.length; index++) {
        const element = squads[index];
        list_squad += '<div class="squad fade"><img src="'+element.image+'"><p>'+element.name+'</p><span>'+element.role+'</span></div>';
    };

    list_squad += '<a class="prev" onclick="plusSquad(-1)">❮</a><a class="next" onclick="plusSquad(1)">❯</a>'

    document.getElementById('squads').innerHTML = list_squad;
}

function initKlasmen(){
    var tim = [
        { name: 'Persebi Boyolali', played: 3, point: 7 },
        { name: 'PSBL Langsa', played: 3, point: 5 },
        { name: 'Persitoli Tolikara', played: 3, point: 4 },
        { name: 'Persewangi', played: 3, point: 0 }
    ];

    var list_tim = '';
    for (let index = 0; index < tim.length; index++) {
        const element = tim[index];
        list_tim += ' <tr class="'+index+'"><td>'+(index+1)+'</td><td><span class="text-left">'+element.name+'</span></td><td><span>'+element.played+'</span></td><td><span>'+element.point+'</span></td></tr>';
    }
    document.getElementById('tabel-klasmen').innerHTML = list_tim;
}

function initNews() {
    var news = [
        { title: 'Persewangi Akhirnya Tereliminasi, Duo Sidoarjo Jaga Peluang', image: 'assets/image/news-1.jpg', date: '22 Februari 2022' },
        { title: 'Eks-Winger Persib Gabung Persewangi Banyuwangi di Liga 3 Putaran Nasional', image: 'assets/image/news-2.jpg', date: '10 Januari 2022' },
        { title: 'Gagal ke Final, Persewangi Tetap Lolos Zona Nasional', image: 'assets/image/news-3.jpg', date: '16 Desember 2021' },
        { title: 'Pemain Belum Terbiasa Main Malam, Persewangi Dihajar PSPK 1-4', image: 'assets/image/news-4.jpg', date: '17 November 2021' }
    ];
    
    var list_news = '';

    for (let index = 0; index < news.length; index++) {
        const element = news[index];
        list_news += `<li class="list-group-item">
                        <div class="news-img float-left"> 
                            <img class="fit-cover" src="`+element.image+`">
                        </div>                                
                        <div class="news-desc home float-right">
                            <span class="date">`+element.date+`</span>
                            <p> <a href="#">`+element.title+`</a></p>                                                            
                        </div>                                
                    </li>`
    }
    document.getElementById('list-news').innerHTML = list_news;            
}   