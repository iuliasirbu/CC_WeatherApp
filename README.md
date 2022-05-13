# CC_WeatherApp

Majoritatea site-urilor pe care un utilizator le accesează au la bază API-uri (Application Programming Interface). Acestea fac munca dezvoltatorilor mai ușoară, deoarece le oferă posibilitatea de a utiliza funcționalități deja existente, în schimbul unui abonament. API-urile pot avea diferite utilități, pornind de la machine learning, până la API-uri ce traduc texte în limbi regăsite în cărțile de ficțiune. 

În acest proiect am realizat o mini aplicație de vreme. Scopul aplicației este de a primi detalii privind descrierea stării vremii și temperatura actuală pentru un oraș și trimiterea acestor detalii pe mail, către un destinatar la alegere. 

Pentru a accesa informațiile privind vremea, am folosit API-ul site-ului OpenWeatherMap (https://openweathermap.org/api). Astfel, atunci când trimitem un nume de oraș printr-un request, ni se va returna un JSON, unde avem detalii despre vremea în orașul respectiv, în momentul de față. Pentru a utiliza acest API, am generat un API key pe care l-am stocat în fișierul .env și pe care l-am introdus în url-ul request-ului.

Pentru trimiterea mail-urilor am folosit API-ul SendGrid (https://sendgrid.com/). Am setat contul ce va trimite e-mail-urile cu adresa de e-mail personală, iar ceilalti parametrii din request vor fi numele expeditorului, adresa de e-mail a destinatarului și mesajul, ce constă într-un string concatenat folosind detalii preluate din raspunsul API-ului de vreme. Pentru autentificare, am generat un API key, stocat în fișierul .env, și a fost setat prin funcția setApiKey în fișierul ce conține funcțiile de trimitere e-mailuri.

Am creat o bază de date pentru a stoca e-mail-urile trimise. În baza de date vom regăsi aceleași detalii ca cele din request-ul API-ului SendGrid:

![image](https://user-images.githubusercontent.com/83769025/168390219-a0b46b7b-430d-4467-913c-05c619e8c896.png)

În cadrul aplicației, am folosit mai multe metode HTTP:

GetMessages - Returnarea e-mail-urilor din baza de date

![image](https://user-images.githubusercontent.com/83769025/168390650-e26ece45-7386-4d26-8c31-967892303b55.png)

GetWeather - Returnarea string-ului concatenat cu detalii privind vremea pentru un anumit oras

![image](https://user-images.githubusercontent.com/83769025/168390783-75b4ddfc-f5e5-49e2-9a08-4d9784ef1ff9.png)

SendMail - Introducerea unui e-mail în baza de date

![image](https://user-images.githubusercontent.com/83769025/168391067-ec2f7a98-0726-4bc8-8a0f-355f23c266b8.png)

DeleteMessageById - Stergerea unui e-mail din baza de date

![image](https://user-images.githubusercontent.com/83769025/168391179-05f59f10-83a0-4016-9816-43cdd9d05479.png)


În interfața aplicației putem găsi 3 secțiuni: lista e-mail-urilor anterioare, selectarea unui oraș pentru a returna detalii despre vreme și form-ul pentru trimitere de e-mail-uri.

![image](https://user-images.githubusercontent.com/83769025/168391700-c228143d-83b4-4e8f-a0d2-3d58329b5da2.png)

După introducerea numelui unui oraș, la apăsarea butonului Search, ni se afișează string-ul concatenat:

![image](https://user-images.githubusercontent.com/83769025/168391875-355597f9-a109-4a6a-8738-23cf4f3fb94e.png)

La apăsarea butonului de trimitere e-mail, primim o alertă prin care ni se confirmă trimiterea acestuia:

![image](https://user-images.githubusercontent.com/83769025/168391999-8f688b6a-f0d7-4f9b-aa21-695d00ff43d4.png)

![image](https://user-images.githubusercontent.com/83769025/168392055-1674098b-6de9-4c5e-9da1-e5525fe1bb94.png)

La reîncarcarea paginii, lista cu mail-urile trimise va fi actualizată:

![image](https://user-images.githubusercontent.com/83769025/168392352-27bb39cd-1a5b-45fa-8676-02bddec3b21e.png)

Bibliografie:
https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication
https://openweathermap.org/current#name
Seminar Cloud Computing

Link video youtube: https://youtu.be/bTXaBwkaGco
