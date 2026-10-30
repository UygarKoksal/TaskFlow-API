Proje yönergesine göre bu doküman; projenin amacını, kurguladığımız senaryoyu ve sistemin temel teknik özelliklerini özetleyen 1-2 sayfalık kısa bir rapor olmalıdır. GitHub repona "README.md" gibi kolayca ekleyebilmen için **Proje Tanıtım Dokümanı** taslağını hazırladım.

Bunu `Proje_Tanitimi.md` (veya PDF/Word olarak) kaydedip projene dahil edebilirsin. Yine repo için profesyonel durması adına hem Türkçe hem de İngilizce versiyonunu alt alta ekliyorum:

# TaskFlow - Proje Tanıtım Dokümanı

## 1. Projenin Amacı

Bu proje, Node.js ve Express.js teknolojileri kullanılarak geliştirilmiş kapsamlı bir Görev ve Proje Yönetim Sistemi API'sidir. Temel amacı; RESTful API mimarisi prensiplerine uygun olarak veri yönetimi, routing yapıları, middleware entegrasyonu ve CRUD operasyonlarının uçtan uca nasıl kurgulanacağını uygulamalı olarak göstermektir.

## 2. Proje Senaryosu

Bir yazılım şirketi; ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını merkezi bir sistem üzerinden takip etmek istemektedir. Geliştirilen bu sistem (TaskFlow), yöneticilerin ve ekip üyelerinin şu işlemleri yapabilmesine olanak tanır:

* Yeni görevlerin oluşturulması ve ekip üyelerine atanması.
* Görev durumlarının (bekliyor, tamamlandı) ve öncelik derecelerinin (yüksek, orta, düşük) takip edilmesi.
* Belirli kriterlere göre (örneğin sadece acil görevler veya tamamlanmış işler) görevlerin filtrelenmesi.


* Ekip iş yükünü analiz edebilmek için temel sistem istatistiklerinin (raporlama) çekilmesi.



## 3. Sistem Özeti ve Teknik Özellikler

Proje, tamamen geçici bellek (in-memory array) tabanlı çalışmakta olup aşağıdaki teknik gereksinimleri karşılamaktadır:

* **REST API Tasarımı:** Tüm uç noktalar (endpoints) standart HTTP metotlarına (GET, POST, PUT, DELETE) ve isimlendirme kurallarına uygun olarak yapılandırılmıştır.
* **CRUD İşlemleri:** Görev yönetimi için tam kapsamlı Ekleme, Listeleme, Detay Görüntüleme, Güncelleme ve Silme modülleri aktiftir.


* **Middleware Katmanları:**
* *Logger:* Sisteme gelen tüm istekleri zaman damgası, HTTP metodu ve URL bilgisi ile birlikte anlık olarak konsola loglar.


* *Validation:* Eksik veri (başlık, açıklama vb.) ile görev oluşturulmasını veya güncellenmesini 400 Bad Request hatası fırlatarak engeller.




* **Gelişmiş Fonksiyonlar (Ekstralar):** Duruma (status) ve önceliğe (priority) göre filtreleme ile sistemdeki toplam, bekleyen ve tamamlanan görevlerin istatistiğini veren raporlama servisleri API'ye başarıyla entegre edilmiştir.



---

# TaskFlow - Project Overview Document

## 1. Project Purpose

This project is a comprehensive Task and Project Management System API developed using Node.js and Express.js. Its primary purpose is to practically demonstrate the end-to-end implementation of data management, routing structures, middleware integration, and CRUD operations in accordance with RESTful API architecture principles.

## 2. Project Scenario

A software company needs to track tasks, projects, and employee responsibilities within the team through a centralized system. This developed system (TaskFlow) allows managers and team members to:

* Create new tasks and assign them to team members.
* Track task statuses (pending, completed) and priority levels (high, medium, low).
* Filter tasks based on specific criteria (e.g., only urgent tasks or completed jobs).


* Extract basic system statistics (reporting) to analyze the team's workload.



## 3. System Summary and Technical Features

The project operates entirely on an in-memory array basis and meets the following technical requirements:

* **REST API Design:** All endpoints are structured according to standard HTTP methods (GET, POST, PUT, DELETE) and naming conventions.
* **CRUD Operations:** Fully comprehensive modules for Adding, Listing, Viewing Details, Updating, and Deleting tasks are active.


* **Middleware Layers:**
* *Logger:* Instantly logs all incoming requests to the console along with a timestamp, HTTP method, and URL.


* *Validation:* Prevents task creation or updating with missing data by throwing a 400 Bad Request error.




* **Advanced Functions (Extras):** Filtering by status and priority, as well as reporting services providing statistics on total, pending, and completed tasks in the system, have been successfully integrated into the API.



---

