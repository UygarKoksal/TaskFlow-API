# TaskFlow - Görev ve Proje Yönetim Sistemi API

Bu proje, bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip etmesi için tasarlanmış bir RESTful API servisidir. Node.js ve Express.js kullanılarak tamamen REST API mantığında geliştirilmiştir.

## Özellikler

* **Temel CRUD Operasyonları:** Görev oluşturma, tüm görevleri listeleme, görev detayı görüntüleme, görev güncelleme ve sistemden görev silme.


* **Gelişmiş Filtreleme:** Görevleri duruma (`status`) veya önceliğe (`priority`) göre filtreleme.


* **Doğrulama (Validation):** Eksik veya hatalı veri gönderimlerini engelleyen kontrol mekanizması (400 Bad Request).


* **Raporlama:** Tamamlanan, bekleyen ve genel sistem özetini sunan raporlama uç noktaları.


* **Loglama:** Gelen tüm istekleri zaman damgasıyla birlikte kaydeden özel Logger middleware.



## Kurulum ve Çalıştırma Yönergesi

Projenin yerel ortamda (kendi bilgisayarınızda) çalıştırılması için aşağıdaki adımları izleyin:

1. **Projeyi İndirin:** Proje dosyalarını bilgisayarınıza indirin veya `git clone` komutu ile repoyu klonlayın.
2. **Dizine Geçin:** Terminal veya komut satırını açarak projenin bulunduğu ana klasöre gidin.
3. **Bağımlılıkları Yükleyin:** Terminalde aşağıdaki komutu çalıştırarak gerekli eklentileri kurun:
`npm install`
4. **Sunucuyu Başlatın:** Bağımlılıklar yüklendikten sonra aşağıdaki komutla sunucuyu ayağa kaldırın:
`node server.js`


5. **Test Edin:** Sunucu başarıyla çalıştığında terminalde `Server is running on port 3000` mesajını göreceksiniz. API artık `http://localhost:3000` adresi üzerinden Postman ile test edilmeye hazırdır.

---

# TaskFlow - Task and Project Management API

This project is a RESTful API service designed for a software company to track tasks, projects, and employee responsibilities within a team. It is developed using Node.js and Express.js entirely on REST API principles.

## Features

* **Core CRUD Operations:** Create a new task, list all tasks, view task details, update task information, and delete tasks from the system.


* **Advanced Filtering:** Filter tasks based on `status` or `priority`.


* **Validation:** Middleware to prevent incomplete or invalid data submission (Returns 400 Bad Request).


* **Reporting:** Endpoints providing summaries of completed, pending, and total tasks.


* **Logging:** Custom Logger middleware that records all incoming requests with a timestamp.



## Installation and Setup Guide

Follow these steps to run the project in your local environment:

1. **Download the Project:** Download the project files to your computer or clone the repository using `git clone`.
2. **Navigate to the Directory:** Open your terminal or command prompt and navigate to the project's root folder.
3. **Install Dependencies:** Run the following command in the terminal to install the required packages:
`npm install`
4. **Start the Server:** Once dependencies are installed, start the server using the following command:
`node server.js`


5. **Test the API:** When the server starts successfully, you will see `Server is running on port 3000` in the terminal. The API is now ready to be tested via Postman at `http://localhost:3000`.

